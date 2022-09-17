import { memo } from 'react';

import StoneMain from '../../../resources/nodes/stone/stone_main.png';
import StoneLeft from '../../../resources/nodes/stone/stone_left.png';
import StoneRight from '../../../resources/nodes/stone/stone_right.png';
import StonePebble from '../../../resources/nodes/stone/stone_pebble.png';

const StoneNode = memo(({

}) => {

    return (
        <section>
            <img className="position-absolute translate-middle"
                style={{left: "0px", top: "-30px"}}
                src={StoneMain}/>

            <img className="position-absolute translate-middle"
                style={{left: "-125px", top: "35px"}}
                src={StoneLeft}/>

            <img className="position-absolute translate-middle"
                style={{left: "120px", top: "50px"}}
                src={StoneRight}/>

            <img className="position-absolute translate-middle"
                style={{left: "-20px", top: "160px"}}
                src={StonePebble}/>
        </section>
                
    )
});

export default StoneNode;