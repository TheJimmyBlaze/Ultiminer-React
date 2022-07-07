import { useCallback } from 'react';
import { useStateCookie } from '../cookies/useStateCookie.js';

export const useDiscordAuth = () => {

    const discordAppID = '994537896608530483';
    const redirectURL = 'http%3A%2F%2Flocalhost%3A3000%2Fauth';

    const generateRedirectURL = (appID, redirectURL, state) => (
        `https://discord.com/api/oauth2/authorize?client_id=${appID}&state=${state}&redirect_uri=${redirectURL}&response_type=code&scope=identify`
    );

    const discordOAuthRedirect = useCallback(() => {

        const discordStateName = "DISCORD_OAUTH_STATE";
        const [setState] = useStateCookie(discordStateName);

        const state = setState();
        const generatedURL = generateRedirectURL(discordAppID, redirectURL, state);

        window.location.href = generatedURL;
    }, [discordAppID, redirectURL, generateRedirectURL]);

    return [discordOAuthRedirect];
};