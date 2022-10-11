import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid'

const Quiz = ({qsn}) => {
    const [value,setValue]=useState("")
    // console.log(qsn)
    const {question,options,correctAnswer}=qsn
    console.log(correctAnswer)
    const answer = correctAnswer.replaceAll(" ", "");
console.log(answer)
	const ans = innerText => {
		const text = innerText.replaceAll(" ", "");
        console.log(text)
		if (answer === text) {
            console.log("right")
			toast.success("success", { autoClose: 500 });
		} else {
            console.log("rong")
			toast.warning("sorry", { autoClose: 500 });
		}
	};

    const eye=(correctAnswer)=>{
        setValue(correctAnswer)
    }


    
    return (
        <div className='m-4'>
            <div className="mockup-window border bg-base-300">
  <div className="flex justify-center px-4 py-16 bg-base-200">
   <div>
      <div className='flex justify-between'>
         <h2 className='text-2xl'>{question}</h2>
         <EyeIcon onClick={()=>eye(correctAnswer)} className="h-6 w-6 text-blue-500"/>
         <p>{value}</p>
      </div>
    <div className='m-4 p-4 gap-3'>
    <p onClick={(e)=>ans(e.target.innerText)}>{options[0]}</p>
    <p onClick={(e)=>ans(e.target.innerText)} >{options[1]}</p>
    <p onClick={(e)=>ans(e.target.innerText)}>{options[2]}</p>
    <p onClick={(e)=>ans(e.target.innerText)}>{options[3]}</p>
    </div>
   </div>
  </div>
</div>
        </div>
    );
};

export default Quiz;