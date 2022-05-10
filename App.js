import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/SideBar/Sidebar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Mail from './components/Mail/Mail';
import MailList from './components/MailList/MailList';
import SendMail from './components/SendMail/SendMail';
import {useSelector} from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser } from "./features/userSlice";
import Login from './components/Login/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login } from './features/userSlice';

function App() {

  const dispatch = useDispatch();

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        )
      }
    })
  }, [])

  return (

    <Router>

      {!user ? (
        <Login/>
      ) : (
        <div className="app">

        <Header/>

        <div className='app_body'>

          <Sidebar/>

          <Routes>
            <Route exact path="/mail" element={<Mail/>}/>
            <Route exact path="/" element={<MailList/>}/>
          </Routes>
            
        </div>

        { sendMessageIsOpen && <SendMail/>}

        </div>
      )
      }

    </Router>

  );
}

export default App;
