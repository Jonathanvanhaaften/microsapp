import React from 'react'
import carp from '../images/carpaccio.JPG'

const card = () => {
    return (
        <div>
           
 <div className="max-w-sm rounded-xl overflowhidden shadow-lg">
        <img src={carp} alt="" className="rounded-sm w-full"/>
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

export default card;
