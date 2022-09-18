import { useState } from 'react';

import moment from 'moment';

import MiningButtons from "./MiningButtons";

import './Mining.css';
import NodeContainer from "./NodeContainer";

const MiningForm = () => {

    const [lastMine, setLastMine] = useState(null);

    const mine = () => {

        //This is where the API call will go

        setLastMine(moment());
    }

    return (
        <div>

            <NodeContainer lastMine={lastMine}/>

            <MiningButtons mine={() => mine()}/>
        </div>
    )
};

export default MiningForm;