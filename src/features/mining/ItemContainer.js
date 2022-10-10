import { memo, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useItemSpriteSolver } from '../inventory/useItemSpriteSolver';

import BasicItem from './items/BasicItem';

const ItemContainer = memo(({
    miningResult
}) => {

    const getSprite = useItemSpriteSolver();

    const [items, setItems] = useState([]);    

    //Use an effect hook here instead of a memo hook, to effectively render the item asynchronously
    useEffect(() => {

        let newItems = [];

        miningResult?.newItems?.map(item => {

            //Solve sprite
            const sprite = getSprite(item.resourceId);        

            for(let i = 0; i < item.count; i++) {

                //Spawn item
                newItems.push(
                    <BasicItem 
                        sprite={sprite}
                        key={uuid()}
                        lastMine={miningResult.lastMine}
                    />
                );
                setItems(newItems);
            }
        })
    }, [miningResult]);

    return (
        <div className="position-relative">
            { items }
        </div>
    )
});

export default ItemContainer;