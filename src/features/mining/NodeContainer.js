import StoneNode from "./nodes/StoneNode";

const NodeContainer = () => {

    const frameRate = 500;

    return (
        <div className="node-container">
            <div className="position-relative">

                <StoneNode framesPerSecond={frameRate}/>
            </div>
        </div>
    )
};

export default NodeContainer;