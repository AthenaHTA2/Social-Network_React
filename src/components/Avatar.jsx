import React from "react";
import Zoom from '@mui/material/Zoom'

function Avatar(prop){
    return         <Zoom in={true}><img className="circle-img" src={prop.img} alt="avatar_img" /></Zoom>;
};

export default Avatar;