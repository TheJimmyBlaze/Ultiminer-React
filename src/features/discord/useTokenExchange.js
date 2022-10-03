import axios from '../config/axiosUltiminer';

export const useTokenExchange = () => {

    const exchangeAuthCode = async authCode => {

        let token = null;
        let error = null;

        try {

            const route = "/DiscordAuthCode";
            const request = { auth_code: authCode };
            const response = await axios.post(route, request);

            token = response.data.value;

        } catch (err) {
            console.error(`Login Error: ${err}`);
            error = err;
        }
        
        return {
            token,
            error
        };
    };

    return exchangeAuthCode;
};