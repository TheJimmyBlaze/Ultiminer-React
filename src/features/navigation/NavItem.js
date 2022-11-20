import { memo, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavItem = memo(({
    icon,
    name,
    path
}) => {

    const [selected, setSelected] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setSelected(path === location.pathname.toLowerCase());
    }, [location, path])

    return (

        <h5 className={`d-flex align-items-center p-2 text-muted nav-item ${selected ? "selected" : ""}`}
            onClick={() => navigate(path)}
        >

            <div className="me-4 nav-item-icon">
                <i className={`fa fa-${icon}`} />
            </div>
            { name }
        </h5>
    );
});

export default NavItem;