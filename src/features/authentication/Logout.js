import { Button } from 'react-bootstrap';

const Logout = props => {

    return (
        <Button variant='danger'
            onClick={() => props.logout()}>
            Logout
        </Button>
    )
};

export default Logout;