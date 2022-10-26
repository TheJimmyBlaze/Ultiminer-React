import LogTitle from "./LogTitle";

const LogMessage = ({
    date,
    action,
    message
}) => {

    return (
        <div className="d-flex flex-column w-100 my-1">
            <LogTitle 
                date={date}
                action={action}
            />
            {message}
        </div>
    )
};

export default LogMessage;