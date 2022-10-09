import { useEffect } from 'react';
import { useAuthentication } from '../authentication/useAuthentication';
import { useExperience } from '../experience/useExperience';
import { useInventory } from '../inventory/useInventory';
import { useMining } from "../mining/useMining";

import MiningForm from '../mining/MiningForm';

const Home = () => {

    const { validateToken } = useAuthentication();

    const { experience, getExperience, setExperience } = useExperience();
    const { inventory, getInventory, setInventory } = useInventory();

    const { miningResult, mine } = useMining({ 
        setExperience,
        setInventory
    });

    //Initializes game state
    useEffect(() => {
        
        validateToken();
        getExperience();
        getInventory();

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