import React, {useState} from "react";

export default function List({list}){
    
    return(
        <div>
            <ul>
                {list.map((item) => {
                return <li key={item.id}>{item.title}</li>
                })}
            </ul>
        </div>
    )
}