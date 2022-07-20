import { useNavigate  } from 'react-router-dom';
import { useDiscordAuth } from '../discord/useDiscordAuth';
import { useTokenExchange } from '../discord/useTokenExchange';
import { useTokenCookie } from '../cookies/useTokenCookie';

export const useAuthentication = () => {

    const navigate = useNavigate();

    const { verifyOAuthState } = useDiscordAuth();
    const exchangeAuthCode = useTokenExchange();
    const { setTokenCookie, getTokenCookie, removeTokenCookie } = useTokenCookie();

    const receiveToken = async () => {

        const authCode = verifyOAuthState();
        await exchangeAuthCode(authCode).then(response => {
 
            if (response.success) {

                const token = response.token;
                setTokenCookie(token.access_token, token.expires_in);
                return navigate('/');
            }

            //If response was not success and we're still here, there was an error :(
            return(response.error);
        });
    };

    const validateToken = () => {

        const token = getTokenCookie();

        //TODO: create useToken hook to get extract data from cookie.
        //TODO: check if the data inside the token has expired when logging out.

        if (!token) {
            return logout();
        }

        return token;
    }

    const logout = () => {

        removeTokenCookie();
        return navigate('/login');
    }

    return { receiveToken, validateToken, logout };
};