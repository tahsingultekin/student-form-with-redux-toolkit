import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsFlag } from "react-icons/bs";
import { LuGraduationCap } from "react-icons/lu";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="manage-side h-screen w-3/12 bg-[#F2EAE1] flex flex-col justify-around items-center tracking-wider">
      <h1 className="flex justify-center items-center text-xl font-semibold">
        <span className="bg-[#F9C930] w-2 h-8 block mr-2"></span>MANAGE COURSES
      </h1>
      <div className="user-profile flex flex-col items-center">
        <img
          src="https://www.kacyasinda.com/wp-content/uploads/2019/02/steve-jobs.jpg.webp"
          className="rounded-full w-36 h-36 mb-5"
        />
        <h3 className="font-semibold text-lg mb-1">Steve Jobs</h3>
        <p className="text-[#F9C554] font-semibold">Admin</p>
      </div>
      <div className="tabs  w-48 flex flex-col  space-y-5 text-md">
        <div className="tab ">
          <AiOutlineHome className=" text-2xl w-9" />
          <button className="w-20">
            {" "}
            <Link to="/home">Home</Link>
          </button>
        </div>
        <div className="tab ">
          <BsFlag className=" text-2xl w-9 opacity-30" />
          <button className="w-20 opacity-30">Course</button>
        </div>
        <div className="tab">
          <LuGraduationCap className=" text-2xl w-9" />
          <button onClick={() => navigate("/students")} className=" w-20">
            Students
          </button>
        </div>
        <div className="tab ">
          <RiMoneyDollarBoxLine className=" text-2xl w-9 opacity-30" />
          <button className="w-20 opacity-30">Payments</button>
        </div>
        <div className="tab ">
          <HiOutlineDocumentReport className=" text-2xl w-9 opacity-30" />
          <button className="w-20 opacity-30">Report</button>
        </div>
        <div className="tab ">
          <AiOutlineSetting className=" text-2xl w-9 opacity-30" />
          <button className="w-20 opacity-30">Settings</button>
        </div>
      </div>
      <div
        className="logout flex justify-center items-center font-light space-x-5 text-md cursor-pointer"
        onClick={() => navigate("/")}
      >
        <p>Logout</p>
        <FiLogOut className="text-xl" />
      </div>
    </div>
  );
};
export default SideBar;
