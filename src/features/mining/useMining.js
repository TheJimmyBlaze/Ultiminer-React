import { useState } from 'react';
import axios from 'axios';
import { useConfig } from '../config/useConfig';

export const useMining = () => {

    const config = useConfig();

    const [lastMine, setLastMine] = useState();

    const mine = async () => {

        try {
            
            const route = `${config.ultiminerURL}/Mine`;
            const request = { node_id: "Node.Stone" };  //Only mining stone for now
            const response = await axios.post(route, request, { withCredentials: true });

            console.log(JSON.stringify(response.data.value.new_resources));
        }  catch (err) {

            console.error(`Mining Error: ${err}`);
        }
    };

    return { lastMine, mine };
};