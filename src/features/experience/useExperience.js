
import ultiminer from '../config/axiosUltiminer';
import { useState } from 'react';

export const useExperience = () => {

    const [experience, setExperience] = useState(null);

    const getExperience = async () => {

        //If experience is null, call the API to load the value   
        if (experience === null) {

            try {
                
                const route = '/Experience';
                const response = await ultiminer.get(route);
        
                //Store the result in the state
                const result = response.data.value
                setExperience(result);
                
            } catch (err) {
                console.log(`Error loading experience: ${err}`);
            }
        } 

        //return the state value, this might have just been loaded from the API
        return experience;
    };

    return { experience, getExperience, setExperience };
};