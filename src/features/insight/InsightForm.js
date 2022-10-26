
import InsightButtons from './InsightButtons';

import './Insight.css';
import ActivityLog from '../activity_log/ActivityLog';
import DiscordHeader from './DiscordHeader';

const InsightForm = ({
    log,
}) => {

    return (
        <div className="d-flex flex-column text-muted min-vh-100 vh-100 insight-panel">

            <DiscordHeader />

            <ActivityLog log={log}/>

            <div className="mt-auto">
                <InsightButtons />
            </div>
        </div>
    )
};

export default InsightForm;