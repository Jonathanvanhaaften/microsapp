import React, { Component } from 'react'

export default class cardtemp extends Component {
    render() {
        return (
            <div>
    <div className="bg-white border rounded-lg overflow-hidden ">
        <div className="p-6">
        <img></img>
        </div>
    </div>

    <div className="max-w-sm rounded overflowhidden shadow-lg">
        <img src="" alt="" className="w-full"/>
               <div className="px-6 py-4">
                   <div className="font-bold text-purple-500 text-xl mb-2">
                       Text here
                   </div>
                   <ul>
                       <li>
                           <strong>
                               Activty
                           </strong>
                           hiking
                       </li>
                       <li>
                           <strong>
                               Dining
                           </strong>
                           hiking
                       </li>
                       <li>
                           <strong>
                               Room
                           </strong>
                           hiking
                       </li>
                   </ul>
               </div>
               <div className="px-6 py-4">
                   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #tag1
                   </span>
                   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                       #tag2
                   </span>
                   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                       #tag3
                   </span>
               </div>
    </div>




            </div>
        )
    }
}

// <div className="flex">
// <div className="bg-indigo-400 rounded-xl shadow-md">
//     <a href="#"className="h-2 w-2 object-cover"><img src ={carp} alt="http://goo.gl/ijai22"/></a>

// </div>
// <div className="bg-indigo-400 rounded-xl shadow-md">
//     <a href="#"className="h-full w-25 object-cover"><img src ="not-found.png" alt="http://goo.gl/ijai22"/></a>
// </div>
// <div className="bg-indigo-400 rounded-xl shadow-md">
//     <a href="#"className="h-full w-25 object cover"><img src ="not-found.png" alt="http://goo.gl/ijai22"/></a>
// </div>
// </div>