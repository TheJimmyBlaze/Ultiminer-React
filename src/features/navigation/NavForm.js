
import NavHeader from './NavHeader';

import './Nav.css';
import NavFooter from './NavFooter';
import NavMenu from './NavMenu';

const NavigationForm = () => {

    return (
        <div className="d-flex flex-column text-muted min-vh-100 nav-panel">

            <NavHeader />

            <NavMenu />

            <div className="mt-auto">
                <NavFooter />
            </div>
        </div>
    )
};

export default NavigationForm;