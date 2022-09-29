import ItemContainer from "./ItemContainer";
import FlintNode from "./nodes/FlintNode";
import StoneNode from "./nodes/StoneNode";

const NodeContainer = ({
    miningResult
}) => {

    return (
        <div className="node-container">
            <div className="position-relative">
            
                {/* <StoneNode lastMine={miningResult?.lastMine}/> */}

                <FlintNode lastMine={miningResult?.lastMine}/>
            </div>

            <ItemContainer miningResult={miningResult} />
        </div>
    )
};

export default NodeContainer;