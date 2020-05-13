import React, { useState, } from 'react';


const Person = ({ person, addFavorite }) => {
    return (

        <li key={person.name}>
            <div>
                <ul>
                    <li>{person.name}</li>
                    <li>{person.eye_color} eyes</li>
                    <li>Birth year: {person.birth_year}</li>
                </ul>
            </div>
            <div><button className="favoriteButton" onClick={() => addFavorite(person)}>Add favorite</button></div>

        </li>
    )
}
export default Person;