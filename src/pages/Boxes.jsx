import React, { useState } from 'react';

const Boxes = () => {
   // The corresponding numbers for each text box
   const numbers = [128, 64, 32, 16, 8, 4, 2, 1];

   // State to keep track of the values entered, initialized to '0'
   const [values, setValues] = useState(Array(numbers.length).fill('0'));

   // Function to handle box click
   const handleBoxClick = (index) => {
      // Update the values array by toggling between '0' and '1'
      const newValues = values.map((value, idx) =>
         idx === index ? (value === '1' ? '0' : '1') : value
      );
      setValues(newValues);
   };

   // Calculate the sum of the values
   const calculateSum = () =>
      values.reduce((acc, value, index) => acc + (value === '1' ? numbers[index] : 0), 0);

   // Render the component
   return (
      <div className="flex flex-col items-center p-5">
         <div className="flex justify-center w-screen gap-3  lg:gap-3 mb-3">
            {/* Labels above the text fields */}
            {numbers.map((number, index) => (
               <div key={`label-${index}`} className="lg:w-14 w-10 text-center lg:text-lg">
                  {number}
               </div>
            ))}
         </div>
         <div className="flex justify-center gap-3">
            {/* Boxes for binary input */}
            {values.map((value, index) => (
               <div
                  key={`box-${index}`}
                  className={`lg:w-14 lg:h-14 w-10 h-10 flex justify-center items-center text-xl cursor-pointer ${value === '1' ? 'bg-green-500' : 'bg-gray-400'}`}
                  onClick={() => handleBoxClick(index)}
               >
                  {value}
               </div>
            ))}
            {/* Display the sum */}

         </div>
         <div className="mt-4 w-32 h-14 FlexCenter text-xl">
            {calculateSum()}
         </div>
      </div>
   );
};

export default Boxes;
