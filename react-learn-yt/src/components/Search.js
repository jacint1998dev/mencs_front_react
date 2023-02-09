import React, {useState} from "react";

export default function Search({searchTerm, handleSearch}){
    
    return(
        <div>
            <label>Search</label>
            <input 
            type="text" 
            value={searchTerm} 
            onChange={handleSearch}
            />
        </div>
    )
}