
import quartz from '../../resources/items/gems/quartz.png';
import opal from '../../resources/items/gems/opal.png';

import stone from '../../resources/items/stones/stone.png';
import flint from '../../resources/items/stones/flint.png';

import rodWooden from '../../resources/items/treasures/rod_wooden.png';
import bindingLinen from '../../resources/items/treasures/binding_linen.png';
import cubeBrass from '../../resources/items/treasures/cube_brass.png';

import * as item from './itemIdentifiers';

export const useItemSpriteSolver = () => {

    const getSprite = spriteId => {

        switch (spriteId) {
            
            //Gems
            case item.gemQuartsId:
                return quartz;
            case item.gemOpalId:
                return opal;
            
            //Stone
            case item.stoneSimpleId:
                return stone;
            case item.stoneFlintId:
                return flint;

            //Treasure
            case item.treasureRodWooden:
                return rodWooden;
            case item.treasureBindingLinen:
                return bindingLinen;
            case item.treasureCubeBrass:
                return cubeBrass;
        }
    }

    return getSprite;
};