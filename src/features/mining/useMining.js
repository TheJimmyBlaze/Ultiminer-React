import { useState } from 'react';
import axios from '../config/axiosUltiminer';
import moment from 'moment';

export const useMining = () => {

    const [miningResult, setLastMine] = useState();

    const mine = async () => {

        try {
            
            //Hit the mine api
            const route = "/Mine";
            const request = { node_id: "Node.Flint" };  //Only mining stone for now
            const response = await axios.post(route, request, { withCredentials: true });

            //Store the result in the lastMine state
            const result = response.data.value;
            const miningResult = {
                newItems: result.resources.new_resources,
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