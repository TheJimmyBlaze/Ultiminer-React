import { useState, useCallback } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDiscordAuth } from '../discord/useDiscordAuth';

const LoginForm = () => {

    const [working, setWorking] = useState(false);
    const [discordOAuthRedirect] = useDiscordAuth();

    const login = useCallback(() => {

        setWorking(true);
        discordOAuthRedirect();

    }, [working, setWorking, discordOAuthRedirect]);

    const renderDiscordButton = () => {
        
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

    return (
        <Card className="m-4 mx-lg-0 position-relative shadow-dark border-0">
            <Card.Header>
                <h5>Ultiminer</h5>
            </Card.Header>
            <Card.Body className="d-flex flex-column my-2">

                <h3> Mine, Level Up, Compete.</h3>

                <p className="text-muted">
                    A rock breaking incremental game.<br />
                    Connect with Discord and start mining.
                </p>

                { renderDiscordButton() }
            </Card.Body>
        </Card>
    )
};

export default LoginForm;