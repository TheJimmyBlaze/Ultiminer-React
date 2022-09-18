import moment from 'moment';

export const useGravityBounce = () => {

    const gravity = 0.003;                      //Pixels per millisecond

    //Percent of velocity retained (inverted) when bouncing off the floor
    const bounciness = 0.15;

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
        const deltaVelocity = delta * gravity;
        let newVelocity = velocityY + deltaVelocity;

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

        return newVelocity == 0;
    };

    return update;
};