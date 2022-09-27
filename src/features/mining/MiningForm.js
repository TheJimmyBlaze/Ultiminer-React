import MiningButtons from "./MiningButtons";

import './Mining.css';
import NodeContainer from "./NodeContainer";
import { useMining } from "./useMining";

const MiningForm = () => {

    const {miningResult, mine} = useMining();

    return (
        <div>

            <NodeContainer 
                lastMine={miningResult?.lastMine}
            />

            <MiningButtons 
                miningResult={miningResult}
                mine={mine}
            />
        </div>
    )
};

export default MiningForm;