import moment from 'moment';
import Cookies from 'universal-cookie';

export const useTokenCookie = () => {

    const bearerTokenName = "ULTIMINER_BEARER_TOKEN";

    const cookies = new Cookies();

    const setTokenCookie = (token, expiresIn) => {

        cookies.set(bearerTokenName,
            token,
            {
                path: '/',
                expires: moment().add(expiresIn, 'seconds').toDate(),
                sameSite: 'strict'
            });
    };

    const getTokenCookie = () => cookies.get(bearerTokenName);

    const removeTokenCookie = () => cookies.remove(bearerTokenName);

    return { setTokenCookie, getTokenCookie, removeTokenCookie };
};