import MiningButtons from "./MiningButtons";

import './Mining.css';
import NodeContainer from "./NodeContainer";

const MiningForm = () => {

    return (
        <div className="mining-container w-100">

            <NodeContainer />

            <MiningButtons />
        </div>
    )
};

export default MiningForm;