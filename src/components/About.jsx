import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{
    render(){
        return(
            <div>
                <h1 className="text-3xl font-bold underline">about</h1>
                <UserClass name={"Shubham"}/>
            </div>
        )

    }
}

export default About;