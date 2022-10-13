import Logo from  '../../resources/Ultiminer_Logo_Icon.png';

const LoginHeader = () => {
    
    return (
        <div className="p-3 d-flex justify-content-center">
            <img src={Logo} className="login-logo"/>
        </div>
    )
};

export default LoginHeader;