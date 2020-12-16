import React from 'react';

const Card = ({name,email,id}) => {
    //props = {name,email,id}
    return (
        <div class="container col">
        <div class="card shadow p-3 mb-5 bg-white rounded">
            <img alt="Robot" src = {`https://robohash.org/${id}test?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        </div>
    );
}

export default Card;