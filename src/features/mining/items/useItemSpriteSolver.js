
import quartz from '../../../resources/items/gems/quartz.png';
import opal from '../../../resources/items/gems/opal.png';

import stone from '../../../resources/items/stones/stone.png';
import flint from '../../../resources/items/stones/flint.png';

import rodWooden from '../../../resources/items/treasures/rod_wooden.png';
import bindingLinen from '../../../resources/items/treasures/binding_linen.png';
import cubeBrass from '../../../resources/items/treasures/cube_brass.png';

export const useItemSpriteSolver = () => {

    //TODO: move these Id's somewhere better, but they're here for now
    const gemQuartsId = "Gem.Raw.Quartz";
    const gemOpalId = "Gem.Raw.Opal";

    const stoneSimpleId = "Stone.Simple";
    const stoneFlintId = "Stone.Flint";

    const treasureRodWooden = "Treasure.Rod.Wooden";
    const treasureBindingLinen = "Treasure.Binding.Linen";
    const treasureCubeBrass = "Treasure.Cube.Brass";

    const getSprite = spriteId => {

        switch (spriteId) {
            
            //Gems
            case gemQuartsId:
                return quartz;
            case gemOpalId:
                return opal;
            
            //Stone
            case stoneSimpleId:
                return stone;
            case stoneFlintId:
                return flint;

            //Treasure
            case treasureRodWooden:
                return rodWooden;
            case treasureBindingLinen:
                return bindingLinen;
            case treasureCubeBrass:
                return cubeBrass;
        }
    }

    return getSprite;
};