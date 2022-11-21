
import { useOutletContext } from 'react-router-dom';
import PageHeader from '../common/PageHeader';
import NodeFrame from './NodeFrame';
import LockedNodeFrame from './LockedNodeFrame';

import './NodeSwapper.css';

const NodeSwapperForm = () => {

    const { unlockedNodes, selectedNode, setSelectedNode } = useOutletContext();

    return (
        <div className="d-flex flex-column w-100 mx-4">
            <PageHeader title="Swap Nodes" />

            <div className="d-flex my-4 align-items-start">
                {
                    unlockedNodes?.unlocked?.map(node => {
                        return (
                            <div key={node.nodeId}>
                                <NodeFrame
                                    node={node}
                                    selectedNode={selectedNode}
                                    setSelectedNode={setSelectedNode}
                                />
                            </div>
                        )
                    })
                }

                <LockedNodeFrame
                    node={unlockedNodes?.nextUnlock}
                />
            </div>
        </div>
    )
};

export default NodeSwapperForm;