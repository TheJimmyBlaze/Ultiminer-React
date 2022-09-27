import { useState } from 'react';

import moment from 'moment';

import MiningButtons from "./MiningButtons";

import './Mining.css';
import NodeContainer from "./NodeContainer";
import { useMining } from './useMining';

const MiningForm = () => {

    const { mine } = useMining();

    const [lastMine, setLastMine] = useState(null);

    const doMine = () => {

        //This is where the API call will go
        mine();

        setLastMine(moment());
    }

    return (
        <div>

            <NodeContainer lastMine={lastMine}/>

            <MiningButtons mine={() => doMine()}/>
        </div>
    )
};

export default MiningForm;