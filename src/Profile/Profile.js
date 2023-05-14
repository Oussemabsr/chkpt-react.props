import React from 'react'
import PropTypes from "prop-types";
const Profile = (props) => {
    const handlename=(fullName) => alert(`my name is ${props.fullName}`)
  return (
    <div>
        <h2>This is my profile</h2>
        {props.children}
        <h3>{props.fullName}</h3>
        <h3>{props.bio}</h3>
        <h3>{props.profession}</h3>
<button onClick={handlename}>click me</button>
    </div>
  )
}
Profile.defaultProps = {
	bio: "Developer",
};
Profile.propTypes = {
	age: PropTypes.number,
};
export default Profile