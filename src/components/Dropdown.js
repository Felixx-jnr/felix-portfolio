
import user from '../assets/user.png';
import edit from '../assets/edit.png';
import inbox from '../assets/envelope.png';
import settings from '../assets/settings.png';
import help from '../assets/question.png';
import logout from '../assets/log-out.png';
import moi from '../assets/be2.png'

import { useState, useEffect, useRef } from "react";


const Dropdown = () => {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(()=>{
    let handler = (e)=>{
      if (!menuRef.current.contains(e.target)){
        setOpen(false);

      }
    }
    document.addEventListener('mousedown', handler);

    return() => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return ( 
    <div className="Dropdown">
      <div className="menu-container" ref = {menuRef}>
        <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
        <img src= {moi} alt="" />
        </div>

        <div className={`dropdown-menu ${open? 'active': 'inactive'}`}>
          <h3>Menu <br/><span>WEBSITE DESIGNER</span> </h3>
          <ul>
            <DropdownItem img = {user} text = {'My Profile'}/>
            <DropdownItem img = {edit} text = {"Edit Profile"}/>
            <DropdownItem img = {inbox} text = {"Inbox"}/>
            <DropdownItem img = {settings} text = {"Settings"}/>
            <DropdownItem img = {help} text = {"Helps"}/>
            <DropdownItem img = {logout} text = {"Logout"}/>
          </ul>
        </div>
      </div>
      
    </div>
   );
}

function DropdownItem (props) {
  return(
    <li className="dropdownItem">
      <img src={props.img} />
      <a>{props.text}</a>
    </li>
  )
}

 
export default Dropdown;