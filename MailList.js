import React from 'react'
import { Checkbox, IconButton } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import "./MailList.css"
import InboxIcon from '@mui/icons-material/Inbox';
import Section from '../Section/Section';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MailRow from '../MailRow/MailRow';
import { useState, useEffect} from "react"
import { db } from "../../firebase";

function MailList() {

    const [mails, setMails] = useState([]);

    useEffect( () => {

        db.collection("emails")
        .orderBy('timestamp', 'desc')
        .onSnapshot( (snapshot) => 
            setMails(
                snapshot.docs.map((doc) => ({
                    id : doc.id,
                    data : doc.data(),
                })) 
            )
        );

    }, []);

  return (
    <div className='mail_list' >
        <div className='email_list_settings'>
            <div className='email_list_settings_left'>
                <Checkbox/>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RedoIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
            <div className='email_list_settings_right'>
                <IconButton>
                    <ChevronLeftIcon/>
                </IconButton>
                <IconButton>
                    <ChevronRightIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
            </div>
        </div>
        <div className='email_list_section'>
            <Section Icon={InboxIcon} title="Primary" color="red" selected />
            <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
            <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
        </div>

        <div className='email_list_list'>
            {mails.map(({id, data : { to, subject, message, timestamp }}) => (
                <MailRow
                    id={id}
                    key={id}
                    title={to}
                    subject={subject}
                    description={message}
                    time={new Date(timestamp?.seconds * 1000).toUTCString()}
                />
            ))}
        </div>

    </div>
  )
}

export default MailList