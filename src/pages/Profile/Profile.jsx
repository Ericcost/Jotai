const Profile = () => {
    
   return (
    <section>
        <h1>Profile</h1>
        <form>
            <div className="name">
                <div className="col">
                    <label>
                        <strong>
                            Firstname :
                        </strong> 
                    </label>
                    <input type='text' id='firstname' name='firstname'/>
                </div>
                <div className="col">
                    <label>
                        <strong>
                            Lastname : 
                        </strong>
                    </label>
                    <input type='text' id='lastname' name='lastname'/>
                </div>
            </div>
            <div className="skills">
                <div className="col">
                    <label>
                        <strong>
                            Skills : 
                        </strong>
                    </label>
                    <input type='text' id='firstname' name='firstname' placeholder='Your skills, separate with a comma'/>
                </div>
            </div>
            <div className="button">
                <button className="button">
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