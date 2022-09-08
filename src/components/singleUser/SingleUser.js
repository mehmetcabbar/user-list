import React from 'react';

// Css connect is here
import './SingleUser.css';

const SingleUser = ({ user }) => {
    return (
        <div className='userlist-container'>
            <div className='userlist-wrapper'>
                <div className='user-picture-box'>
                    <img src={user.picture.large} className='user-image' alt="user picture" />
                </div>
                <div className='user-content'>
                    <h3 className='user-title'>{user.name.first}  {user.name.last}</h3>
                    <div className='user-content-box'>
                        <div className='user-text'>
                            <span className='userlist-icon'> <ion-icon name="location-outline"></ion-icon> </span> {user.location.city} / {user.location.country}
                        </div>
                        <div className='user-text'>
                            <span className='userlist-icon'> <ion-icon name="mail-outline"></ion-icon> </span> {user.email}
                        </div>
                        <div className='user-text-last'>
                            <span className='userlist-icon'> <ion-icon name="person-outline"></ion-icon> </span> {user.login.username}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleUser;