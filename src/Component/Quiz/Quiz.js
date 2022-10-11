import React from 'react';

const Quiz = ({qsn}) => {
    const {question,options}=qsn
    console.log(qsn)
    return (
        <div className='m-4'>
            <div className="mockup-window border bg-base-300">
  <div className="flex justify-center px-4 py-16 bg-base-200">
   <div>
      <div>
         <h2 className='text-2xl'>{question}</h2>
      </div>
    <div className='m-4 p-4 gap-3'>
    <button className="btn btn-primary">{options[0]}</button>
    <button className="btn btn-secondary">{options[1]}</button>
    <button className="btn btn-accent">{options[2]}</button>
    <button className="btn btn-ghost">{options[3]}</button>
    </div>
   </div>
  </div>
</div>
        </div>
    );
};

export default Quiz;