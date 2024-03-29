import { memo } from 'react';

const ItemFrame = memo(({
    sprite,
    quantity
}) => {

    return (
        <div className="d-flex m-1 p-1 inv-frame-background">

            <div className="position-relative">

                <img className="inv-item-sprite" src={sprite} />
                <div className="position-absolute bottom-0 end-0">
                    {quantity}
                </div>
            </div>
        </div>
    )
});

export default ItemFrame;