import { Card, Button } from 'react-bootstrap';

const LoginForm = () => {

    return (
        <Card className="p-4 position-relative shadow-dark">
            <Card.Body>

                <h2 className="text-light">Login</h2>

                <p className="text-muted fs-5">
                    Click rocks, level up, compete.
                </p>

                <Button className="btn-discord w-100 mt-4 fs-5">
                    <i className="bi bi-discord" /> <b>Login with Discord</b>
                </Button>
            </Card.Body>
        </Card>
    )
};

export default LoginForm;