import { Card, Button } from 'react-bootstrap';

const LoginForm = () => {

    return (
        <Card className="p-4 position-relative shadow-dark">
            <Card.Body>

                <h4 className="text-light">Login</h4>

                <p className="text-muted">
                    Click rocks, level up, compete.
                </p>

                <Button className="btn-discord w-100">
                    <i className="bi bi-discord" /> <b>Login with Discord</b>
                </Button>
            </Card.Body>
        </Card>
    )
};

export default LoginForm;