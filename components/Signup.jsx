import { Link } from "@material-ui/core";
import React from "react";
import { IoIosRocket } from "react-icons/io";
import DatePicker from "./DatePicker";

const Signup = () => {
  return (
    <div className="flex flex-col items-center mt-32">
      <h2>Thought you were off the hook?</h2>
      <div className="flex justify-center items-center">
        <p className="text-sm mr-2">Your birthday please ? </p>
        <DatePicker />
      </div>
      <Link href="desk/signup">
        <button
          className="p-2 bg-none focus:animate-ping
         border-white border text-white m-3 text-sm 
         flex items-center justify-between"
        >
          <IoIosRocket color="white" className="mr-3 " size="20px" />
          Lets Go
        </button>
      </Link>
    </div>
  );
};

export default Signup;
