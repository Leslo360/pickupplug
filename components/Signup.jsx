import { Link } from "@material-ui/core";
import React from "react";
import { IoIosRocket } from "react-icons/io";
import DatePicker from "./DatePicker";

const Signup = () => {
  return (
    <div className="flex flex-col items-center mt-32">
      <h2>Thought you were off the hook?</h2>
      <div className="flex items-center justify-center">
        <p className="mr-2 text-sm">Your birthday please ? </p>
        <DatePicker />
      </div>
      <Link href="/profile">
        <button className="flex items-center justify-between p-2 m-3 text-sm text-white border border-white bg-none focus:animate-ping">
          <IoIosRocket color="white" className="mr-3 " size="20px" />
          Lets Go
        </button>
      </Link>
    </div>
  );
};

export default Signup;
