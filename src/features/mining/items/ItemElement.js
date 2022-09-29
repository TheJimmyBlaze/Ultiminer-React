import { memo, useState, useEffect } from 'react';

import { useSpinnyExplosion } from '../../animation/useSpinnyExplosion';

const smoothingDuration = 100;
const fadeDuration = 200;

const style = {
    animatedItemElement: {
        
        transition: `top ${smoothingDuration}ms,
            left ${smoothingDuration}ms,
            transform ${smoothingDuration}ms,
            opacity ${fadeDuration}ms`,

        transitionTimingFunction: "linear"
    }
}

const ItemElement = memo(({

    //Element image and position
    sprite,

    //Outro animation
    outroDuration,
    spinniness,
    explosivenessX,
    explosivenessY,

    //Render timings
    lastMine = null,
    lastUpdate
}) => {

    const [velocityX, setVelocityX] = useState(0);
    const [velocityY, setVelocityY] = useState(0);

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    
    const [rotation, setRotation] = useState(0);

    //Animation hooks
    const outro = useSpinnyExplosion(spinniness, explosivenessX, explosivenessY);

    //Utilities to determine if animations are playing
    const outroPlaying = () => lastUpdate.diff(lastMine) <= outroDuration + fadeDuration;
    const outroVisible = () => lastUpdate.diff(lastMine) <= outroDuration;

    const visible = () => {
        return (lastMine !== lastUpdate) && outroVisible();
    };

    const playOutro = () => {

        if(outroPlaying()) {
            outro({
                firstUpdate: lastMine,
                lastUpdate,
                velocityX,
                velocityY,
                setVelocityX,
                setVelocityY,
                x,
                y,
                setX,
                setY,
                rotation,
                setRotation
            });
        }
    };

    //Applies animations until the intro has settled
    useEffect(() => {

        playOutro();

    }, [lastUpdate]);

    return (
        <img className="position-absolute"
            style={{
                //Combine the constant animated node style, with the variable style controlled by the animation
                ...style.animatedItemElement,
                ...{
                    left: `${x}px`,
                    top: `${y}px`, 
                    opacity: +!!visible(),
                    transform: `translate(-50%, -50%) rotate(${rotation}deg)`
                }
            }}
            src={sprite}/>
    )
});

export default ItemElement;