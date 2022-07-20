import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const AuthenticationFailed = () => {

    const navigate = useNavigate();

    const returnToLogin = () => {
        navigate('/login');
    };
    
    return (
        <div className="d-flex flex-column">
            <h1 className="text-danger">Discord Login Failed</h1>

            <div className="d-flex justify-content-between">
                <p className="text-muted">See console for details</p>
                <Button variant="primary"
                    onClick={() => returnToLogin()}>
                    Try Again
                </Button>
            </div>
        </div>
    )
};

export default AuthenticationFailed;