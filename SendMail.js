import React from 'react'
import "./SendMail.css"
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import {useDispatch} from "react-redux";
import { closeSendMessage } from '../../features/mailSlice';
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function SendMail() {

    const dispatch = useDispatch();

    const { register , handleSubmit , formState: { errors } } = useForm();

    const onSubmit = (formData) => {
        console.log("Data : ", formData);
        db.collection("emails").add({
            to: formData.to,
            subject : formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        dispatch(closeSendMessage());
    };

  return (
    <div className='send_mail'>

        <div className='send_mail_header'>

            <h3>New Message</h3>
            <CloseIcon onClick={() => dispatch(closeSendMessage()) } className='send_mail_close'/>

        </div>

        <form onSubmit={handleSubmit(onSubmit)}>

            <input name="to" placeholder='To' type="text" {...register("to", { required: true })} />

            {errors.to && errors.to.type === "required" && (
            <p className="error">To is required</p>)}

            <input name="subject" placeholder='Subject' type="text" {...register("subject", { required: true })}/>

            {errors.subject && errors.subject.type === "required" && (
            <p className="error">Subject is required</p>)}

            <input name="message" className='send_mail_message' placeholder='Message..' type="text" {...register("message", { required: true })}/>

            {errors.message && errors.message.type === "required" && (
            <p className="error">Message is required</p>)}

            <div className='send_mail_options'>

                <Button className='send_mail_button' variant='contained' type='submit' color='primary' style={{margin:"15px"}}>Send</Button>

            </div>

        </form>

    </div>
  )
}

export default SendMail