import { useState, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useDiscordAuth } from '../discord/useDiscordAuth';

const DiscordLoginButton = () => {

    const [working, setWorking] = useState(false);
    const { discordOAuthRedirect } = useDiscordAuth();

    const login = useCallback(() => {

        setWorking(true);
        discordOAuthRedirect();

    }, [working, setWorking, discordOAuthRedirect]);

    const buttonText = <b><i className="fa-brands fa-discord" /> Login with Discord</b>
    const workingText = <i className="fa fa-circle-notch fa-spin" />;
    
    return (
        <Button variant="discord" 
            className="mt-4"
            onClick={() => login()}>
            { working ? workingText : buttonText }
        </Button>
    )
};

export default DiscordLoginButton;