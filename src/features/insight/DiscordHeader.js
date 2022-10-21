import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useJWT } from '../authentication/useJWT';
import { useConfig } from '../config/useConfig';

import astronaut from '../../resources/Astronaut.png';

const DiscordHeader = () => {

    const { discordCDN } = useConfig();

    const { parseToken } = useJWT();

    const [displayName, setDisplayName] = useState("Someone");
    const [avatarURL, setAvatarURL] = useState(null);

    useEffect(() => {

        const token = parseToken();

        //Set display name
        setDisplayName(token.name);

        //Set avatar url
        const userId = token.nameid;
        const avatarId = token["ultiminer.discord.avatar"];
        setAvatarURL(`${discordCDN}/avatars/${userId}/${avatarId}`);
        console.log(avatarURL);
    }, []);

    return (
        <div className="d-flex justify-content-between align-items-center text-light  p-2 insight-header">

            <h5 className="m-0 text-truncate">
                {displayName}
            </h5>

            <Image 
                src={avatarURL || astronaut} 
                rounded
                className="insight-logo" 
            />
        </div>
    );
};

export default DiscordHeader;