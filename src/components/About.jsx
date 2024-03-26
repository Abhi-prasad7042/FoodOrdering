import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{
    render(){
        return(
            <div>
                <h1>about</h1>
                <UserClass name={"Shubham"}/>
            </div>
        )

    }
}

export default About;