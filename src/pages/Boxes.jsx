import React, { useState } from 'react';

const Boxes = () => {
   // The corresponding numbers for each text box
   const numbers = [128, 64, 32, 16, 8, 4, 2, 1];

   // State to keep track of the values entered
   const [values, setValues] = useState(Array(numbers.length).fill(''));

   // Function to handle input change
   const handleChange = (index) => (e) => {
      const newVal = e.target.value.slice(-1); // Get the last character
      const onlyNums = newVal === '1' || newVal === '0' ? newVal : ''; // Only allow '1' or '0'

      // Update the values array
      const newValues = [...values];
      newValues[index] = onlyNums;
      setValues(newValues);
   };

   // Calculate the sum of the values
   const calculateSum = () =>
      values.reduce((acc, value, index) => acc + (value === '1' ? numbers[index] : 0), 0);

   // Render the component
   return (
      <div className="flex flex-col items-center p-5">
         <div className="flex justify-center ml-1 gap-3 mb-3">
            {/* Labels above the text fields */}
            {numbers.map((number, index) => (
               <div key={`label-${index}`} className="w-14 text-center text-lg">
                  {number}
               </div>
            ))}
         </div>
         <div className="flex justify-center gap-3">
            {/* Text fields for binary input */}
            {values.map((value, index) => (
               <input
                  key={`input-${index}`}
                  type="text"
                  maxLength="1"
                  className={`w-14  h-14 text-center text-xl ${value === '1' ? 'bg-green-500' : 'bg-gray-400'}`}
                  value={value}
                  onChange={handleChange(index)}
               />
            ))}
            {/* Display the sum */}
            <div className="w-32 h-14 -mr-36 flex justify-center items-center text-xl">
               {calculateSum()}
            </div>
         </div>
      </div>
   );
};

export default Boxes;
