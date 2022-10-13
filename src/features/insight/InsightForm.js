
import InsightButtons from './InsightButtons';

import './Insight.css';

const InsightForm = () => {

    return (
        <div className="d-flex flex-column text-muted min-vh-100 insight-panel">

            <div className="mt-auto p-2">

                <InsightButtons />
            </div>
        </div>
    )
};

export default InsightForm;