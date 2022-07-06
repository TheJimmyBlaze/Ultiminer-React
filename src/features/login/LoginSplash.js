import LoginForm from './LoginForm';

import { Container, Row, Col } from 'react-bootstrap';

const LoginSplash = () => {

    return (
        <div className="d-flex flex-grow-1 w-100 bg-lava-cave">

            <Container className="d-flex w-100 align-items-center">
                <Row className="d-flex w-100 justify-content-end">
                    <Col xs="12" lg="4">
                        <LoginForm/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default LoginSplash;