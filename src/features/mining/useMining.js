import { useState } from 'react';
import axios from '../config/axiosUltiminer';
import moment from 'moment';

export const useMining = ({
    setInventory,
    setExperience
}) => {

    const [miningResult, setLastMine] = useState();

    const mine = async () => {

        try {
            
            //Hit the mine api
            const route = "/Mine";
            const request = { node_id: "Node.Flint" };  //Only mining stone for now
            const response = await axios.post(route, request);


            //Store the result in the lastMine state
            const result = response.data.value;

            //Update experience
            setExperience(result.exp);

            //Update inventory
            //TODO: actually implement inventory this way

            //Set result
            const miningResult = {
                newItems: result.resources.new_resources,
                newExp: result.exp.new_experience,
                lastMine: moment(),
                nextMine: moment(result.next_mine)
            };
            setLastMine(miningResult);

        }  catch (err) {
            console.error(`Mining Error: ${err}`);
        }
    };

    return { miningResult, mine };
};