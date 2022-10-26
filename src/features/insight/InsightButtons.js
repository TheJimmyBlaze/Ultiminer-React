
import SettingsButton from './SettingsButton';
import LogoutButton from './LogoutButton';

const InsightButtons = () => {

    return (
        <div className="d-flex p-2">

            <div className="me-2">
                <SettingsButton /> 
            </div>

            <LogoutButton />
        </div>
    );
};

export default InsightButtons;