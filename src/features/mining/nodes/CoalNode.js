import { memo, useState, useRef, useEffect } from 'react';

import moment from 'moment';

import NodeElement from './NodeElement'; 

import SpriteMain from '../../../resources/nodes/coal/coal_main.png';
import SpriteLeft from '../../../resources/nodes/coal/coal_left.png';
import SpriteRight from '../../../resources/nodes/coal/coal_right.png';
import SpritePebble from '../../../resources/nodes/coal/coal_pebble.png';

const CoalMain = memo(({
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

const CoalLeft = memo(({
    lastUpdate,
    lastMine,
    outroDuration,
    resetDelay,
    settledSum
}) => {

    const initX = -135;
    const initY = -300;
    const floor = 65;

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

const CoalRight = memo(({
    lastUpdate,
    lastMine,
    outroDuration,
    resetDelay,
    settledSum
}) => {

    const initX = 150;
    const initY = -300;
    const floor = 55;

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

const CoalPebble = memo(({
    lastUpdate,
    lastMine,
    outroDuration,
    resetDelay,
    settledSum
}) => {

    const initX = 80;
    const initY = -300;
    const floor = 115;

    const introDelay = 500;

    const spinniness = 1.2;
    const explosivenessX = 0.3;
    const explosivenessY = -1;

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

const CoalNode = ({
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
            <CoalMain 
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                outroDuration={outroDuration}
                resetDelay={resetDelay}
                lastMine={lastMine}
            />
            <CoalLeft 
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                outroDuration={outroDuration}
                resetDelay={resetDelay}
                lastMine={lastMine}
            />
            <CoalRight 
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                outroDuration={outroDuration}
                resetDelay={resetDelay}
                lastMine={lastMine}
            />
            <CoalPebble 
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                outroDuration={outroDuration}
                resetDelay={resetDelay}
                lastMine={lastMine}
            />
        </div>
    )
};

export default CoalNode;