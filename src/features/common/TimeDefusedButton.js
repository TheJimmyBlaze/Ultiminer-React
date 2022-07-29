import { useEffect, useMemo, memo, useState } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import moment from 'moment';

const TimeDefusedButton = memo(({
    frameRate = 50,
    defusedAt,
    onClick,
    variant,
    className,
    children
}) => {

    const [totalDefuseTime, setTotalDefuseTime] = useState(moment.duration(0));
    const [defusedIn, setDefusedIn] = useState(moment.duration(0));

    const isDefused = useMemo(() => moment() >= moment(defusedAt), [defusedIn, defusedAt]);

    const countDown = useMemo(() => `${defusedIn.seconds()}.${parseInt(defusedIn.milliseconds() / 100, 10)}`, [defusedIn]);
    
    const percentRemaining = useMemo(() => {

        if (isDefused) {
            return 100;
        }

        const remainingDefuseTime = defusedIn.asMilliseconds();
        const percentage = remainingDefuseTime / totalDefuseTime;

        const remaining = 100 - 100 * percentage;
        return remaining;

    }, [defusedIn]);

    useEffect(() => {
        setTotalDefuseTime(moment.duration(moment(defusedAt).diff(moment())).asMilliseconds());
    }, [defusedAt]);

    useEffect(() => {

        const render = setTimeout(() => {

            if (!isDefused) {
                setDefusedIn(moment.duration(moment(defusedAt).diff(moment())));
            }

        }, frameRate);

        return () => clearTimeout(render);

    }, [defusedAt, defusedIn]);

    return (
        <Button variant={variant}
            className={className}
            onClick={onClick}
            disabled={!isDefused}>
            
                <div className="position-relative h-100 w-100">

                    <ProgressBar variant={variant}
                        now={percentRemaining}
                        className="h-100 w-100"
                        />
                    
                    <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
                        {
                            <>
                                <div hidden={isDefused}>
                                    { countDown }
                                </div>
                                <div hidden={!isDefused}>
                                    { children }
                                </div>
                            </>
                        }
                    </div>
                </div>
        </Button>
    )
});

export default TimeDefusedButton;