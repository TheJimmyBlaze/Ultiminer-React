
import './Common.css';

const PageHeader = ({
    title
}) => {

    return (
        <div className="border-bottom border-secondary p-2">
            <div className="d-flex align-items-center page-title">
                            
                <h4 className="text-secondary m-0">
                    {title}
                </h4>
            </div>
        </div>
    )
}

export default PageHeader;