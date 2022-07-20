
export const useConfig = () => {

    const ultiminerURL = process.env.REACT_APP_ULTIMINER_API_URL;
    
    const discordURL = process.env.REACT_APP_DISCORD_API_URL;
    const discordAppID = process.env.REACT_APP_DISCORD_ID;
    const discordRedirectURL = process.env.REACT_APP_DISCORD_REDIRECT_URL;

    return {
        ultiminerURL,

        discordURL,
        discordAppID,
        discordRedirectURL
    };
};