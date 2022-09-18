import { memo, useState, useRef, useEffect } from 'react';

import { useGravityBounce } from '../animation/useGravityBounce';

const NodeElement = memo(({

    //Element image and position
    sprite,
    initX,
    initY,
    floor,

    //Intro animation
    introDelay,
    settledSum,

    //Animation timings
    firstUpdate,
    lastUpdate,
}) => {

    const [velocityX, setVelocityX] = useState(0);
    const [velocityY, setVelocityY] = useState(0);

    const [x, setX] = useState(initX);
    const [y, setY] = useState(initY);

    const settled = useRef(false);

    const intro = useGravityBounce();

    const beginIntro = () => {
        return lastUpdate.diff(firstUpdate) >= introDelay;
    }

    useEffect(() => {

        if (settled.current || !beginIntro()) {
            return;
        }

        settled.current = intro({
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
            style={{left: `${x}px`, top: `${y}px`, opacity: +beginIntro()}}
            src={sprite}/>
    )
});

export default NodeElement;