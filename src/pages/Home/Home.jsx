import React from 'react';
import { Link } from 'react-router-dom'
import { useAtomValue } from 'jotai';
import { skillsAtom } from '../../stores/Skills/Skills';
import { firstNameAtom, lastNameAtom } from '../../stores/User/User';
import { GiUnstableProjectile } from "react-icons/gi";

const Home = () => {
    const firstName = useAtomValue(firstNameAtom);
    const lastName = useAtomValue(lastNameAtom);
    const skills = useAtomValue(skillsAtom);
    return (
        <section>
            <h1>Welcome {(firstName + ' ' + lastName) || "inconnu"} !</h1>

            {skills.length > 0 ? (
                <div>
                    <h3>Your skills</h3>
                    <div className='card-list'>
                    {skills.map(skill => (
                        <div className='card-skills' key={skill}>
                            <GiUnstableProjectile />
                            {skill}
                        </div>
                    ))}
                    </div>
                    <p><Link to="/Profile"> Modify tour skills on your profile !</Link></p>
                </div>
                
            ) : (
                <p> <Link to="/Profile"> Add your skills on your profile !</Link></p>
            )}
        </section>
    )
}

export default Home;