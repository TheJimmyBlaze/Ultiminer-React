import { Card } from 'react-bootstrap';
import DiscordLoginButton from './DiscordLoginButton';

const LoginForm = () => {

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

                <DiscordLoginButton />
            </Card.Body>
        </Card>
    )
};

export default LoginForm;