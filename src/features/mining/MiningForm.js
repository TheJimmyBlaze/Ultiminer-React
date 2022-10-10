import { useOutletContext } from "react-router-dom";

import MiningButtons from './MiningButtons';
import NodeContainer from './NodeContainer';

import './Mining.css';
import ExperienceBar from '../experience/ExperienceBar';

const MiningForm = () => {

    const [experience, miningResult, mine] = useOutletContext();

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

            <ExperienceBar 
                experience={experience}
            />
        </div>
    )
};

export default MiningForm;