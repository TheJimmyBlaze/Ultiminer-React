import { memo } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useNodeModelSolver } from './useNodeModelSolver';

const NodeFrame = memo(({
    node,
    selectedNode,
    setSelectedNode
}) => {    
    
    const navigate = useNavigate();
    const getModel = useNodeModelSolver();

    const isSelected = () => (
        selectedNode?.nodeId === node.nodeId
    );

    return (
        <div className="d-flex flex-column m-1 p-3 swapper-frame-background">

            <img 
                className="swapper-node-sprite"
                src={getModel(node.nodeId).sprite}
            />
            
            <Button 
                className="mt-3"
                variant={isSelected() ? "primary" : "secondary"}
                onClick={() => {
                    setSelectedNode(node);
                    navigate('/');
                }}
            >
                {node.displayName}
            </Button>
        </div>
    )
});

export default NodeFrame;