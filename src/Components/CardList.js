import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div class="row justify-content-start">
            {
                robots.map((user, i) => {
                    return (<Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                        price={robots[i].price}
                    />
                    );
                })
            }
        </div>
    )
}

export default CardList;