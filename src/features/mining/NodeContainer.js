import ItemContainer from './ItemContainer';
import FlintNode from './nodes/FlintNode';
import StoneNode from './nodes/StoneNode';

const NodeContainer = ({
    miningResult,
    selectedNode
}) => {

    return (
        <div className="mine-node-container">
            <div className="position-relative">
            
                { selectedNode === "Node.Stone" && <StoneNode lastMine={miningResult?.lastMine}/> }
                { selectedNode === "Node.Flint" && <FlintNode lastMine={miningResult?.lastMine}/> }

            </div>

            <ItemContainer miningResult={miningResult} />
        </div>
    )
};

export default NodeContainer;