import { memo, useState, useRef, useEffect } from 'react';

import moment from 'moment';

import { useGravityBounce } from '../../animation/useGravityBounce';
import NodeElement from '../NodeElement'; 

import SpriteMain from '../../../resources/nodes/stone/stone_main.png';
import SpriteLeft from '../../../resources/nodes/stone/stone_left.png';
import SpriteRight from '../../../resources/nodes/stone/stone_right.png';
import SpritePebble from '../../../resources/nodes/stone/stone_pebble.png';

const StoneMain = memo(({
    firstUpdate,
    lastUpdate,
    settledSum,
    destroyed
}) => {

    const initX = 0;
    const initY = -300;
    const floor = -30;

    const introDelay = 100;

    return (
        <NodeElement
            sprite={SpriteMain}
            initX={initX}
            initY={initY}
            floor={floor}

            introDelay={introDelay}
            settledSum={settledSum}

            firstUpdate={firstUpdate}
            lastUpdate={lastUpdate}
        />
    )
});

const StoneLeft = memo(({
    firstUpdate,
    lastUpdate,
    settledSum,
    destroyed
}) => {

    const initX = -125;
    const initY = -300;
    const floor = 35;

    const introDelay = 300;

    return (
        <NodeElement
            sprite={SpriteLeft}
            initX={initX}
            initY={initY}
            floor={floor}

            introDelay={introDelay}
            settledSum={settledSum}

            firstUpdate={firstUpdate}
            lastUpdate={lastUpdate}
        />
    )
});

const StoneRight = memo(({
    firstUpdate,
    lastUpdate,
    settledSum,
    destroyed
}) => {

    const initX = 120;
    const initY = -300;
    const floor = 50;

    const introDelay = 400;

    return (
        <NodeElement
            sprite={SpriteRight}
            initX={initX}
            initY={initY}
            floor={floor}

            introDelay={introDelay}
            settledSum={settledSum}

            firstUpdate={firstUpdate}
            lastUpdate={lastUpdate}
        />
    )
});

const StonePebble = memo(({
    firstUpdate,
    lastUpdate,
    settledSum,
    destroyed
}) => {

    const initX = -20;
    const initY = -300;
    const floor = 160;

    const introDelay = 500;

    return (
        <NodeElement
            sprite={SpritePebble}
            initX={initX}
            initY={initY}
            floor={floor}

            introDelay={introDelay}
            settledSum={settledSum}

            firstUpdate={firstUpdate}
            lastUpdate={lastUpdate}
        />
    )
});

const StoneNode = ({
    frameRate = 100
}) => {

    const [lastUpdate, setLastUpdate] = useState(moment());
    const [destroyed, setDestroyed] = useState(false);

    const totalRenders = useRef(0);

    const totalElements = 4;
    const settledSum = useRef(0);

    const firstUpdate = useRef(moment());

    useEffect(() => {

        if (settledSum.current == totalElements) {
            return;
        }

        totalRenders.current ++;
        console.log(`Render: ${totalRenders.current}`);

        const preRenderTime = moment();
        const render = setTimeout(() => {
            setLastUpdate(preRenderTime);
        }, frameRate)

        return () => clearTimeout(render);

    }, [lastUpdate]);

    useEffect(() => {
        setLastUpdate(firstUpdate.current);
    }, [])

    return (
        <div>
            <StoneMain 
                firstUpdate={firstUpdate.current}
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                destroyed={destroyed}
            />
            <StoneLeft 
                firstUpdate={firstUpdate.current}
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                destroyed={destroyed}
            />
            <StoneRight 
                firstUpdate={firstUpdate.current}
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                destroyed={destroyed}
            />
            <StonePebble 
                firstUpdate={firstUpdate.current}
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                destroyed={destroyed}
            />
        </div>
    )
};

export default StoneNode;