import MiningButtons from "./MiningButtons";
import NodeContainer from "./NodeContainer";
import { useMining } from "./useMining";

import './Mining.css';
import ExpBar from "../experience/ExpBar";

const MiningForm = () => {

    const {miningResult, mine} = useMining();

    return (
        <div className="d-flex flex-column">

            <div className="d-flex flex-column my-auto">

                <NodeContainer 
                    miningResult={miningResult}
                />

                <MiningButtons 
                    miningResult={miningResult}
                    mine={mine}
                />
            </div>

            <ExpBar 
                miningResult={miningResult}
            />
        </div>
    )
};

export default MiningForm;