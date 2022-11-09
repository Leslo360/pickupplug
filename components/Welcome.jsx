import Link from "next/link";
import React from "react";
import { IoIosRocket } from "react-icons/io";

const Welcome = () => {
  return (
    <div className="text-center mt-32">
      <h1>Congrats on making it this far </h1>
      <div className="flex flex-col items-center">
        <input placeholder="Provide a secret phrase" className="p-2" />
        <Link href="/desk">
          <span className="text-xs cursor-pointer hover:text-blue-400">
            I don`t have one.
          </span>
        </Link>
        <Link href="/desk/gas">
          <button className="p-2 bg-none focus:animate-ping border-white border text-white m-3 text-sm flex items-center justify-between">
            <IoIosRocket color="white" className="mr-3 " size="20px" />
            Take Flight
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
