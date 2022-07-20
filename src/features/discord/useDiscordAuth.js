import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useConfig } from '../config/useConfig';
import { useStateCookie } from '../cookies/useStateCookie';

export const useDiscordAuth = () => {

    const config = useConfig();

    const { setStateCookie, getStateCookie, removeStateCookie } = useStateCookie();
    const location = useLocation();

    const generateRedirectURL = (discordURL, appID, redirectURL, state) => (
        `${discordURL}/authorize?client_id=${appID}&state=${state}&redirect_uri=${redirectURL}&response_type=code&scope=identify`
    );

    const discordOAuthRedirect = () => {

        const state = setStateCookie();
        const generatedURL = generateRedirectURL(
            config.discordURL,
            config.discordAppID,
            config.discordRedirectURL,
            state
        );

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