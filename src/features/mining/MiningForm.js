import { useOutletContext } from 'react-router-dom';

import MiningButtons from './MiningButtons';
import NodeContainer from './NodeContainer';
import ExperienceBar from '../experience/ExperienceBar';

import './Mining.css';

const MiningForm = () => {

    const { experience, miningResult, mine, selectedNode } = useOutletContext();

    return (
        <div className="d-flex flex-column">

            <div className="d-flex flex-column my-auto">

                <NodeContainer 
                    miningResult={miningResult}
                    selectedNode={selectedNode}
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