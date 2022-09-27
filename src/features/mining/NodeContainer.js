import FlintNode from "./nodes/FlintNode";
import StoneNode from "./nodes/StoneNode";

const NodeContainer = ({
    lastMine
}) => {

    return (
        <div className="node-container">
            <div className="position-relative">
            
                <StoneNode lastMine={lastMine}/>

                {/* <FlintNode lastMine={lastMine}/> */}
            </div>
        </div>
    )
};

export default NodeContainer;