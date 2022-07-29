import { useState } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import moment from 'moment';
import TimeDefusedButton from '../common/TimeDefusedButton';

const MiningButtons = () => {

    const [backOffUntil, setBackOffUntil] = useState();
    const [testDisabled, setTestDisabled] = useState(false);

    const pushBackOff = () => {
        
        setTestDisabled(true);

        setTimeout(() => {
            setBackOffUntil(moment().add(3, "seconds"));
            setTestDisabled(false);
        }, 2000);
    }

    return (
        <div className="m-3 d-flex">

            <TimeDefusedButton variant="primary"
                className="mine-button w-100 p-0"
                onClick={() => pushBackOff()}
                defusedAt={backOffUntil}
                disabled={testDisabled}>

                <div hidden={!testDisabled}>
                    <i className="fa fa-circle-notch fa-spin" />
                </div>
                <div hidden={testDisabled}>
                    <i className="fa-solid fa-bolt"/> Mine
                </div>
            </TimeDefusedButton>

            <div className="d-flex w-100 justify-content-end">
                <Button variant="secondary"
                    className="other-button w-100 mx-2"
                    disabled>
                    <i className="fa-solid fa-dollar-sign" /> Sell
                </Button>
                <Button variant="secondary"
                    className="other-button w-100"
                    disabled>
                    <i className="fa-solid fa-tag" /> Shop
                </Button>
            </div>
        </div>
    )
}

export default MiningButtons;