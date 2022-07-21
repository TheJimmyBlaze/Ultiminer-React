import { useState, useEffect } from 'react';
import axios from 'axios';
import { useConfig } from '../config/useConfig';
import Spinner from '../common/Spinner';
import { useAuthentication } from '../authentication/useAuthentication';
import { Button } from 'react-bootstrap';

const Home = () => {

    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);

    const config = useConfig();

    const { validateToken, logout } = useAuthentication();

    useEffect(() => {
        
        const token = validateToken();
        setToken(token);

        const route = `${config.ultiminerURL}/@Me`;
        axios.get(route, { headers: {
                'Authorization': `Bearer ${token}`
            }}).then(response => {
                setUserData(response.data.value.username);
            });
    }, []);

    const handleLogout = () => logout();

    return (
        <>
            {
                token ? 
                    <div className="d-flex flex-column">
                        <p>Hello: {userData}</p>
                        <Button variant="danger" onClick={() => handleLogout()}>
                            Logout
                        </Button>                        
                    </div> :
                    <Spinner />
            }
        </>
    )
};

export default Home;