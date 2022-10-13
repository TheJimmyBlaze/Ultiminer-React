import MineTrolley from  '../../resources/MineTrolley.png';

const LoginHeader = () => {
    
    return (
        <div className="p-3 d-flex justify-content-center">
            <img src={MineTrolley} className="login-logo"/>
        </div>
    )
};

export default LoginHeader;