import { useState, useEffect } from 'react';
import Spinner from '../common/Spinner';
import { useAuthentication } from '../authentication/useAuthentication';
import { Button } from 'react-bootstrap';
import MiningForm from '../mining/MiningForm';

const Home = () => {

    const [token, setToken] = useState(null);

    const { validateToken } = useAuthentication();

    useEffect(() => {
        
        const token = validateToken();
        setToken(token);
    }, []);

    return (
        <>
            {
                <div className="d-flex justify-content-center w-100">
                    <MiningForm />                
                </div> 
            }
        </>
    )
};

export default Home;