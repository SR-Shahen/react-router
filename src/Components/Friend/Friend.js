import React from 'react';

const Friend = (props) => {
    const { name, username } = props.friend;
    return (
        <div>
            <h3>Name:{name}</h3>
            <button >{username}</button>
        </div>
    );
};

export default Friend;