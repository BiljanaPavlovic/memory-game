import React, { useEffect, useState } from 'react';
import { getUsername } from '../util/coetus-service';

const Profile = ({ match }) => {
    
    const [userID] = useState(match.params.user_id)
    const [user, setUser] = useState({})

    useEffect(() =>{
        getUsername(userID)
        .then(data => setUser(data.user))
    },[userID])
    

    return(
        <>
            <p><strong>Име</strong>:   {user.name}</p>
            <p><strong>Презиме</strong>:   {user.surname}</p>
            <p><strong>Корисничко име</strong>:   {user.username}</p>
            <p><strong>E-mail</strong>:   {user.email}</p>
            <img src={user.picture ? user.picture : ''} alt="user-avatar" />
        </>
    )
}

export default Profile