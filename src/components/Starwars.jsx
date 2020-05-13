import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Favorites from './Favorites';
import AddFavorite from './AddFavorite';

import Person from './Person';

const Starwars = () => {
    const API_URL = "https://swapi.dev/api/people/";
    const [search, setSearch] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getAllPeople(API_URL);
        setLoading(false);

    }, [])

    const handleChange = (e) => {
        console.log("HandleChange: " + search)
        setSearch(e.target.value);
        if (e.target.value.length >= 1) {
            // getPeople(e.target.value);
        }
        else if (e.target.value.length === 0) {


        }
    }

    const addFavorite = (person) => {

        if (!favorites.find(favorite => person.name === favorite.name)) {
            setFavorites(favorites => favorites.concat(person));
        }
    }
    const getAllPeople = async (next) => {
        let allResults = [];
        try {
            console.log("get people #0");
            for (var i = 0; i < 10 && next; i++) {
                console.log("getting next: " + next);
                const data = await axios.get(next);
                if (data != null) {
                    console.log("got people #1: " + i);
                    console.log(data);
                    console.log("count: " + data.data.count);
                    next = data.data.next;
                    console.log("got people #2: " + next);
                    allResults = allResults.concat(data.data.results);
                }
                else {
                    console.log("no data!");
                    break;
                }
            }
            console.log("allResults: " + allResults.length);
            setPeople(allResults);
        } catch (err) {
            setError(err.message);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Handlesubmit: " + search);
        // getPeople(search);
    }
    const isMatching = (person, search) => {
        if (search.length === 0) {
            return false;
        }

        let regx = RegExp(search, "i");
        if (person.name.match(regx)) {
            return true;
        }
        if (person.eye_color.match(regx)) {
            return true;
        }
        if (person.birth_year.match(regx)) {
            return true;
        }
        // searchMe.name || searchMe.eye_color || searchMe.birth_year === search
        return false;
    }
    if (loading) {
        return <h3> loading</h3>
    }
    if(error){
        return (<h3>{error}</h3>);
    }
    return (
        <div>
            <div className="category">
                <form onSubmit={handleSubmit}>

                    <input className="searchInput" type="text" placeholder="Search character" value={search} onChange={handleChange} />

                    {/* <input type="submit" value="Submit" /> */}

                </form>

                <ul className="listUL">
                    {people.filter(person => isMatching(person, search)).map(person =>
                        <Person key={person.name} person={person} addFavorite={addFavorite} />
                    )}
                </ul>


            </div>
            <div className="switch">
                {/* <label>Favorites</label> */}
                {/* <div className="showFav"> */}
                <div className="first">
                <Favorites favorites={favorites}></Favorites>
                
                </div>
                <div className="last">
                <AddFavorite add={addFavorite}></AddFavorite>
                </div>
                {/* </div> */}
                {/* <label>New character</label> */}
                {/* <div className="showAddFav"> */}

            </div>

        </div>
        // </div>

    )

}

export default Starwars;
