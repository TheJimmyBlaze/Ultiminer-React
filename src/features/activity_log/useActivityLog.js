import { useState } from 'react';
import moment from 'moment';
import { v4 as uuid } from 'uuid';

export const useActivityLog = () => {

    const maxLogs = 25;

    const [log, setLog] = useState([]);

    const addLog = ({
        action,
        title,
        message
    }) => {

        const newLog = {
            id: uuid(),
            date: moment(),
            action,
            title,
            message
        };

        setLog([...log.slice(Math.max(log.length - maxLogs + 1, 0)), newLog]);
    };

    return { log, addLog };
};