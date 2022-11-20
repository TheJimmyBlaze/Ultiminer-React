
import { Button } from "react-bootstrap";
import { useOutletContext, useNavigate } from "react-router-dom";
import PageHeader from "../common/PageHeader";

const NodeSwapperForm = () => {

    const { unlockedNodes, selectedNode, setSelectedNode } = useOutletContext();
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-column w-100 mx-4">
            <PageHeader title="Swap Nodes" />

            {
                unlockedNodes?.unlocked?.map(node => {
                    return (
                        <div key={node.nodeId}>
                            {node.displayName}
                            <Button onClick={() => {
                                setSelectedNode(node.nodeId);
                                navigate('/');
                            }}>
                                Select
                            </Button>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default NodeSwapperForm;