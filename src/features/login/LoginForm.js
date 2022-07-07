import { Card, Button } from 'react-bootstrap';

const LoginForm = () => {

    return (
        <Card className="m-4 position-relative card-dark-gradient shadow-dark border-0">
            <Card.Header>
                <h5>Ultiminer</h5>
            </Card.Header>
            <Card.Body className="d-flex flex-column my-2">

                <h3> Mine, Level Up, Compete.</h3>

                <p className="text-muted">
                    A rock breaking incremental game.<br />
                    Connect with Discord and start mining.
                </p>

                <Button variant="discord" className="mt-4">
                    <i className="bi bi-discord" /> <b>Login with Discord</b>
                </Button>
            </Card.Body>
        </Card>
    )
};

export default LoginForm;