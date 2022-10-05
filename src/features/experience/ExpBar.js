
import { ProgressBar } from "react-bootstrap";

const ExpBar = ({
    miningResult
}) => {

    return (
        <div className="d-flex align-items-center my-3 text-secondary">

            <ProgressBar 
                className="w-100"
                variant="secondary" 
                now={miningResult ? 
                    miningResult.exp.experience / miningResult.exp.next_level_experience * 100
                    :
                    0
                }
            />

            <h4 className="m-0 ms-3">{miningResult?.exp.level || 0}</h4>
        </div>
    )
};

export default ExpBar;