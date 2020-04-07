import React, { Component } from "react"

export default class Bomb extends Component {

    constructor({ initialCount }) {
        super()
        this.state = {
            secondsLeft: initialCount
        }
    }

    render() {
        console.log(this.state.secondsLeft)
        if (this.state.secondsLeft === 0) {
           return (
                <p>Boom!</p>    
            )  
        } else {
            console.log(this.state.secondsLeft)
            return (
                <p>{ this.state.secondsLeft } seconds left before I go boom!</p>   
            )  
        }   
    }
}
