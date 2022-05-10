import React from 'react'
import { Checkbox, IconButton } from '@mui/material'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { useNavigate } from 'react-router-dom';
import "./MailRow.css";
import {useDispatch} from "react-redux";
import { selectMail } from '../../features/mailSlice';

function MailRow({id, title, description, time, subject}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            description,
            time,
            subject,
        }));
        navigate("/mail");
    };

  return (
    <div onClick={ openMail } className='email_row'>
        <div className='email_row_option'>
            <Checkbox/>
            <IconButton>
                <StarBorderOutlinedIcon/>
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon/>
            </IconButton>
        </div>
        <h3 className='email_row_title'>
            {title}
        </h3>
        <div className='email_row_message'>
            <h4>
                {subject}{" "}
                <span className='email_row_description'>-
                    {" "}{description}
                </span>
            </h4>
        </div>
        <div className='email_row_time'>
            {time}
        </div>
    </div>
  )
}

export default MailRow