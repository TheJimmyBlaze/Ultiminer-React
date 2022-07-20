import { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useTokenCookie } from '../cookies/useTokenCookie';
import Spinner from '../common/Spinner';
import Logout from '../authentication/Logout';

const Home = () => {

    const navigate = useNavigate();

    const [token, setToken] = useState(true);

    const { getTokenCookie, removeTokenCookie } = useTokenCookie();

    useEffect(() => {
        
        const token = getTokenCookie();

        //TODO: create useToken hook to get extract data from cookie.
        //TODO: check if the data inside the token has expired when logging out.

        if (!token) {
            return logout();
        }

        setToken(token);
    }, []);

    const logout = () => {

        removeTokenCookie();
        return navigate('/login');
    };

    return (
        <>
            {
                token ? 
                    <div className="d-flex flex-column">
                        <p>Hello <i className="fa fa-smile"/></p>
                        <Logout logout={logout.bind(this)}/>
                    </div> :
                    <Spinner />
            }
        </>
    )
};

export default Home;