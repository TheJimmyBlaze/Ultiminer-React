import { v4 as uuid } from 'uuid';
import moment from 'moment';
import Cookies from 'universal-cookie';

export const useStateCookie = () => {

    const discordStateName = 'DISCORD_OAUTH_STATE';

    const cookies = new Cookies();

    const setStateCookie = () => {
        
        const state = uuid();

        cookies.set(discordStateName, 
            state,
            {
                path: '/',
                expires: moment().add(15, 'minutes').toDate(),
                sameSite: 'strict'
            });

        return state;
    };

    const getStateCookie = () => cookies.get(discordStateName);

    const removeStateCookie = () => cookies.remove(discordStateName);

    return { setStateCookie, getStateCookie, removeStateCookie };
};