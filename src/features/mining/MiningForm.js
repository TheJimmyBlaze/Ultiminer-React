import { useOutletContext } from 'react-router-dom';

import MiningButtons from './MiningButtons';
import NodeContainer from './NodeContainer';
import ExperienceBar from '../experience/ExperienceBar';
import PageHeader from '../common/PageHeader';

import './Mining.css';

const MiningForm = () => {

    const { experience, miningResult, mine, selectedNode } = useOutletContext();

    return (
        <div className="d-flex flex-column w-100 mx-4">
            <PageHeader title={
                <div className="d-flex">
                    Mining
                    <div className="text-primary ms-2">
                        {selectedNode?.displayName || "Something..."}
                    </div>
                </div>
            } />

            <div className="d-flex flex-column h-100 mx-auto">

                <div className="my-auto">

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
        </div>
    )
};

export default MiningForm;