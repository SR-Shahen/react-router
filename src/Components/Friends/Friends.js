
import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFrinds] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFrinds(data))
    }, [])
    return (
        <div>
            <h2>This is friends Part</h2>
            <p>amar bondhu tomra kemon acho sobai kotodin tomader dekhina </p>
            <p>Friend quantity:{friends.length}</p>
            {
                friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;