import StoneNode from "./nodes/StoneNode";

const NodeContainer = ({
    lastMine
}) => {

    const frameRate = 100;

    return (
        <div className="node-container">
            <div className="position-relative">

                <StoneNode 
                    frameRate={frameRate}
                    lastMine={lastMine}
                />
            </div>
        </div>
    )
};

export default NodeContainer;