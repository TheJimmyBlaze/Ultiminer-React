import ultiminer from '../config/axiosUltiminer';
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
        const response = await exchangeAuthCode(authCode);
 
        const token = response.token;
        if (token) {

            setTokenCookie(token.accessToken, token.expiresIn);
            return navigate('/');
        }

        //If response was not success and we're still here, there was an error :(
        return(response.error);
    };

    const validateToken = () => {

        const token = getTokenCookie();

        if (token == null) {
            return logout();
        }

        //Set axios auth interceptor
        ultiminer.interceptors.request.use(
            config => {
                config.headers['Authorization'] = `Bearer ${token}`;
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );

        return token;
    }

    const logout = () => {

        removeTokenCookie();
        return navigate('/login', { replace: true });
    }

    return { receiveToken, validateToken, logout };
};