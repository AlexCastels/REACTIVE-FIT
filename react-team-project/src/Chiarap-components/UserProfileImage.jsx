import React, { useState } from 'react';
import "./UserProfileImage.css";

const UserProfileImage = ({ username, imageUrl }) => {
    const [profileImageUrl, setProfileImageUrl] = useState("https://via.placeholder.com/150");

    const handleImageUrlChange = (event) => {
        setProfileImageUrl(event.target.value);
    };

    return (
        <div>
            <div className="profile-image-container">
                <img src={imageUrl || profileImageUrl} alt="*" className="profile-image" />
            </div>
            <h4>Username: {username}</h4>
        </div>
    );
};

export default UserProfileImage;