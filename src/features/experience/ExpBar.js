
import { ProgressBar } from "react-bootstrap";

const ExpBar = ({
    miningResult
}) => {

    return (
        <div className="my-3 text-center text-secondary">

            <h4>{miningResult?.exp.level || 0}</h4>

            <ProgressBar 
                variant="secondary" 
                now={miningResult ? 
                    miningResult.exp.experience / miningResult.exp.next_level_experience * 100
                    :
                    0
                }
            />
        </div>
    )
};

export default ExpBar;