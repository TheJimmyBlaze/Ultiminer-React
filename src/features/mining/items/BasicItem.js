import { memo, useState, useEffect } from 'react';

import moment from 'moment';

import ItemElement from './ItemElement';

const BasicItem = memo(({
    sprite,
    lastMine
}) => {

    const frameRate = 100;
    const [lastUpdate, setLastUpdate] = useState(lastMine);

    const outroDuration = 800;
    
    const spinniness = 0;
    const explosivenessX = 0;
    const explosivenessY = -1.5;

    useEffect(() => {

        const preRenderTime = moment();
        const render = setTimeout(() => {
            setLastUpdate(preRenderTime);
        }, frameRate);

        return () => clearTimeout(render);

    }, [lastUpdate]);

    return (
        <ItemElement
            sprite={sprite}

            outroDuration={outroDuration}
            spinniness={spinniness}
            explosivenessX={explosivenessX}
            explosivenessY={explosivenessY}

            lastMine={lastMine}
            lastUpdate={lastUpdate}
        />
    )
});

export default BasicItem;