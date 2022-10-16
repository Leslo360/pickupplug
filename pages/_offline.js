import Image from "next/image";
import React from "react";

const _offline = () => {
  return (
    <div>
      <Image alt="Logo" width={300} height={300} src={"/logo.png"} />
      <h1>You seem to be offline</h1>
    </div>
  );
};

export default _offline;
