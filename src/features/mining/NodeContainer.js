import StoneNode from "./nodes/Stone";

const NodeContainer = () => {

    return (
        <div className="d-flex justify-content-center"
            style={{padding: "200px"}}>
            <div className="position-relative"
                style={{width: "8px", height: "8px", background: "red"}}>
                <StoneNode />
            </div>
        </div>
    )
};

export default NodeContainer;