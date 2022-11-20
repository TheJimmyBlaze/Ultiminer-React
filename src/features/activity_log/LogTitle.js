
import { useEffect, useState } from 'react';
import * as actions from '../activity_log/actionIdentifiers';

const LogTitle = ({
    date,
    action,
    title
}) => {

    const fadeDelay = 500;

    const [faded, setFaded] = useState(false);

    const getTextColour = () => (
        faded ? "muted" : "primary"
    );

    const getActionIcon = () => {

        switch (action) {
            case actions.mine: 
                return "fa-solid fa-bolt";
            default:
                return "fa-solid fa-square-question"
        }
    };

    useEffect(() => {

        //After component's first render, set a delay to switch the colour from primary to muted
        const fadeTimeout = setTimeout(() => {
            setFaded(true);
        }, fadeDelay);

        return () => clearTimeout(fadeTimeout);
    }, []);

    return (
        <div className={`d-flex align-items-center activity-log-title text-${getTextColour()}`}>
            
            <div className="me-1">
                <i className={getActionIcon()} /> 
            </div>

            <div className="flex-grow-1">
                {title} 
            </div>
            
            <div className="fs-7 fw-lighter ms-1">
                {date.format('h:mm:ss')}
            </div>
        </div>
    )
};

export default LogTitle;