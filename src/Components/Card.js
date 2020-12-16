import React from 'react';

const Card = ({ name, email, id, price }) => {
    //props = {name,email,id,price}
    return (
        <div class="container col">
            <div class="card shadow p-3 mb-5 bg-white rounded">
                <img alt="Robot" src={`https://robohash.org/${id}test?200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                    <div class="row container justify-content-around">
                        <button type="button" class="btn btn-primary">
                            Add to Cart
                    <span class="m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM4 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm7 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                </svg>
                            </span>
                        </button>
                        <p>${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;