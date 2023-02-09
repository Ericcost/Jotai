import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { skillsAtom } from '../../stores/Skills/Skills';
import { firstNameAtom, lastNameAtom } from '../../stores/User/User';
import { atomWithStorage } from 'jotai/utils';


const Profile = () => {
    const [firstName, setFirstName] = useAtom(firstNameAtom);
    const [lastName, setLastName] = useAtom(lastNameAtom);
    const [skills, setSkills] = useAtom(skillsAtom);

    const [formValues, setFormValues] = useState({
        firstName: firstName ? firstName : '',
        lastName: lastName ? lastName : '',
        skills: skills ? skills : '',
    });

    useEffect(() => {
        const localFirstName = localStorage.getItem('firstName');
        const localLastName = localStorage.getItem('lastName');
        const localSkills = JSON.parse(localStorage.getItem('skills'));
        if (localFirstName && localLastName && localSkills) {
            setFormValues({
                firstName: localFirstName,
                lastName: localLastName,
                skills: localSkills.join(', ')
            });
            setFirstName(localFirstName);
            setLastName(localLastName);
            setSkills(localSkills);
        }
    }, []); // array to drain if you wanna use a localStorage // fullfill the arrayt wit firstName, lastName, skills

    const handleChange = (event) => {
        setFormValues({...formValues, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const firstName = formValues.firstName.trim();
        const lastName = formValues.lastName.trim();
        const skills = formValues.skills.split(",").map(skill => skill.trim()).filter(skill => skill!== '');
        setFirstName(firstName);
        setLastName(lastName);
        setSkills(skills);
        // localStorage.setItem('firstName', firstName);
        // localStorage.setItem('lastName', lastName);
        // localStorage.setItem('skills', JSON.stringify(skills));
    };

    return (
        <section>
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className="name">
                    <div className="col">
                        <label htmlFor="firstName">
                            <strong>
                                Firstname :
                            </strong> 
                        </label>
                        <input type='text' id='firstName' name='firstName' value={formValues.firstName} onChange={handleChange} />
                    </div>
                    <div className="col">
                        <label htmlFor="lastName">
                            <strong>
                                Lastname : 
                            </strong>
                        </label>
                        <input type='text' id='lastName' name='lastName' value={formValues.lastName} onChange={handleChange} />
                    </div>
                </div>
                <div className="skills">
                    <div className="col">
                        <label htmlFor="skills">
                            <strong>
                                Skills : 
                            </strong>
                        </label>
                        <input type='text' id='skills' name='skills' placeholder='Your skills, separate with a comma' value={formValues.skills} onChange={handleChange}/>
                    </div>
                </div>
                <div className="button">
                    <button className="button" type="submit">
                        <strong>
                            Save
                        </strong>
                    </button>
                </div>

            </form>
        </section>
   )
}

export default Profile;