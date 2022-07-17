import React from 'react';

const Card =({id, name, email})=> { 
        return ( 
        <div className='bg-light-green br3 dit dib pa3 ma2 grow shadow-5 bw2 card'>
            <img src={`https://robohash.org/${id}`} alt="Robots" /> 
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>    
        </div>
    );
}

 
export default Card;