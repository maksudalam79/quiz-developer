import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Qsn = () => {
  const topic = useLoaderData();
  const topicName = topic.data;
  const topicQsn = topic.data.questions;
  return (
    <div>
      <div>
        <h1 className="text-5xl text-white">
          Welcome to {topicName.name} Quiz
        </h1>
      </div>
      <div className="mt-4">
        {topicQsn.map((qsn) => (
          <Quiz key={qsn.id} qsn={qsn}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Qsn;
