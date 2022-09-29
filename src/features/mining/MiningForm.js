import MiningButtons from "./MiningButtons";
import NodeContainer from "./NodeContainer";
import { useMining } from "./useMining";

import './Mining.css';

const MiningForm = () => {

    const {miningResult, mine} = useMining();

    return (
        <div>

            <NodeContainer 
                miningResult={miningResult}
            />

            <MiningButtons 
                miningResult={miningResult}
                mine={mine}
            />
        </div>
    )
};

export default MiningForm;