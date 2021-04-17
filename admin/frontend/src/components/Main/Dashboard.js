import React, { Fragment } from 'react';
import hero from '../images/hero.JPG'

export default function Dashboard() {
    return (
        <Fragment>
            <img className="h-auto, w-screen"src={hero} alt="skyline"></img>
            <div>
                <h1>You Adventures are here</h1>
                <p>let us take you to the moutians throw the valleys and peaks of the great devide. Follow our guides into the wilds of Canada's peaks</p>
            </div>
        </Fragment>

    )
}
