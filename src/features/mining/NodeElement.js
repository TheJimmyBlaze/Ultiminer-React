import { memo, useState, useRef, useEffect } from 'react';

import moment from 'moment';

import { useGravityBounce } from '../animation/useGravityBounce';
import { useSpinnyExplosion } from '../animation/useSpinnyExplosion';

const NodeElement = memo(({

    //Element image and position
    sprite,
    initX,
    initY,
    floor,

    //Intro/outro animation
    introDelay,
    outroDuration,
    resetDelay,

    //Render timings
    lastMine,
    lastUpdate,
    settledSum,
}) => {

    const [velocityX, setVelocityX] = useState(0);
    const [velocityY, setVelocityY] = useState(0);

    const [x, setX] = useState(initX);
    const [y, setY] = useState(initY);

    const [introBegin, setIntroBegin] = useState(moment());

    const settled = useRef(false);
    const settle = () => {
        settled.current = true;
        settledSum.current = settledSum.current += 1;
    };
    const unSettle = () => {
        settled.current = false;
        settledSum.current = settledSum.current -= 1;
    }

    const intro = useGravityBounce();
    const outro = useSpinnyExplosion();

    const introPlaying = () => lastUpdate.diff(introBegin) >= introDelay;
    const outroPlaying = () => lastUpdate.diff(lastMine) <= outroDuration;

    const visible = () => {
        return introPlaying() || outroPlaying();
    };

    const resetPosition = () => {

        setVelocityX(0);
        setVelocityY(0);
        setX(initX);
        setY(initY);
    };

    useEffect(() => {

        if(lastMine === null) {
            return;
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

    useEffect(() => {

        if (settled.current || !visible()) {
            return;
        }

        if(introPlaying()) {
            const finished = intro({
                lastUpdate,
                velocityY,
                setVelocityY,
                y,
                setY,
                floor
            });
            
            if (finished) {
                settle();
            }
        }

        if(outroPlaying()) {
            outro({

            });
        }

    }, [lastUpdate]);
    
    return (
        <img className="position-absolute translate-middle animated-node-element"
            style={{left: `${x}px`, top: `${y}px`, opacity: +!!visible()}}
            src={sprite}/>
    )
});

export default NodeElement;