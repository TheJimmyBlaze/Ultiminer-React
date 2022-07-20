import { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useDiscordAuth } from '../discord/useDiscordAuth';
import { useTokenExchange } from './useTokenExchange';
import { useTokenCookie } from '../cookies/useTokenCookie';
import AuthenticationFailed from './AuthenticationFailed';

const Authentication = () => {
    
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const { verifyOAuthState } = useDiscordAuth();
    const { exchangeAuthCode } = useTokenExchange();
    const { setTokenCookie } = useTokenCookie();

    useEffect(() => {

        const authCode = verifyOAuthState();
        exchangeAuthCode(authCode).then(response => {

            if (response.success) {

                const token = response.token;
                setTokenCookie(token.access_token, token.expires_in);
                return navigate('/');
            }

            //If response was not success and we're still here, there was an error :(
            setLoading(false);
        });


    }, []);

    return (
        <>
        {
            loading ?
                <h1 className="text-inset">
                    <i className="fa fa-circle-notch fa-spin"/>
                </h1> :
                <AuthenticationFailed />
        }
        </>
    )
};

export default Authentication;