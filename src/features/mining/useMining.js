import { useState } from 'react';
import ultiminer from '../config/axiosUltiminer';
import moment from 'moment';

export const useMining = ({
    setExperience,
    setInventory
}) => {

    const [miningResult, setLastMine] = useState();

    const mine = async () => {

        try {
            
            //Hit the mine api
            const route = '/Mine';
            const request = { nodeId: 'Node.Stone' };  //Only mining stone for now
            const response = await ultiminer.post(route, request);


            //Store the result in the lastMine state
            const result = response.data.value;

            //Update experience
            setExperience(result.exp);

            //Update inventory
            setInventory(result.resources);

            //Set result
            const miningResult = {
                newItems: result.resources.newResources,
                newExp: result.exp.newExperience,
                lastMine: moment(),
                nextMine: moment(result.nextMine)
            };
            setLastMine(miningResult);

        }  catch (err) {
            console.error(`Mining Error: ${err}`);
        }
    };

    return { miningResult, mine };
};