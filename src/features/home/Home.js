
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthentication } from '../authentication/useAuthentication';
import { useExperience } from '../experience/useExperience';
import { useInventory } from '../inventory/useInventory';
import { useMining } from '../mining/useMining';
import { useNodeSelection } from '../node_swapper/useNodeSelection';
import NavigationForm from '../navigation/NavForm';
import InsightForm from '../insight/InsightForm';

import './Home.css';
import { useActivityLog } from '../activity_log/useActivityLog';
import { useUnlockedNodes } from '../node_swapper/useUnlockedNodes';

const Home = () => {

    const { validateToken } = useAuthentication();

    const { log, addLog } = useActivityLog();
    const { experience, getExperience, setExperience } = useExperience();
    const { inventory, getInventory, setInventory } = useInventory();
    const { unlockedNodes, getUnlockedNodes } = useUnlockedNodes();
    const { selectedNode, getSelectedNode, setSelectedNode } = useNodeSelection();

    const { miningResult, mine } = useMining({ 
        addLog,
        setExperience,
        setInventory
    });

    //Initializes game state
    useEffect(() => {
        
        const token = validateToken();
        if (token == null) {
            return;
        }

        getExperience();
        getInventory();
        getUnlockedNodes();
        getSelectedNode();

    }, []);

    //Re-retrieve unlocked nodes when the players level changes
    useEffect(() => { 

        if (experience?.level > 1)
        {
            getUnlockedNodes();
        }
    }, [experience?.level]);

    return (

        <div className="d-flex w-100">

            <NavigationForm />
            
            <div className="d-flex justify-content-center w-100 home-panel">
                <Outlet context={{
                    experience,
                    unlockedNodes,
                    inventory,
                    miningResult,
                    mine,
                    selectedNode,
                    setSelectedNode
                }}/>            
            </div>

            <InsightForm log={log}/>
        </div>
    )
};

export default Home;