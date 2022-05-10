import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';

function Header() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log("paka : ", user.photoURL);

  const signOut = () => {
    auth.signOut().then( () => {
      dispatch(logout());
    });
  }

  return (
    <div className='header'>
        <div className='header_left'>
          <IconButton>
            <MenuIcon/>
          </IconButton>
          <img src='http://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png' alt=''/>
        </div>
        <div className='header_middle'>
          <SearchIcon/>
          <input placeholder='search mail' type='text'/>
          <ArrowDropDownIcon className='header_inputCaret'/>
        </div>
        <div className='header_right'>
          <IconButton>
            <AppsIcon/>
          </IconButton>
          <IconButton>
            <NotificationsIcon/>
          </IconButton>
          <Avatar onClick={signOut} src={user?.photoURL} style={{marginLeft: 5, cursor:"pointer"}}/>
        </div>
    </div>
  )
}

export default Header