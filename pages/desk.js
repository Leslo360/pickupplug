import Image from "next/image";
import React, { useState } from "react";
import { IoIosRocket } from "react-icons/io";

function Desk() {
  const [over21, setOver21] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const validateAge = () => {
    setTimeout(() => {
      setOver21(true);
    }, 800);
  };
  const invalidateAge = () => {
    setTimeout(() => {
      setInvalid(true);
    }, 800);
  };

  return (
    <div className="flex flex-col items-center">
      <Image alt="logo" width={200} height={200} src="/2.svg" />
      {!over21 ||
        (!invalid && (
          <div className="flex flex-col items-center mt-32">
            <h2>Welcome</h2>
            <p className="text-sm w-2/4 text-center">Are you 21 or older?</p>
            <div className="flex">
              <button
                onClick={() => invalidateAge()}
                className="p-2 bg-none focus:animate-ping border-white border text-white m-3 text-sm flex items-center justify-between"
              >
                {/* <IoIosRocket color="white" className="mr-3 " size="20px" /> */}
                Not yet
              </button>
              <button
                onClick={() => validateAge()}
                className="p-2 bg-none transition ease-linear focus:bg-white focus:text-black border-white border text-white m-3 text-sm flex items-center justify-between"
              >
                {/* <IoIosRocket color="white" className="mr-3 " size="20px" /> */}
                Yup!
              </button>
            </div>
          </div>
        ))}
      {over21 && (
        <div className="flex flex-col items-center mt-32">
          <h2>Thought you were off the hook?</h2>
          <p className="text-sm w-2/4 text-center">
            Please provide your birth date:
          </p>
        </div>
      )}
      {invalid && (
        <div className="flex flex-col items-center mt-32">
          <h2 className="text-sm w-2/4 text-center">
            Unfortunately these baked goodies are not for kiddies
          </h2>
        </div>
      )}
    </div>
  );
}

export default Desk;
