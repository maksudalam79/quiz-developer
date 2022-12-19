import React, { useState } from "react";
import { toast } from "react-toastify";
import { EyeIcon } from "@heroicons/react/24/solid";

const Quiz = ({ qsn }) => {
  console.log(qsn);
  const [value, setValue] = useState("");
  const { question, options, correctAnswer } = qsn;
  const answer = correctAnswer.replaceAll(" ", "");
  console.log(answer);
  const ans = (innerText) => {
    const text = innerText.replaceAll(" ", "");
    console.log(text);
    if (answer === text) {
      console.log("right");
      toast.success("congratulations you choose the correct answer", {
        autoClose: 500,
      });
    } else {
      console.log("wrong");
      toast.warning("opsss!!!you choose the wrong answer", { autoClose: 500 });
    }
  };
  const eye = (correctAnswer) => {
    setValue(correctAnswer);
  };

  return (
    <div className="m-4">
      <div className="mockup-window border bg-base-300">
        <div className="flex justify-center px-4 py-16 bg-base-200">
          <div>
            <div className="flex justify-between">
              <h2 className="text-2xl">{question}</h2>
              <EyeIcon
                onClick={() => eye(correctAnswer)}
                className="h-6 w-6 text-blue-500 cursor-pointer mt-2"
              />
              <p>{value}</p>
            </div>
            <div className="m-4 p-4 gap-3">
              <p
                className="cursor-pointer"
                onClick={(e) => ans(e.target.innerText)}
              >{options[0]}
              </p>
              <p
                className="cursor-pointer"
                onClick={(e) => ans(e.target.innerText)}
              >
                {options[1]}
              </p>
              <p
                className="cursor-pointer"
                onClick={(e) => ans(e.target.innerText)}
              >
                {options[2]}
              </p>
              <p
                className="cursor-pointer"
                onClick={(e) => ans(e.target.innerText)}
              >
                {options[3]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
