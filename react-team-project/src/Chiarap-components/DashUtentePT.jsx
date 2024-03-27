import React from 'react';
import UserProfileImage from "./UserProfileImage"
import CalendarComponent from './CalendarComponent';

const DashUtentePT = ({ Username }) => {

    return (
        <div className="dashboard-container">
            <div className="user-profile">
                <UserProfileImage/>
            </div>
            <div className="calendar-section">
                <h3>Calendar</h3>
                <div className="small-calendar">
                    <CalendarComponent />
                </div>
            </div>
        </div>
    );
};

export default DashUtentePT