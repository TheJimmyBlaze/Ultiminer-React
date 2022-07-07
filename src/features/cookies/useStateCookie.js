import { v4 as uuid } from 'uuid';
import moment from 'moment';
import Cookies from 'universal-cookie';

export const useStateCookie = (stateName) => {

    const cookies = new Cookies();

    const setStateCookie = () => {
        
        const state = uuid();

        cookies.set(stateName, 
            state,
            {
                path: '/',
                expires: moment().add(15, 'minutes').toDate(),
                sameSite: 'strict'
            });

        return state;
    };

    const getStateCookie = () => (
        cookies.get(stateName)
    );

    return [setStateCookie, getStateCookie];
}