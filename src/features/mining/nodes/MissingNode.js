import { memo, useState, useRef, useEffect } from 'react';

import moment from 'moment';

import NodeElement from './NodeElement';

import SpriteQuestion from '../../../resources/nodes/missing/missing_question.png';
import SpriteMark from '../../../resources/nodes/missing/missing_mark.png';

const MissingQuestion = memo(({
    lastUpdate,
    lastMine,
    outroDuration,
    resetDelay,
    settledSum
}) => {

    const initX = -10;
    const initY = -300;
    const floor = -30;

    const introDelay = 500;

    const spinniness = 0.3;
    const explosivenessX = 0;
    const explosivenessY = -1;

    return (
        <NodeElement
            sprite={SpriteQuestion}
            initX={initX}
            initY={initY}
            floor={floor}

            introDelay={introDelay}
            outroDuration={outroDuration}
            resetDelay={resetDelay}
            spinniness={spinniness}
            explosivenessX={explosivenessX}
            explosivenessY={explosivenessY}

            lastMine={lastMine}
            settledSum={settledSum}
            lastUpdate={lastUpdate}
        />
    )
});

const MissingMark = memo(({
    lastUpdate,
    lastMine,
    outroDuration,
    resetDelay,
    settledSum
}) => {

    const initX = 0;
    const initY = -300;
    const floor = 160;

    const introDelay = 100;

    const spinniness = 0.5;
    const explosivenessX = -0.3;
    const explosivenessY = -1;

    return (
        <NodeElement
            sprite={SpriteMark}
            initX={initX}
            initY={initY}
            floor={floor}

            introDelay={introDelay}
            outroDuration={outroDuration}
            resetDelay={resetDelay}
            spinniness={spinniness}
            explosivenessX={explosivenessX}
            explosivenessY={explosivenessY}

            lastMine={lastMine}
            settledSum={settledSum}
            lastUpdate={lastUpdate}
        />
    )
});

const MissingNode = ({
    lastMine
}) => {

    const frameRate = 100;
    const [lastUpdate, setLastUpdate] = useState(moment());
    
    const outroDuration = 500;
    const resetDelay = 500;

    const totalElements = 2;
    const settledSum = useRef(0);

    useEffect(() => {

        if (settledSum.current === totalElements) {
            return;
        }

        const preRenderTime = moment();
        const render = setTimeout(() => {
            setLastUpdate(preRenderTime);
        }, frameRate);

        return () => clearTimeout(render);

    }, [lastUpdate, settledSum.current]);

    return (
        <div>
            <MissingMark
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                outroDuration={outroDuration}
                resetDelay={resetDelay}
                lastMine={lastMine}
            />
            <MissingQuestion
                lastUpdate={lastUpdate}
                settledSum={settledSum}
                outroDuration={outroDuration}
                resetDelay={resetDelay}
                lastMine={lastMine}
            />
        </div>
    )
};

export default MissingNode;