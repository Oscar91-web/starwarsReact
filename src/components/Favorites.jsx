import React, { } from 'react';

const Favorites = ({ favorites }) => {

    return (
        <div className="addFavorites">
            <label>Favorites:</label>
            <div className="listUL antiabsolute">
                {favorites.filter(favorite => !favorite.unreal).map(favorite =>
                    <ul key={favorite.name}> 
                    <li>{favorite.name}</li>
                    <li> {favorite.eye_color} </li>
                    <li>{favorite.birth_year}</li>

                    </ul>)}
            </div>
            <label>Made up:</label>
            <div className="listUL antiabsolute">
                {favorites.filter(favorite => favorite.unreal).map(favorite =>
                    <ul  key={favorite.name}>
                        <li> {favorite.name}</li>
                        <li> {favorite.eye_color}</li>
                        <li> {favorite.birth_year}</li>

                    </ul>)}
            </div>
        </div>

    )

}

export default Favorites;
