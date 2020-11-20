import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <h2>User: {props.username}</h2>
            <p>First paragraph</p>
            <p>Second paragraph</p>
        </div>
    )
};

export default userOutput;