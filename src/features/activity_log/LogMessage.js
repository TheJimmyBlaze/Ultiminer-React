import LogTitle from "./LogTitle";

const LogMessage = ({
    date,
    action,
    message
}) => {

    return (
        <div className="d-flex flex-column w-100">
            <LogTitle 
                date={date}
                action={action}
            />

            <div className="fs-7">
                {message}
            </div>
        </div>
    )
};

export default LogMessage;