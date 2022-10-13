
import { Button } from 'react-bootstrap';
import { useAuthentication } from "../authentication/useAuthentication";

const LogoutButton = () => {
    
    const { logout } = useAuthentication();

    return (
        <Button variant="outline-danger"
            className="w-100"
            onClick={() => logout()}>
            Logout
        </Button>
    );
};

export default LogoutButton;