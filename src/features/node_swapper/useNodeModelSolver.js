
import stoneSprite from '../../resources/nodes/stone/stone_sprite.png';
import stoneSilhouette from '../../resources/nodes/stone/stone_silhouette.png';
import StoneNode from '../mining/nodes/StoneNode';

import flintSprite from '../../resources/nodes/flint/flint_sprite.png';
import flintSilhouette from '../../resources/nodes/flint/flint_silhouette.png';
import FlintNode from '../mining/nodes/FlintNode';

import coalSprite from '../../resources/nodes/coal/coal_sprite.png';
import coalSilhouette from '../../resources/nodes/coal/coal_silhouette.png';

import missingSprite from '../../resources/nodes/missing/missing_sprite.png';
import missingSilhouette from '../../resources/nodes/missing/missing_silhouette.png';
import MissingNode from '../mining/nodes/MissingNode';

import * as node from './nodeIdentifiers';

export const useNodeModelSolver = () => {

    const packModel = (
        sprite,
        silhouette,
        component
    ) => ({
        sprite: sprite,
        silhouette: silhouette,
        component: component
    });

    const getModel = nodeId => {

        switch (nodeId) {

            case node.stone:
                return packModel(stoneSprite, stoneSilhouette, StoneNode);
            case node.flint:
                return packModel(flintSprite, flintSilhouette, FlintNode);
            case node.coal:
                return packModel(coalSprite, coalSilhouette, MissingNode);

            //If no node was found, return the Missing Node
            default:
                return packModel(missingSprite, missingSilhouette, MissingNode);
        }
    };

    return getModel;
};