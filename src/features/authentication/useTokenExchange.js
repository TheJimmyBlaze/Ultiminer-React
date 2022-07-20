import axios from 'axios';
import { useConfig } from '../config/useConfig';

export const useTokenExchange = () => {

    const config = useConfig();

    const exchangeAuthCode = async authCode => {

        const route = `${config.ultiminerURL}/DiscordAuthCode`;
        const request = { auth_code: authCode };
        const response = await axios.post(route, request)
            .then(response => {
                console.log(response);
                return {
                    success: true,
                    token: response.data.value
                };
            })
            .catch(error => {
                console.error(`Login Error: ${error}`)
                return {
                    success: false,
                    error
                };
            });

        return response;
    };

    return { exchangeAuthCode };
};