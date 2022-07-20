import { useState, useEffect } from 'react';
import { useDiscordAuth } from '../discord/useDiscordAuth';
import { useTokenExchange } from './useTokenExchange';

const Authentication = () => {
    
    const { verifyOAuthState } = useDiscordAuth();
    const { exchangeAuthCode } = useTokenExchange();

    useEffect(() => {

        const authCode = verifyOAuthState();
        exchangeAuthCode(authCode);

    }, []);

    return (
        <h1 className="text-inset">
            <i className="fa fa-circle-notch fa-spin" />
        </h1>
    )
};

export default Authentication;