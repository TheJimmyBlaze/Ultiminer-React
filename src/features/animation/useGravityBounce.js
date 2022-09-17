import moment from 'moment';

export const useGravityBounce = () => {

    const gravity = 0.00981;                    //Pixels per millisecond
    const terminalVelocity = 0.064;             //Pixels per millisecond

    //Percent of velocity retained (inverted) when bouncing off the floor
    const bounciness = 0.25;

    //If the absolute velocity is less than the terminal stop the bounce
    const bounceTerminationVelocity = 0.004;    //Pixels per millisecond

    const update = ({
        lastUpdate,
        velocityX,
        setVelocityX,
        x,
        setX,
        floor
    }) => {

        //Calculate update delta in milliseconds
        const delta = moment().diff(lastUpdate);

        //Update velocity
        let newVelocity = velocityX;
        if (newVelocity < terminalVelocity) {

            const deltaVelocity = delta * gravity;
            //Clamp velocity to terminal velocity
            newVelocity = Math.min(velocityX + deltaVelocity, terminalVelocity);
        }

        //Update position
        const deltaX = delta * velocityX;
        let newX = x + deltaX;

        //Perform bounce (clamp to floor, reverse velocity)
        if (newX > floor) {
            
            newX = floor;
            newVelocity = newVelocity * -bounciness;

            if (Math.abs(newVelocity) < bounceTerminationVelocity) {
                newVelocity = 0;
            }
        }

        //Update state
        setVelocityX(newVelocity);
        setX(newX);

        //If the velocity is 0, the bounce animation is finished
        return newVelocity == 0;
    };

    return { update };
};