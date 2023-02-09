import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// icons
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { DiReact } from "react-icons/di";

// atoms
import { useAtomValue } from 'jotai';
import { skillsCountAtom } from '../../stores/Skills/Skills';
import { fullNameAtom } from '../../stores/User/User';


const Navbar = () => {
  const fullName = useAtomValue(fullNameAtom);
  const skillsCount = useAtomValue(skillsCountAtom);

  return (
    <div className='navbar'>
      <DiReact size={48}/>
      <div className='center'>
        <AiOutlineHome />
        <Link to="/">Home</Link>
      </div>
      <div className='center'>
        <BsPerson />
        <Link to="/Profile">Profile</Link>
      </div>
      <section className='header'>
        <h3>{fullName || 'Inconnu'}</h3>
        <small>{skillsCount || 0} compétences</small>
      </section>
    </div>  
  )
}

export default Navbar;