import React from "react";
import { BiSkipPreviousCircle } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";

const TopBar = () => {
  return (
    <div className="icons flex justify-between items-center mt-5 mb-7 px-14 w-full">
      <BiSkipPreviousCircle className=" text-slate-400 text-xl" />
      <AiOutlineBell className=" text-slate-400 text-xl" />
    </div>
  );
};

export default TopBar;
