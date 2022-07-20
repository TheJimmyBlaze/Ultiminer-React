import { useState, useEffect } from 'react';
import { useAuthentication } from './useAuthentication';
import Spinner from '../common/Spinner';
import AuthenticationFailed from './AuthenticationFailed';

const Authentication = () => {
    
    const [working, setWorking] = useState(true);

    const { receiveToken } = useAuthentication();

    useEffect(() => {

        const authFailure = receiveToken();
        if (authFailure) {
            setWorking(true);
        }
    }, []);

    return (
        <>
            {
                working ?
                    <Spinner /> :
                    <AuthenticationFailed />
            }
        </>
    )
};

export default Authentication;