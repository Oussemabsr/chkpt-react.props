import React from 'react';
import './App.css';
import Profile from './Profile/Profile';
import PropTypes from "prop-types";
function App() {
  return (
    <div className="App">
    <Profile fullName='Oussema' bio='Developper' profession='fullstack js'> 
     <img style={{width:'400px'}} src='https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg' alt='mypic'/>
     </Profile>
    </div>
  );
}

export default App;
