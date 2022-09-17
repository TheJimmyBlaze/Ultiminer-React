import { memo, useState, useRef, useEffect } from 'react';

import moment from 'moment';

import { useGravityBounce } from '../../animation/useGravityBounce';

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

    const spawnDelay = 100;

    const [velocityX, setVelocityX] = useState(0);
    const [velocityY, setVelocityY] = useState(0);

    const [x, setX] = useState(initX);
    const [y, setY] = useState(initY);

    const settled = useRef(false);

    const update = useGravityBounce();

    const isReady = () => {
        return lastUpdate.diff(firstUpdate) >= spawnDelay;
    }

    useEffect(() => {

        if (settled.current || !isReady()) {
            return;
        }

        settled.current = update({
            lastUpdate,
            velocityY,
            setVelocityY,
            y,
            setY,
            floor
        });

        settledSum.current = settledSum.current + settled.current;
    }, [lastUpdate]);

    return (
        <img className="position-absolute translate-middle animated-node-element"
            style={{left: `${x}px`, top: `${y}px`, opacity: +isReady()}}
            src={SpriteMain}/>
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

    const spawnDelay = 300;

    const [velocityX, setVelocityX] = useState(0);
    const [velocityY, setVelocityY] = useState(0);

    const [x, setX] = useState(initX);
    const [y, setY] = useState(initY);

    const settled = useRef(false);

    const update = useGravityBounce();

    const isReady = () => {
        return lastUpdate.diff(firstUpdate) >= spawnDelay;
    }

    useEffect(() => {

        if (settled.current || !isReady()) {
            return;
        }

        settled.current = update({
            lastUpdate,
            velocityY,
            setVelocityY,
            y,
            setY,
            floor
        });

        settledSum.current = settledSum.current + settled.current;
    }, [lastUpdate]);

    return (
        <img className="position-absolute translate-middle animated-node-element"
            style={{left: `${x}px`, top: `${y}px`, opacity: +isReady()}}
            src={SpriteLeft}/>
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

    const [velocityX, setVelocityX] = useState(0);
    const [velocityY, setVelocityY] = useState(0);

    const floor = 50;

    const spawnDelay = 400;

    const [x, setX] = useState(initX);
    const [y, setY] = useState(initY);

    const settled = useRef(false);

    const update = useGravityBounce();

    const isReady = () => {
        return lastUpdate.diff(firstUpdate) >= spawnDelay;
    }

    useEffect(() => {

        if (settled.current || !isReady()) {
            return;
        }

        settled.current = update({
            lastUpdate,
            velocityY,
            setVelocityY,
            y,
            setY,
            floor
        });

        settledSum.current = settledSum.current + settled.current;
    }, [lastUpdate]);

    return (
        <img className="position-absolute translate-middle animated-node-element"
            style={{left: `${x}px`, top: `${y}px`, opacity: +isReady()}}
            src={SpriteRight}/>
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

    const spawnDelay = 500;

    const [velocityX, setVelocityX] = useState(0);
    const [velocityY, setVelocityY] = useState(0);

    const [x, setX] = useState(initX);
    const [y, setY] = useState(initY);

    const settled = useRef(false);

    const update = useGravityBounce();

    const isReady = () => {
        return lastUpdate.diff(firstUpdate) >= spawnDelay;
    }

    useEffect(() => {

        if (settled.current || !isReady()) {
            return;
        }

        settled.current = update({
            lastUpdate,
            velocityY,
            setVelocityY,
            y,
            setY,
            floor
        });

        settledSum.current = settledSum.current + settled.current;
    }, [lastUpdate]);

    return (
        <img className="position-absolute translate-middle animated-node-element"
            style={{left: `${x}px`, top: `${y}px`, opacity: +isReady()}}
            src={SpritePebble}/>
    )
});

const StoneNode = ({
    frameRate = 100
}) => {

    const [lastUpdate, setLastUpdate] = useState(moment());
    const [destroyed, setDestroyed] = useState(false);

    const totalElements = 4;
    const settledSum = useRef(0);

    const firstUpdate = useRef(moment());

    useEffect(() => {

        if (settledSum.current == totalElements) {
            return;
        }

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