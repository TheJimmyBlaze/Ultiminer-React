import LoginForm from './LoginForm';

import { Container } from 'react-bootstrap';

const LoginSplash = () => {

    return (
        <div className="d-flex flex-grow-1 w-100 bg-lava-cave">

            <Container className="d-flex w-100 align-items-center justify-content-end">
                <LoginForm/>
            </Container>
        </div>
    )
};

export default LoginSplash;