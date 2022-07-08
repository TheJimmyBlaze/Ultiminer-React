import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useStateCookie } from '../cookies/useStateCookie.js';

export const useDiscordAuth = () => {

    const discordAppID = '994537896608530483';
    const redirectURL = 'http%3A%2F%2Flocalhost%3A3000%2Fauth';

    const { setStateCookie, getStateCookie, removeStateCookie } = useStateCookie();
    const location = useLocation();

    const generateRedirectURL = (appID, redirectURL, state) => (
        `https://discord.com/api/oauth2/authorize?client_id=${appID}&state=${state}&redirect_uri=${redirectURL}&response_type=code&scope=identify`
    );

    const discordOAuthRedirect = () => {

        const state = setStateCookie();
        const generatedURL = generateRedirectURL(discordAppID, redirectURL, state);

        window.location.href = generatedURL;
    };

    const verifyOAuthState = () => {

        const cookieState = getStateCookie();
        removeStateCookie();

        const parameters = queryString.parse(location.search);
        const paramState = parameters.state;

        if (cookieState === paramState)
            return parameters.code;
        
        return null;
    };

    return { discordOAuthRedirect, verifyOAuthState };
};