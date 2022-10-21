
import version from '../../resources/version.json';

export const useConfig = () => {

    const appVersion = version.app_version;

    const ultiminerURL = process.env.REACT_APP_ULTIMINER_API_URL;
    
    const discordURL = process.env.REACT_APP_DISCORD_API_URL;
    const discordCDN = process.env.REACT_APP_DISCORD_CDN_URL;
    const discordAppID = process.env.REACT_APP_DISCORD_APP_ID;
    const discordRedirectURL = process.env.REACT_APP_DISCORD_REDIRECT_URL;

    return {

        appVersion,

        ultiminerURL,

        discordURL,
        discordCDN,
        discordAppID,
        discordRedirectURL
    };
};