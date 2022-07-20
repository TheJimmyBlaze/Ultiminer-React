import axios from 'axios';
import { useConfig } from '../config/useConfig';

export const useTokenExchange = () => {

    const config = useConfig();

    const exchangeAuthCode = authCode => {

        const route = `${config.ultiminerURL}/DiscordAuthCode`;
        const request = { auth_code: authCode };
        axios.post(route, request)
            .then(response => {
                console.log(response);
            })
            .catch(err => console.error(`Error: ${err}`));
    };

    return { exchangeAuthCode };
};