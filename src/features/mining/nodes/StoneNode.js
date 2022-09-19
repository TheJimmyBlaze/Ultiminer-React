import { memo, useState, useRef, useEffect } from 'react';

import moment from 'moment';

import { useGravityBounce } from '../../animation/useGravityBounce';
import NodeElement from '../NodeElement'; 

import SpriteMain from '../../../resources/nodes/stone/stone_main.png';
import SpriteLeft from '../../../resources/nodes/stone/stone_left.png';
import SpriteRight from '../../../resources/nodes/stone/stone_right.png';
import SpritePebble from '../../../resources/nodes/stone/stone_pebble.png';

const StoneMain = memo(({
    lastUpdate,
    lastMine,
    outroDuration,
    resetDelay,
    settledSum
}) => {

    const initX = 0;
    const initY = -300;
    const floor = -30;

    const introDelay = 100;

    const spinniness = 0.3;
    const explosivenessX = 0;
    const explosivenessY = -1;

    return (
        <NodeElement
            sprite={SpriteMain}
            initX={initX}
            initY={initY}
            floor={floor}

            introDelay={introDelay}
            outroDuration={outroDuration}
            resetDelay={resetDelay}
            spinniness={spinniness}
            explosivenessX={explosivenessX}
            explosivenessY={explosivenessY}

            lastMine={lastMine}
            settledSum={settledSum}
            lastUpdate={lastUpdate}
        />
    )
});

const StoneLeft = memo(({
    lastUpdate,
    lastMine,
    outroDuration,
    resetDelay,
    settledSum
}) => {

    const initX = -125;
    const initY = -300;
    const floor = 35;

    const introDelay = 300;

    const spinniness = 0.8;
    const explosivenessX = -0.5;
    const explosivenessY = -0.5;

    return (
        <NodeElement
            sprite={SpriteLeft}
            initX={initX}
            initY={initY}
            floor={floor}

            introDelay={introDelay}
            outroDuration={outroDuration}
            resetDelay={resetDelay}
            spinniness={spinniness}
            explosivenessX={explosivenessX}
            explosivenessY={explosivenessY}

            lastMine={lastMine}
            settledSum={settledSum}
            lastUpdate={lastUpdate}
        />
    )
});

const StoneRight = memo(({
    lastUpdate,
    lastMine,
    outroDuration,
    resetDelay,
    settledSum
}) => {

    const initX = 120;
    const initY = -300;
    const floor = 50;

    const introDelay = 400;

    const spinniness = 0.8;
    const explosivenessX = 0.5;
    const explosivenessY = -0.5;

    return (
        <NodeElement
            sprite={SpriteRight}
            initX={initX}
            initY={initY}
            floor={floor}

            introDelay={introDelay}
            outroDuration={outroDuration}
            resetDelay={resetDelay}
            spinniness={spinniness}
            explosivenessX={explosivenessX}
            explosivenessY={explosivenessY}

            lastMine={lastMine}
            settledSum={settledSum}
            lastUpdate={lastUpdate}
        />
    )
});

const StonePebble = memo(({
    lastUpdate,
    lastMine,
    outroDuration,
    resetDelay,
    settledSum
}) => {

    const initX = -20;
    const initY = -300;
    const floor = 160;

    const introDelay = 500;

    const spinniness = 1.2;
    const explosivenessX = 0.3;
    const explosivenessY = -0.5;

    return (
        <NodeElement
            sprite={SpritePebble}
            initX={initX}
            initY={initY}
            floor={floor}

            introDelay={introDelay}
            outroDuration={outroDuration}
            resetDelay={resetDelay}
            spinniness={spinniness}
            explosivenessX={explosivenessX}
            explosivenessY={explosivenessY}

            lastMine={lastMine}
            settledSum={settledSum}
            lastUpdate={lastUpdate}
        />
    )
});

const StoneNode = ({
    lastMine,
    frameRate
}) => {

    const [lastUpdate, setLastUpdate] = useState(moment());

    const outroDuration = 500;
    const resetDelay = 500;

    const totalElements = 4;
    const settledSum = useRef(0);

    useEffect(() => {

        if (settledSum.current == totalElements) {
            return;
        }

        const preRenderTime = moment();
        const render = setTimeout(() => {
            setLastUpdate(preRenderTime);
        }, frameRate)

        return () => clearTimeout(render);

    }, [lastUpdate, settledSum.current]);

    return (
        <div>
            <StoneMain 
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                outroDuration={outroDuration}
                resetDelay={resetDelay}
                lastMine={lastMine}
            />
            <StoneLeft 
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                outroDuration={outroDuration}
                resetDelay={resetDelay}
                lastMine={lastMine}
            />
            <StoneRight 
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                outroDuration={outroDuration}
                resetDelay={resetDelay}
                lastMine={lastMine}
            />
            <StonePebble 
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                outroDuration={outroDuration}
                resetDelay={resetDelay}
                lastMine={lastMine}
            />
        </div>
    )
};

export default StoneNode;