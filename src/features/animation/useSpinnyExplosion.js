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

    //How much the explosiveness varies between animations
    const explosiveVariance = 1;

    //How much the spinniness varies between animation
    const spinnyVariance = 0.5;
    const rotationalVelocity = useRef(0);

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
        setY,
        rotation,
        setRotation
    }) => {

        //Calculate update delta in milliseconds
        const delta = moment().diff(lastUpdate);

        //Update velocity
        let newVelocityX = velocityX;
        const deltaVelocityY = delta * gravity;
        let newVelocityY = velocityY + deltaVelocityY;

        //Trigger explosion
        if (lastExplosion.current !== firstUpdate) {
            
            //Generate variance
            const varianceX = (Math.random() * explosiveVariance) - (explosiveVariance / 2);
            const varianceY = (Math.random() * explosiveVariance) - (explosiveVariance / 2);
            const varianceRotation = (Math.random() * spinnyVariance) - (spinnyVariance / 2);
            const rotationDirection = Math.random() < 0.5 ? -1 : 1;

            //Add explosive velocities
            newVelocityX = explosivenessX + varianceX;
            newVelocityY = explosivenessY + varianceY;
            rotationalVelocity.current = (spinniness + varianceRotation) * rotationDirection;

            lastExplosion.current = firstUpdate;
        }

        //Update position
        const deltaX = delta * newVelocityX;
        let newX = x + deltaX;
        const deltaY = delta * newVelocityY;
        let newY = y + deltaY;

        const deltaRotation = delta * rotationalVelocity.current;
        let newRotation = rotation + deltaRotation;

        //Update state
        if (velocityX !== newVelocityX) {
            setVelocityX(newVelocityX);
        }

        setVelocityY(newVelocityY);
        setX(newX);
        setY(newY);
        setRotation(newRotation);
    };

    return update;
};