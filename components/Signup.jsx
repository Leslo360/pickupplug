import React from "react";
import { IoIosRocket } from "react-icons/io";
import DatePicker from "./DatePicker";

const Signup = () => {
  return (
    <div className="flex flex-col items-center mt-32">
      <h2>Thought you were off the hook?</h2>
      <p className="text-sm w-2/4 text-center">
        Your birthday please?
        <DatePicker />
      </p>
     
    </div>
  );
};

export default Signup;
