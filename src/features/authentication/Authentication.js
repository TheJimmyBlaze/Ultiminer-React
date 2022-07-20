import { useState, useEffect } from 'react';
import { useDiscordAuth } from '../discord/useDiscordAuth';
import { useTokenExchange } from  '../api/useTokenExchange';

const Authentication = () => {
    
    const { verifyOAuthState } = useDiscordAuth();

    useEffect(() => {

        const authCode = verifyOAuthState();

    }, []);

    return (
        <h1 className="text-inset">
            <i className="fa fa-circle-notch fa-spin" />
        </h1>
    )
};

export default Authentication;