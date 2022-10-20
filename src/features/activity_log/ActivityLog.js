import { useRef, useEffect } from 'react';
import LogMessage from "./LogMessage";

import './ActivityLog.css';

const ActivityLog = ({
    log
}) => {

    const logTrailer = useRef();

    useEffect(() => {
        logTrailer.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest', 
            inline: 'start' 
        });
    }, [log]);

    return (

        <div className="d-flex flex-column w-100 h-100 overflow-auto p-2 activity-log-panel">

            <div className="mt-auto" />
            {
                log.map((entry, index) => (
                    <LogMessage
                        key={index}
                        date={entry.date}
                        action={entry.action}
                        message={entry.message}
                    />
                ))
            }
            <div ref={logTrailer} />
        </div>
    )
};

export default ActivityLog;