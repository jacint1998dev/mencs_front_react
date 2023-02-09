import React, {useState} from "react";

export default function WelcomeDialog(){
    return(<>
        <Dialog title='title' content='Welcome to react post'/>
        <Dialog title='title2' content='Welcome to react post2'/>
        <Dialog title='title3' content='Welcome to react post3'/>
        <Dialog title='title4' content='Welcome to react post4'/>
        </>
    )
}

function FancyBorder (props){
    return(
        <div>
            {props.children}
        </div>
    )
}

function Dialog(props){
return (
    
    <div>
    <FancyBorder>
        <h1 className="Dialog-title">{props.title}</h1>
        <p>{props.content}</p>
    </FancyBorder>
</div>
)
}