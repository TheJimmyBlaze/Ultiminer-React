
import React from 'react';
import { useNodeModelSolver } from '../node_swapper/useNodeModelSolver';
import ItemContainer from './ItemContainer';
import Spinner from '../common/Spinner';

const NodeContainer = ({
    miningResult,
    selectedNode
}) => {

    const getModel = useNodeModelSolver();

    const renderModel = () => {

        const nodeId = selectedNode?.nodeId;

        //If the selectedNode isn't loaded yet, render a spinner :)
        if (nodeId == null) {
            return <Spinner />
        }

        //Get a clone of the model with the lastMine props
        const model = getModel(nodeId);
        return <model.component lastMine={miningResult?.lastMine}/>
    }

    return (
        <div className="mine-node-container">
            <div className="position-relative">
                {renderModel()}
            </div>

            <ItemContainer miningResult={miningResult} />
        </div>
    )
};

export default NodeContainer;