import { memo, useState, useRef, useEffect } from 'react';

import moment from 'moment';

import { useGravityBounce } from '../animation/useGravityBounce';
import { useSpinnyExplosion } from '../animation/useSpinnyExplosion';

const smoothingDuration = 100;
const fadeDuration = 200;

const style = {
    animatedNodeElement: {

        transition: `top ${smoothingDuration}ms, 
            left ${smoothingDuration}ms, 
            transform ${smoothingDuration}ms,
            opacity ${fadeDuration}ms`,

        transitionTimingFunction: "linear"
    }
}

const NodeElement = memo(({

    //Element image and position
    sprite,
    initX,
    initY,
    floor,

    //Intro animation
    introDelay,

    //Outro animation
    outroDuration,
    resetDelay,
    spinniness,
    explosivenessX,
    explosivenessY,

    //Render timings
    lastMine,
    lastUpdate,
    settledSum,
}) => {

    const [velocityX, setVelocityX] = useState(0);
    const [velocityY, setVelocityY] = useState(0);

    const [x, setX] = useState(initX);
    const [y, setY] = useState(initY);
    
    const [rotation, setRotation] = useState(0);

    const [introBegin, setIntroBegin] = useState(moment());

    //Elements are considered to be 'settled' after the intro is finished playing, but before the outro begins playing
    const settled = useRef(false);
    const settle = () => {
        settled.current = true;
        settledSum.current = settledSum.current += 1;
    };
    const unSettle = () => {
        settled.current = false;
        settledSum.current = settledSum.current -= 1;
    }

    //Animation hooks
    const intro = useGravityBounce(floor);
    const outro = useSpinnyExplosion(spinniness, explosivenessX, explosivenessY);

    //Utilities to determine if animations are playing
    const introPlaying = () => lastUpdate.diff(introBegin) >= introDelay;
    const outroPlaying = () => lastUpdate.diff(lastMine) <= outroDuration + fadeDuration;
    const outroVisible = () => lastUpdate.diff(lastMine) <= outroDuration;

    const visible = () => {
        return introPlaying() || outroVisible();
    };

    //Resets the element to where it should spawn before the intro plays
    const resetPosition = () => {

        setVelocityX(0);
        setVelocityY(0);
        setX(initX);
        setY(initY);
        setRotation(0);
    };

    //Starts animation loop when the node is mined
    useEffect(() => {

        if(lastMine === null) {
            return;
        }

        if(!introPlaying()) {
            resetPosition();
        }

        //Begin outro
        unSettle();
        setIntroBegin(moment().add(outroDuration + resetDelay));
        
        //Begin intro
        const beginIntro = setTimeout(() => {
            resetPosition();
        }, outroDuration + resetDelay);

        return () => clearTimeout(beginIntro);
        
    }, [lastMine]);

    //Applies animations until the intro has settled
    useEffect(() => {

        if (settled.current) {
            return;
        }

        //Apply intro animation
        if(introPlaying()) {
            const finished = intro({
                lastUpdate,
                velocityY,
                setVelocityY,
                y,
                setY
            });
            
            if (finished) {
                settle();
            }
        }

        //Apply outro animation
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

    }, [lastUpdate]);

    return (
        <img className="position-absolute"
            style={{
                //Combine the constant animated node style, with the variable style controlled by the animation
                ...style.animatedNodeElement,
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

export default NodeElement;