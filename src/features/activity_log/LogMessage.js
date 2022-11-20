import LogTitle from "./LogTitle";

const LogMessage = ({
    date,
    action,
    title,
    message
}) => {

    return (
        <div className="d-flex flex-column w-100 my-1">
            <LogTitle 
                date={date}
                action={action}
                title={title}
            />
            {message}
        </div>
    )
};

export default LogMessage;