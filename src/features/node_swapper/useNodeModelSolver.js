
import stoneSprite from '../../resources/nodes/stone/stone_sprite.png';
import stoneSilhouette from '../../resources/nodes/stone/stone_silhouette.png';
import StoneNode from "../mining/nodes/StoneNode";

import flintSprite from '../../resources/nodes/flint/flint_sprite.png';
import flintSilhouette from '../../resources/nodes/flint/flint_silhouette.png';
import FlintNode from "../mining/nodes/FlintNode";

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
        }
    };

    return getModel;
};