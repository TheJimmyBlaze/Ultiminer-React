
import NavHeader from './NavHeader';

import './Nav.css';
import NavFooter from './NavFooter';

const NavigationForm = () => {

    return (
        <div className="d-flex flex-column nav-panel min-vh-100">

            <NavHeader />

            <div className="mt-auto">
                <NavFooter />
            </div>
        </div>
    )
};

export default NavigationForm;