import { memo, useState, useRef, useEffect } from 'react';

import moment from 'moment';

import { useGravityBounce } from '../../animation/useGravityBounce';

import SpriteMain from '../../../resources/nodes/stone/stone_main.png';
import SpriteLeft from '../../../resources/nodes/stone/stone_left.png';
import SpriteRight from '../../../resources/nodes/stone/stone_right.png';
import SpritePebble from '../../../resources/nodes/stone/stone_pebble.png';

const StoneMain = memo(({
    lastUpdate,
    settledSum,
    destroyed
}) => {

    const initX = 0;
    const initY = -280;

    const floor = -30;

    const [velocityX, setVelocityX] = useState(0);
    const [velocityY, setVelocityY] = useState(0);

    const [x, setX] = useState(initX);
    const [y, setY] = useState(initY);

    const settled = useRef(false);

    const update = useGravityBounce();

    useEffect(() => {

        if (settled.current) {
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
            style={{left: `${x}px`, top: `${y}px`}}
            src={SpriteMain}/>
    )
});

const StoneLeft = memo(({
    lastUpdate,
    settledSum,
    destroyed
}) => {

    const initX = -125;
    const initY = -300;

    const floor = 35;

    const [velocityX, setVelocityX] = useState(0);
    const [velocityY, setVelocityY] = useState(0);

    const [x, setX] = useState(initX);
    const [y, setY] = useState(initY);

    const settled = useRef(false);

    const update = useGravityBounce();

    useEffect(() => {

        if (settled.current) {
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
            style={{left: `${x}px`, top: `${y}px`}}
            src={SpriteLeft}/>
    )
});

const StoneRight = memo(({
    lastUpdate,
    settledSum,
    destroyed
}) => {

    const initX = 120;
    const initY = -280;

    const [velocityX, setVelocityX] = useState(0);
    const [velocityY, setVelocityY] = useState(0);

    const floor = 50;

    const [x, setX] = useState(initX);
    const [y, setY] = useState(initY);

    const settled = useRef(false);

    const update = useGravityBounce();

    useEffect(() => {

        if (settled.current) {
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
            style={{left: `${x}px`, top: `${y}px`}}
            src={SpriteRight}/>
    )
});

const StonePebble = memo(({
    lastUpdate,
    settledSum,
    destroyed
}) => {

    const initX = -20;
    const initY = -200;

    const [velocityX, setVelocityX] = useState(0);
    const [velocityY, setVelocityY] = useState(0);

    const floor = 160;

    const [x, setX] = useState(initX);
    const [y, setY] = useState(initY);

    const settled = useRef(false);

    const update = useGravityBounce();

    useEffect(() => {

        if (settled.current) {
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
            style={{left: `${x}px`, top: `${y}px`}}
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

    useEffect(() => {

        if (settledSum.current == totalElements) {
            return;
        }

        const preRenderTime = moment();
        const render = setTimeout(() => {
            console.log(`Render: ${preRenderTime.millisecond()}`);
            setLastUpdate(preRenderTime);
        }, frameRate)

        return () => clearTimeout(render);

    }, [lastUpdate]);

    useEffect(() => {
        setLastUpdate(moment());
    }, [])

    return (
        <div>
            <StoneMain 
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                destroyed={destroyed}
            />
            <StoneLeft 
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                destroyed={destroyed}
            />
            <StoneRight 
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                destroyed={destroyed}
            />
            <StonePebble 
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                destroyed={destroyed}
            />
        </div>
    )
};

export default StoneNode;