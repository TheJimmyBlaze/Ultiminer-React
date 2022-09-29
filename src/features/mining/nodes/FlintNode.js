import { memo, useState, useRef, useEffect } from 'react';

import moment from 'moment';

import NodeElement from './NodeElement'; 

import SpriteTop from '../../../resources/nodes/flint/flint_top.png';
import SpriteBottom from '../../../resources/nodes/flint/flint_bottom.png';
import SpriteBigPebble from '../../../resources/nodes/flint/flint_big_pebble.png';
import SpriteSmallPebble from '../../../resources/nodes/flint/flint_small_pebble.png';

const FlintBottom = memo(({
    lastUpdate,
    lastMine,
    outroDuration,
    resetDelay,
    settledSum
}) => {

    const initX = 0;
    const initY = -200;
    const floor = 80;

    const introDelay = 100;

    const spinniness = 0;
    const explosivenessX = 0;
    const explosivenessY = -0.8;

    return (
        <NodeElement
            sprite={SpriteBottom}
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

const FlintTop = memo(({
    lastUpdate,
    lastMine,
    outroDuration,
    resetDelay,
    settledSum
}) => {

    const initX = -10;
    const initY = -260;
    const floor = 20;

    const introDelay = 300;

    const spinniness = 0;
    const explosivenessX = 0;
    const explosivenessY = -1.2;

    return (
        <NodeElement
            sprite={SpriteTop}
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

const FlintBigPebble = memo(({
    lastUpdate,
    lastMine,
    outroDuration,
    resetDelay,
    settledSum
}) => {

    const initX = -150;
    const initY = -150;
    const floor = 130;

    const introDelay = 400;

    const spinniness = 1;
    const explosivenessX = -0.5;
    const explosivenessY = -0.8;

    return (
        <NodeElement
            sprite={SpriteBigPebble}
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

const FlintSmallPebble = memo(({
    lastUpdate,
    lastMine,
    outroDuration,
    resetDelay,
    settledSum
}) => {

    const initX = -100;
    const initY = -300;
    const floor = 160;

    const introDelay = 500;

    const spinniness = 1.2;
    const explosivenessX = 0.5;
    const explosivenessY = -0.5;

    return (
        <NodeElement
            sprite={SpriteSmallPebble}
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

const FlintNode = ({
    lastMine
}) => {

    const frameRate = 100;
    const [lastUpdate, setLastUpdate] = useState(moment());

    const outroDuration = 500;
    const resetDelay = 500;

    const totalElements = 4;
    const settledSum = useRef(0);

    useEffect(() => {

        if (settledSum.current === totalElements) {
            return;
        }

        const preRenderTime = moment();
        const render = setTimeout(() => {
            setLastUpdate(preRenderTime);
        }, frameRate);

        return () => clearTimeout(render);

    }, [lastUpdate, settledSum.current]);

    return (
        <div>
            <FlintBottom 
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                outroDuration={outroDuration}
                resetDelay={resetDelay}
                lastMine={lastMine}
            />
            <FlintTop 
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                outroDuration={outroDuration}
                resetDelay={resetDelay}
                lastMine={lastMine}
            />
            <FlintBigPebble 
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                outroDuration={outroDuration}
                resetDelay={resetDelay}
                lastMine={lastMine}
            />
            <FlintSmallPebble 
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                outroDuration={outroDuration}
                resetDelay={resetDelay}
                lastMine={lastMine}
            />
        </div>
    )
};

export default FlintNode;