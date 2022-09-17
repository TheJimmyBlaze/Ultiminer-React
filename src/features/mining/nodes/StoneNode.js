import { memo, useState, useRef } from 'react';

import moment from 'moment';

import SpriteMain from '../../../resources/nodes/stone/stone_main.png';
import SpriteLeft from '../../../resources/nodes/stone/stone_left.png';
import SpriteRight from '../../../resources/nodes/stone/stone_right.png';
import SpritePebble from '../../../resources/nodes/stone/stone_pebble.png';

const StoneMain = memo(({
    lastUpdate,
    destroyed
}) => {

    const initX = 0;
    const initY = -280;

    const floor = -30;

    const [x, setX] = useState(initX);
    const [y, setY] = useState(initY);

    const settled = useRef(false);

    return (
        <img className="position-absolute translate-middle"
            style={{left: `${x}px`, top: `${y}px`}}
            src={SpriteMain}/>
    )
});

const StoneLeft = memo(({
    lastUpdate,
    destroyed
}) => {

    const initX = -125;
    const initY = -215;

    const floor = 35;

    const [x, setX] = useState(initX);
    const [y, setY] = useState(initY);

    const settled = useRef(false);

    return (
        <img className="position-absolute translate-middle"
            style={{left: `${x}px`, top: `${y}px`}}
            src={SpriteLeft}/>
    )
});

const StoneRight = memo(({
    lastUpdate,
    destroyed
}) => {

    const initX = 120;
    const initY = -200;

    const floor = 50;

    const [x, setX] = useState(initX);
    const [y, setY] = useState(initY);

    const settled = useRef(false);

    return (
        <img className="position-absolute translate-middle"
            style={{left: `${x}px`, top: `${y}px`}}
            src={SpriteRight}/>
    )
});

const StonePebble = memo(({
    lastUpdate,
    destroyed
}) => {

    const initX = -20;
    const initY = -90;

    const floor = 160;

    const [x, setX] = useState(initX);
    const [y, setY] = useState(initY);

    const settled = useRef(false);

    return (
        <img className="position-absolute translate-middle"
            style={{left: `${x}px`, top: `${y}px`}}
            src={SpritePebble}/>
    )
});

const StoneNode = () => {

    const [lastUpdate, setLastUpdate] = useState(moment());
    const [destroyed, setDestroyed] = useState(false);

    return (
        <div>
            <StoneMain 
                lastUpdate={lastUpdate}
                destroyed={destroyed}
            />
            <StoneLeft 
                lastUpdate={lastUpdate}
                destroyed={destroyed}
            />
            <StoneRight 
                lastUpdate={lastUpdate}
                destroyed={destroyed}
            />
            <StonePebble 
                lastUpdate={lastUpdate}
                destroyed={destroyed}
            />
        </div>
    )
};

export default StoneNode;