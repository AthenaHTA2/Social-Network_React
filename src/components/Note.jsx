import React from "react";
//Google icons: https://mui.com/material-ui/icons/#material-svg-icons
//install the 'material UI Icons package: npm install @mui/icons-material
//npm install @emotion/styled
//https://stackoverflow.com/questions/50829728/how-to-use-material-ui-icons-in-react
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Groups2Icon from '@mui/icons-material/Groups2';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import {AccessAlarm, ThreeDRotation, DeleteForever, DeleteTwoTone, DeleteSharp, DeleteOutlined} from '@mui/icons-material';

function Note(){
    return (<div className="note">
    
        <h1>This is the title</h1>
        <GroupAddIcon/>
        <AccessAlarm/>
        <ThreeDRotation/>
        <p>This is the content</p>
        <DeleteForever/>
        <DeleteTwoTone/>
        <DeleteSharp/>
        <DeleteOutlined/>
        <Groups2Icon/>
        <Diversity3Icon/>
    </div>)
}

export default Note;