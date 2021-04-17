import React, { Component, Fragment } from 'react'
import img from '../images/logo.png'


export class Nav extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <nav className="flex justify-between bg-gray-900 text-white max-h-10">

                        <div>
                            <img className="h-auto w-auto" src={img} alt="BackYardShed"></img>
                        </div>
                        {/* <div className=""> */}
                        <ul className="my-2">
                            <a href="#">
                                <span>Latest Adventures</span>
                            </a>
                        </ul>
                        <ul className="my-2">
                            <a href="#">
                                <span>About</span>
                            </a>
                        </ul>
                        <ul className="my-2">
                            <a href="#">
                                <span>Home</span>
                            </a>
                        </ul>
                        <div className="justify-end flex mx-5 my-2">
                            <ul className="mx-3">
                                <a href="#">Login</a>
                            </ul>
                            <ul>
                                <a href="#">Sign Up</a>
                            </ul>

                        </div>
                        {/* </div> */}

                    </nav>
                </div>

            </Fragment >)
    }
}

export default Nav
