import React, { useEffect, useState, useId } from 'react';
import axios from 'axios';

// Css is here
import './UserList.css'

// Components is here
import SingleUser from '../singleUser/SingleUser';


const UserList = () => {
    const [users, setUsers] = useState([])
    const id = useId()

    const fetchUsers = async () => {
        const response = await axios.get("https://randomuser.me/api/?results=9")
        setUsers(response.data.results)
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div className='users-container'>
            {users.map((user, id) => (
                <SingleUser user={user} key={id} />
            ))}
        </div>
    )
}

export default UserList