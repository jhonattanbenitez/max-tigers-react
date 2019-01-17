import React from 'react';
import {SocialIcon} from 'react-social-icons';

const Social = (props) =>{
     
    return <div>
               {/* <SocialIcon style={{ height: 40, width: 40, margin: 15 }} url="https://twitter.com/" /> */}
                <SocialIcon style={{ height: 40, width: 40, margin: 15 }} url={props.socialUrl} />
               {/*  <SocialIcon style={{ height: 40, width: 40, margin: 15 }} url="https://www.instagram.com/" />
                <SocialIcon style={{ height: 40, width: 40, margin: 15 }} url="https://www.twitch.com" /> */}

           </div>

}

export default Social;