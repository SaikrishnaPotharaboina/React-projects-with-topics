import React, { Component } from 'react';
// import './styles.css';
import "./UserProfile.css"

const user = {
    name: 'Jane Doe',
    bio: 'Frontend developer who loves React and coffee ☕️',
    image: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/dummyUser.jpg'
};

class UserProfile extends Component {
    render() {
        return (
            <div className="user-profile">
                <h2>{user.name}</h2>
            </div>
        );
    }
}

export default UserProfile;
