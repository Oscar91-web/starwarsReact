 import React, { useState } from 'react';

 const AddFavorite = ({add}) => {
    const [eyeColor, setEyecolor] = useState("");
    const [name, setName] = useState("");
    const [birthyear, setBirthyear] = useState("");
    const handleEye= (e) =>  {
        
        setEyecolor(e.target.value);
        
    }
    const handleName= (e) =>  {
        
        setName(e.target.value);
        
    }
    const handleBirth= (e) =>  {
        
        setBirthyear(e.target.value);
        
    }
    const handleSubmit = (e) =>  {
        let newFavorite = {
            name: name,
            eye_color: eyeColor,
            birth_year: birthyear,
            unreal: true
        }
        add(newFavorite);
        e.preventDefault();

        setEyecolor("");
        setName("");
        setBirthyear("");
    }
    return (
        <div className="addFavorites dontoverdoit">
            <label>Create a new character</label>
            <form onSubmit={handleSubmit}>
                <ul className="addUL">
                    <li>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={handleName} />
                    </li>
                    
                    <li>
                        <label>Eye color:</label>
                        <input type="text" value={eyeColor} onChange={handleEye} />
                    </li>
                    
                    
                    <li>
                        <label>Birth year:</label>
                        <input type="text" value={birthyear} onChange={handleBirth} />
                    </li>

                    <input type="submit" value="Submit" />
                </ul>
            
            </form>
            
            
            

        </div>
       
    )
    
}

export default AddFavorite;
