import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { DiReact } from "react-icons/di";

const Navbar = () => {
  const [active, setActive] = useState('profile');

  const handleActive = () => {
    setActive((currentActive) => (currentActive === 'home'? 'profile' : 'home'));
  }

  return (
    <div className='navbar'>
      <DiReact size={48}/>
      <div className='center'>
        <AiOutlineHome />
        <Link to="/" onClick={handleActive}>Home</Link>
      </div>
      <div className='center'>
        <BsPerson />
        <Link to="/Profile" onClick={handleActive}>Profile</Link>
      </div>
    </div>  
  )
}

export default Navbar;