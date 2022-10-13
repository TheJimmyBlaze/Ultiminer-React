import LoginForm from './LoginForm';

import { Container, Row, Col } from 'react-bootstrap';

const LoginSplash = () => {

    return (
        // To prevent the splash image from popping in when the page loads, render two smaller version first to "un-blur" the image as the page loads
        <div className="d-flex flex-grow-1 w-100 login-background-tiny">
            <div className="d-flex w-100 login-background-small">

                <div className="d-flex flex-grow-1 w-100 login-background login-vignette">

                    <Container className="d-flex w-100 align-items-center">
                        <Row className="d-flex w-100 justify-content-end">
                            <Col xs="12" md="6" xl="4">
                                <LoginForm/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
};

export default LoginSplash;