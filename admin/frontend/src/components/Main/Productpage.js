import React, { Component, Fragment } from 'react'
import Card from './Card'

export default class Productpage extends Component {
    render() {
        return (
            <Fragment>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-3 gap-4">
                            {images.map(image=>(<Card />))}
                        </div>
                    </div>
               </Fragment>
        )
    }
}


