import { useState, useEffect } from 'react';
import Spinner from '../common/Spinner';
import { useAuthentication } from '../authentication/useAuthentication';
import { Button } from 'react-bootstrap';
import MiningForm from '../mining/MiningForm';

const Home = () => {

    const [token, setToken] = useState(null);

    const { validateToken, logout } = useAuthentication();

    useEffect(() => {
        
        const token = validateToken();
        setToken(token);
    }, []);

    const handleLogout = () => logout();

    return (
        <>
            {
                token ? 
                    <div className="d-flex flex-column justify-content-center align-items-center w-100">
                        <MiningForm />
                        <Button variant="danger"
                            onClick={() => handleLogout()}>
                            Logout
                        </Button>                        
                    </div> :
                    <Spinner />
            }
        </>
    )
};

export default Home;