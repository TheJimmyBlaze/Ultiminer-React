import { useState, useEffect } from 'react';
import { useAuthentication } from './useAuthentication';
import Spinner from '../common/Spinner';
import AuthenticationFailed from './AuthenticationFailed';

const Authentication = () => {
    
    const authTimeout = 5000;

    const [working, setWorking] = useState(true);

    const { receiveToken } = useAuthentication();

    useEffect(() => {

        setTimeout(() => {
            console.error(`No login response received after: ${authTimeout}ms`);
            setWorking(false);
        }, authTimeout);

        receiveToken().then(_ => {
            setWorking(false);
        });
    }, []);

    return (
        <div className="my-auto">
            {
                working ?
                    <Spinner /> :
                    <AuthenticationFailed />
            }
        </div>
    )
};

export default Authentication;