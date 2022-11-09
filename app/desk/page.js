"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Kickout from "../../components/Kickout";
import Signup from "../../components/Signup";
function Desk() {
  const [hide, setHide] = useState(false);
  const [over21, setOver21] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const validateAge = () => {
    setTimeout(() => {
      setHide(true);
      setOver21(true);
    }, 800);
  };
  const invalidateAge = () => {
    setTimeout(() => {
      setHide(true);
      setInvalid(true);
    }, 800);
  };

  return (
    <div className="flex flex-col items-center content-center justify-between">
      {!hide && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            bounce: true,
          }}
          className="flex flex-col items-center mt-32"
        >
          <h2>Welcome</h2>
          <p className="w-2/4 text-sm text-center">Are you 21 or older?</p>
          <div className="flex">
            <button
              onClick={() => invalidateAge()}
              className="flex items-center justify-between p-2 m-3 text-sm text-white border border-white bg-none focus:animate-ping"
            >
              {/* <IoIosRocket color="white" className="mr-3 " size="20px" /> */}
              Not yet
            </button>
            <button
              onClick={() => validateAge()}
              className="flex items-center justify-between p-2 m-3 text-sm text-white transition ease-linear border border-white bg-none focus:bg-white focus:text-black"
            >
              {/* <IoIosRocket color="white" className="mr-3 " size="20px" /> */}
              Yup!
            </button>
          </div>
        </motion.div>
      )}
      {over21 && <Signup />}
      {invalid && <Kickout />}
    </div>
  );
}

export default Desk;
