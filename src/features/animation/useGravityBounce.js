import moment from 'moment';

export const useGravityBounce = () => {

    const gravity = 0.0015;                      //Pixels per millisecond
    const terminalVelocity = 64;                //Pixels per millisecond

    //Percent of velocity retained (inverted) when bouncing off the floor
    const bounciness = 0.25;

    //If the absolute velocity is less than the terminal stop the bounce
    const bounceTerminationVelocity = 0.1;     //Pixels per millisecond

    const update = ({
        lastUpdate,
        velocityY,
        setVelocityY,
        y,
        setY,
        floor
    }) => {

        //Calculate update delta in milliseconds
        const delta = moment().diff(lastUpdate);

        //Update velocity
        let newVelocity = velocityY;
        if (newVelocity < terminalVelocity) {

            const deltaVelocity = delta * gravity;
            //Clamp velocity to terminal velocity
            newVelocity = Math.min(velocityY + deltaVelocity, terminalVelocity);
        }

        //Update position
        const deltaY = delta * velocityY;
        let newY = y + deltaY;

        //Perform bounce (clamp to floor, reverse velocity)
        if (newY > floor) {
            
            newY = floor;
            newVelocity = newVelocity * (-bounciness);

            if (Math.abs(newVelocity) < bounceTerminationVelocity) {
                newVelocity = 0;
            }
        }

        //Update state
        setVelocityY(newVelocity);
        setY(newY);

        //If the velocity is 0, the bounce animation is finished
        return newVelocity == 0;
    };

    return update;
};