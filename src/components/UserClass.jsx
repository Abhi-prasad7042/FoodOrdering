import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)

        this.state=
            {
                count:0
            }

        console.log(this.state.count)
    }

    componentDidMount(){
        this.setState({
            count:2
        })

        console.log(this.state.count)
    }
    render(){
        const {name} = this.props
        return (
            <div>
                <h1>Name:- {name}</h1>
                <h2>Software Engineer</h2>
                <h4>Count: {this.state.count}</h4>
            </div>
        )
    }
}

export default UserClass;