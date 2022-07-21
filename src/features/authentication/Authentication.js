import { useState, useEffect } from 'react';
import { useAuthentication } from './useAuthentication';
import Spinner from '../common/Spinner';
import AuthenticationFailed from './AuthenticationFailed';

const Authentication = () => {
    
    const [working, setWorking] = useState(true);

    const { receiveToken } = useAuthentication();

    useEffect(() => {

        receiveToken().then(_ => {
            setWorking(false);
        });
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