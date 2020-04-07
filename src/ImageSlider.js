import React, { Component } from "react"


export default class ImageSlider extends Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        if (this.state.currentSlideIndex === 0) {
            return (
                <div>
                    I am on slide {this.state.currentSlideIndex}
                </div>
            )
        }
    
    }
}
