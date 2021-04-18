import React, { Component, Fragment } from 'react'
import carp from '../images/carpaccio.JPG'
export default class Productpage extends Component {
    render() {
        return (
            <Fragment>
              <div className="flex">
                <div className="bg-indigo-400 rounded-xl shadow-md">
                    <a href="#"className="h-2 w-2 object-cover"><img src ={carp} alt="http://goo.gl/ijai22"/></a>
                
                </div>
                <div className="bg-indigo-400 rounded-xl shadow-md">
                    <a href="#"className="h-full w-25 object-cover"><img src ="not-found.png" alt="http://goo.gl/ijai22"/></a>
                </div>
                <div className="bg-indigo-400 rounded-xl shadow-md">
                    <a href="#"className="h-full w-25 object cover"><img src ="not-found.png" alt="http://goo.gl/ijai22"/></a>
                </div>
                </div>
                
               </Fragment>
        )
    }
}



// body{ 
//     margin: 0;
//     background: #666;
//     align-items: center;
//     justify-content: center;
//    height: 100vh;
//    }
