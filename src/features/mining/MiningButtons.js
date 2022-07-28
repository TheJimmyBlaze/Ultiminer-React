import { Button } from 'react-bootstrap';

const MiningButtons = () => {

    return (
        <div className="m-3 d-flex">
            <Button variant="primary"
                className="mine-button w-100">
                <i class="fa-solid fa-bolt" /> Mine
            </Button>

            <div className="d-flex w-100 justify-content-end">
                <Button variant="secondary"
                    className="other-button w-100 mx-2"
                    disabled>
                    <i class="fa-solid fa-dollar-sign" /> Sell
                </Button>
                <Button variant="secondary"
                    className="other-button w-100"
                    disabled>
                    <i class="fa-solid fa-tag" /> Shop
                </Button>
            </div>
        </div>
    )
}

export default MiningButtons;