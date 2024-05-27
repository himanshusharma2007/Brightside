import React, { useState } from 'react'

 const Model = ({ heading, text}) => {
    
  const [showModal, setShowModal] = useState(true);

   if (!showModal) return null; // Only render if showModal is true

   return (
     <div className="absolute h-[88vh] bg-gray-100 w-full flex items-center justify-center z-10">
       <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm">
         <h2 className="text-2xl font-bold mb-4 text-center">{heading}</h2>
         <p className="mb-4 text-center">
          {text}
         </p>
         <div className="flex justify-center">
           <button
             className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300"
             onClick={() => setShowModal(false)}
           >
             OK
           </button>
         </div>
       </div>
     </div>
   );
 };

export default Model
