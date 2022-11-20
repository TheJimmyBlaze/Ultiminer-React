
import ultiminer from '../config/axiosUltiminer';
import { useState } from 'react';

export const useNodeSelection = () => {

    const [selectedNode, selectNode] = useState(null);

    const getSelectedNode = async () => {

        try {

            const route = '/SelectedNode';
            const response = await ultiminer.get(route);

            //Store the result in state
            const result = response.data.value;
            selectNode(result);

        } catch (err) {
            console.log(`Error loading selected node: ${err}`);
        }
    }

    const setSelectedNode = async nodeId => {

        try {

            const route = '/SelectedNode';
            await ultiminer.post(route, { nodeId: nodeId });
            selectNode(nodeId);
        
        } catch (err) {
            console.log(`Error settings selected node: ${err}`);
        }
        
    };

    return { selectedNode, getSelectedNode, setSelectedNode };
}