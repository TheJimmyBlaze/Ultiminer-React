import jwtDecode from "jwt-decode";
import { useTokenCookie } from "../cookies/useTokenCookie";

export const useJWT = () => {

    const { getTokenCookie } = useTokenCookie();

    const parseToken = () => {

        //Read token from cookie
        const token = getTokenCookie();
        if (token == null) {
            return null;
        }

        //Decode the token
        const decoded = jwtDecode(token);
        return decoded;
    };

    return { parseToken };
};