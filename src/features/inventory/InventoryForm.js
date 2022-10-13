import { useOutletContext } from 'react-router-dom';
import { useItemSpriteSolver } from './useItemSpriteSolver';

import ItemFrame from './ItemFrame';

import './Inventory.css';

const InventoryForm = () => {

    const { inventory } = useOutletContext();

    const getSprite = useItemSpriteSolver();

    return (
        <div className="d-flex my-4 align-items-start">
            {
                inventory?.totalResources.map(item => (
                    <ItemFrame sprite={getSprite(item.resourceId)} 
                        quantity={item.count}
                    />
                ))
            }
        </div>
    )
};

export default InventoryForm;