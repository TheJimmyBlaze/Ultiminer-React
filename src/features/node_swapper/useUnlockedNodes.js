
import ultiminer from '../config/axiosUltiminer';
import { useState } from 'react';

export const useUnlockedNodes = () => {

    const [unlockedNodes, setUnlockedNodes] = useState(null);

    const getUnlockedNodes = async () => {

        try {

            const route = '/UnlockedNodes';
            const response = await ultiminer.get(route);

            //Store the result in state
            const result = response.data.value;
            setUnlockedNodes(result);

        } catch (err) {
            console.log(`Error loading unlocked nodes: ${err}`);
        }
    }

    return { unlockedNodes, getUnlockedNodes };
};