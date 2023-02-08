import React from 'react';
import { Link } from 'react-router-dom'
import { useAtomValue } from 'jotai';
import { skillsAtom } from '../../stores/Skills/Skills';
import { fullNameAtom } from '../../stores/User/User';

const Home = () => {
    const fullName = useAtomValue(fullNameAtom);
    const skills = useAtomValue(skillsAtom);
    return (
        <section>
            <h1>Welcome {fullName || "inconnu"} !</h1>
            {skills.length > 0 ? (
                <ul>
                {skills.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
                </ul>
            ) : (
                <p>Add your skills on your <Link to="/Profile">profile</Link> !</p>
            )}
        </section>
    )
}

export default Home;