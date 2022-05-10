import { Button, IconButton } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import './Sidebar.css'
import SidebarOption from '../SidebarOption/SidebarOption'
import ImageIcon from '@mui/icons-material/Image';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import {useDispatch} from "react-redux";
import { openSendMessage } from "../../features/mailSlice";

function Sidebar() {

    const dispatch = useDispatch()

  return ( 
    <div className='sidebar'>
        <Button style={{color:"gray"}} className='sidebar_compose' startIcon={<AddIcon style={{color:"gray"}} fontSize='large'/>} onClick={ () => dispatch(openSendMessage())}>
            Compose
        </Button>

        <SidebarOption Icon={ImageIcon} title="Inbox" number={24} selected={true}/>
        <SidebarOption Icon={StarIcon} title="Starred" number={24} />
        <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={24} />
        <SidebarOption Icon={LabelImportantIcon} title="Important" number={24} />
        <SidebarOption Icon={NearMeIcon} title="Sent" number={24} />
        <SidebarOption Icon={NoteIcon} title="Drafts" number={24} />
        <SidebarOption Icon={ExpandMoreIcon} title="More"/>

        <div className='sidebar_footer'>
            <div className='sidebar_footerIcons'>
                <IconButton>
                    <PersonIcon/>
                </IconButton>
                <IconButton>
                    <DuoIcon/>
                </IconButton>
                <IconButton>
                    <PhoneIcon/>
                </IconButton>
            </div>
        </div>

    </div>
  )
}

export default Sidebar