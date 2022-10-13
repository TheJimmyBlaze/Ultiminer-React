
import { useConfig } from '../config/useConfig';

const NavFooter = () => {

    const { appVersion } = useConfig();

    return (
        <div className="d-flex p-2 justify-content-between fs-7">

            <a href="https://github.com/TheJimmyBlaze/Ultiminer-React"
                target="_blank"
                className="text-muted"
            >
                <i className="fa-brands fa-github" />
            </a>

            <div>
                {appVersion}
            </div>
        </div>
    );
};

export default NavFooter;