
import LoginHeader from './LoginHeader';
import LoginFooter from './LoginFooter';
import LoginSplash from './LoginSplash';

const Login = () => {

    return (
        <div className="d-flex flex-column w-100 min-vh-100">
            <LoginHeader />
            <LoginSplash />
            <LoginFooter />
        </div>
    )
};

export default Login;