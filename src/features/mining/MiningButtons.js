import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import TimeDefusedButton from '../common/TimeDefusedButton';

const MiningButtons = ({
    miningResult,
    mine
}) => {

    const [miningDisabled, setMiningDisabled] = useState(false);
    const navigate = useNavigate();

    const doMine = () => {
        
        //Call the mine function from the form
        mine();
        setMiningDisabled(true);
    }

    useEffect(() => {
        setMiningDisabled(false);
    }, [miningResult]);

    return (
        <div className="m-3 d-flex">

            <TimeDefusedButton variant="primary"
                className="mine-button w-100 p-0"
                onClick={() => doMine()}
                defusedAt={miningResult?.nextMine}
                disabled={miningDisabled}>

                <div hidden={!miningDisabled}>
                    <i className="fa fa-circle-notch fa-spin" />
                </div>
                <div hidden={miningDisabled}>
                    <i className="fa-solid fa-bolt"/> Mine
                </div>
            </TimeDefusedButton>

            <div className="d-flex w-100 justify-content-end">
                <Button variant="secondary"
                    className="mine-other-button"
                    onClick={() => navigate("/nodes")}>
                    Swap Nodes
                </Button>
            </div>
        </div>
    )
}

export default MiningButtons;