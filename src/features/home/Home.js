import { useEffect } from 'react';
import { useAuthentication } from '../authentication/useAuthentication';
import { useExperience } from '../experience/useExperience';
import { useMining } from "../mining/useMining";
import MiningForm from '../mining/MiningForm';

const Home = () => {

    const { validateToken } = useAuthentication();

    const { experience, getExperience, setExperience } = useExperience();

    const { miningResult, mine } = useMining({ 
        setExperience 
    });

    //Initializes game state
    useEffect(() => {
        
        validateToken();
        getExperience();

    }, []);

    return (
        <>
            {
                <div className="d-flex justify-content-center w-100">
                    <MiningForm experience={experience}
                        miningResult={miningResult}
                        mine={mine}
                    />                
                </div> 
            }
        </>
    )
};

export default Home;