import { useRef } from 'react';

import moment from 'moment';

export const useSpinnyExplosion = (
    spinniness,
    explosivenessX,
    explosivenessY,
) => {

    const lastExplosion = useRef(moment());

    //How fast the velocity increases while falling
    const gravity = 0.003;

    const update = ({
        firstUpdate,
        lastUpdate,
        velocityX,
        velocityY,
        setVelocityX,
        setVelocityY,
        x,
        y,
        setX,
        setY
    }) => {

        //Calculate update delta in milliseconds
        const delta = moment().diff(lastUpdate);

        //Update velocity
        let newVelocityX = velocityX;
        const deltaVelocityY = delta * gravity;
        let newVelocityY = velocityY + deltaVelocityY;

        //Trigger explosion
        if (lastExplosion.current !== firstUpdate) {
            
            newVelocityX = explosivenessX;
            newVelocityY = explosivenessY;
            lastExplosion.current = firstUpdate;
        }

        //Update position
        const deltaX = delta * newVelocityX;
        let newX = x + deltaX;
        const deltaY = delta * newVelocityY;
        let newY = y + deltaY;

        //Update state
        if (velocityX !== newVelocityX) {
            setVelocityX(newVelocityX);
        }

        setVelocityY(newVelocityY);
        setX(newX);
        setY(newY);
    };

    return update;
};