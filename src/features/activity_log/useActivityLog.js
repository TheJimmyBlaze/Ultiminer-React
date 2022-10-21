import { useState } from 'react';
import moment from 'moment';

export const useActivityLog = () => {

    const maxLogs = 25;

    const [log, setLog] = useState([]);

    const addLog = ({
        action,
        message
    }) => {

        const newLog = {
            date: moment(),
            action,
            message
        };

        setLog([...log.slice(Math.max(log.length - maxLogs + 1, 0)), newLog]);
    };

    return { log, addLog };
};