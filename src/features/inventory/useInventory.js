
import ultiminer from '../config/axiosUltiminer';
import { useState } from 'react';

export const useInventory = () => {

    const [inventory, setInventory] = useState(null);

    const getInventory = async () => {

        //If inventory is null, call the API to load the items
        if (inventory === null) {

            try {

                const route = '/Resources';
                const response = await ultiminer.get(route);

                //Store the result in state
                const result = response.data.value;
                setInventory(result);

            } catch (err) {
                console.log(`Error loading experience: ${err}`);
            }
        }
    };

    return { inventory, getInventory, setInventory };
};