import { useState, useEffect } from "react";
import { useDiscordAuth } from "../discord/useDiscordAuth";

const Authentication = () => {

    const [authCode, setAuthCode] = useState(null);
    
    const { verifyOAuthState } = useDiscordAuth();

    useEffect(() => {

        const authCode = verifyOAuthState();
        setAuthCode(authCode);

    }, []);

    return (
        <h1 className="text-inset">
            <i className="fa fa-circle-notch fa-spin" />
        </h1>
    )
};

export default Authentication;