import { memo } from 'react';
import { Button } from 'react-bootstrap';
import { useNodeModelSolver } from './useNodeModelSolver';

const LockedNodeFrame = memo(({
    node
}) => {    
    
    const getModel = useNodeModelSolver();

    return (
        node && 
        <div className="d-flex flex-column m-1 p-3 swapper-frame-background">

            <img 
                className="swapper-node-sprite locked"
                src={getModel(node.nodeId).silhouette}
            />
            
            <Button 
                className="mt-3"
                variant="outline-secondary"
                disabled
            >
                <i className="fa-solid fa-lock" /> Requires lvl {node.levelRequired}
            </Button>
        </div>
    )
});

export default LockedNodeFrame;