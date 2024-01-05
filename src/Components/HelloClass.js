import { Component } from "react"

class HelloClass extends Component{
    render(){
        return <h1>Hello From class-component {this.props.name}</h1>
    }
}
export default HelloClass