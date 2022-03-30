import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFrieend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFrieend(data))

    }, [])
    console.log(friend);
    return (
        <div>
            <h1>this is friend details</h1>
            <p>ekhane friender details dekhano hobe. sobai redy hoye jaw</p>
            <p>dosto params:{friendId}</p>
            <h4>Name:{friend.name}</h4>
            <p>Email:{friend.email}</p>
            <p>Phone:{friend.phone}</p>
            <p>Website:{friend.website}</p>
            <p>Address:{friend.address?.city}</p>
        </div>
    );
};

export default FriendDetail;