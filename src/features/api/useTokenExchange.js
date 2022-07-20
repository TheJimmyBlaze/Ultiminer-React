import axios from 'axios';
import { useConfig } from '../config/useConfig';

export const useTokenExchange = () => {

    const config = useConfig();

    const exchangeAuthCode = authCode => {

        const route = `${config.ultiminerURL}/DiscordAuthCode`;
        axios.post(route, authCode)
            .then(response => {
                console.log(response);
            });
    };

    return { exchangeAuthCode };
};