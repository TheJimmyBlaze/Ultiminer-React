import { useState } from 'react';
import ultiminer from '../config/axiosUltiminer';
import moment from 'moment';
import * as actions from '../activity_log/Actions';

export const useMining = ({
    selectedNode,
    addLog,
    setExperience,
    setInventory
}) => {

    const [miningResult, setLastMine] = useState();

    const generateLog = miningResult => {

        const newLog = {
            action: actions.mine,
            title: `Mine ${selectedNode.displayName}`,
            message: (
                <ul>
                    {miningResult.newItems.map(item => (
                        <li key={item.resourceId}>
                            {item.count} {item.displayName}
                        </li>
                    ))}
                    <li>{miningResult.newExp} Experience</li>
                </ul>
            )
        }

        addLog(newLog);
    };

    const mine = async () => {

        try {
            
            //Hit the mine api
            const route = '/Mine';
            const response = await ultiminer.post(route);


            //Store the result in the lastMine state
            const result = response.data.value;

            //Update experience
            setExperience(result.exp);

            //Update inventory
            setInventory(result.resources);

            //Set result
            const miningResult = {
                newItems: result.resources.newResources,
                newExp: result.exp.newExperience,
                lastMine: moment(),
                nextMine: moment(result.nextMine)
            };
            setLastMine(miningResult);
            
            //Add log
            generateLog(miningResult);

        }  catch (err) {
            console.error(`Mining Error: ${err}`);
        }
    };

    return { miningResult, mine };
};