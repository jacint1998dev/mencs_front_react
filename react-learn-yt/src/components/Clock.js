import React, {useState, useEffect} from "react";
export default function Clock(){
    
    const [time, setTime] = useState(new Date().toString())
   

    useEffect(() => {
        console.log("Component mounted or loaded");
        const interval = setInterval(showDate, 1000);

        return () =>{
            console.log("Cleanup of  Interval")
            clearInterval(interval)
        }
    }, [time]);

    function showDate(){
        setTime(new Date().toString());
        }
    return <h1>{time}</h1>
}