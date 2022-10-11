import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const Qsn = () => {
    const topic=useLoaderData()
    const topicQsn=topic.data.questions
    return (
        <div>
            {
              topicQsn.map(qsn=><Quiz
              key={qsn.id}
              qsn={qsn}
              ></Quiz>)  
            }
        </div>
    );
};

export default Qsn;