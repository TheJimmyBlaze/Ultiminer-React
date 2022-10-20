import { useState } from 'react';
import moment from 'moment';

export const useActivityLog = () => {

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

        setLog([...log, newLog]);
    };

    return { log, addLog };
};