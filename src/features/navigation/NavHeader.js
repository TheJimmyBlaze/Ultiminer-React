import Logo from '../../resources/Ultiminer_Logo_Icon.png';

const NavHeader = () => {

    return (
        <div className="d-flex align-items-center p-2 nav-header">

            <img src={Logo} className="nav-logo me-4"/>

            <h3 className="m-0 justify-self-center text-light">
                Ultiminer
            </h3>
        </div>
    );
};

export default NavHeader;