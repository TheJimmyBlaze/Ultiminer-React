
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthentication } from '../authentication/useAuthentication';
import { useExperience } from '../experience/useExperience';
import { useInventory } from '../inventory/useInventory';
import { useMining } from '../mining/useMining';
import NavigationForm from '../navigation/NavForm';
import InsightForm from '../insight/InsightForm';

import './Home.css';

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

        <div className="d-flex w-100">

            <NavigationForm />
            
            <div className="d-flex justify-content-center w-100 home-panel">
                <Outlet context={{
                    experience,
                    inventory,
                    miningResult,
                    mine
                }}/>            
            </div>

            <InsightForm />
        </div>
    )
};

export default Home;