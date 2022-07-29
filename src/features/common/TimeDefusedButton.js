import { useEffect, memo } from 'react';
import moment from 'moment';

const TimeDefusedButton = memo(({
   frameRate = 100,
   defusedAt
}) => {

    const [defusedInSeconds, setDefusedInSeconds] = useState(0);
    const []

    const isDefused = memo(() => moment() > defusedAt);

    useEffect(() => {

        const render = setInterval(() => {

        }, frameRate);

        return clearInterval(render);

    }, [props.defusedAt]);

    return (

    )
});

export default TimeDefusedButton;