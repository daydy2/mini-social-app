import React, { useState } from "react";
import styled from "styled-components";
import ProfileImg from "../Components/ProfileImg/ProfileImg";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'Dinnis Daniel',
    email: 'dinisdaniel@gmail.com',
    bio: 'kskskskkskskksksksksksk'
  })

  const profileHandler = (e) => {
    const {name, value} = e.target;

    setProfile({
      ...profile,
      [name]: value,
    })    
  }
  return (
    <MyProfile>
      <header>
        <ProfileImg
          width="500px"
          height="500px"
          style={{ borderRadius: "20px" }}
        />
      </header>
      <form className="profilePage__form">
        <div className="profilePage__div">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" value={profile.name}  onChange={profileHandler}/>
        </div>
        <div className="profilePage__div">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" value={profile.email}  onChange={profileHandler} />
        </div>
        <div className="profilePage__div">
          <label for="bio">Bio</label>
          <textarea type="text" id="bio" name="bio" onChange={profileHandler}>
            {loremememememem}
          </textarea>
        </div>
      </form>
    </MyProfile>
  );
};
const MyProfile = styled.main`
  background: #ffffff;
  padding: 2rem 1.5rem;
`;
export default ProfilePage;
