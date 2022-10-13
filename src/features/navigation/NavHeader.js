import MineTrolley from '../../resources/MineTrolley.png';

const NavHeader = () => {

    return (
        <div className="d-flex align-items-center p-2">

            <img src={MineTrolley} className="logo me-4"/>

            <h3 className="m-0 justify-self-center">
                Ultiminer
            </h3>
        </div>
    );
};

export default NavHeader;