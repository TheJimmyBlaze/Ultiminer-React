
import { ProgressBar } from "react-bootstrap";

const ExperienceBar = ({
    experience
}) => {
    
    return (
        <div className="d-flex align-items-center my-3 text-secondary">

            <ProgressBar 
                className="w-100"
                variant="secondary" 
                now={experience && experience.experience / experience.nextLevelExperience * 100}
            />

            <h4 className="m-0 ms-3">{experience && experience.level}</h4>
        </div>
    )
};

export default ExperienceBar;