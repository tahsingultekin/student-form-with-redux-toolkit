import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { BsFlag } from "react-icons/bs";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import PageLayout from "../layouts/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <div className="w-full block justify-center space-x-4 px-4">
        <div className="cards mt-24 flex justify-center space-x-3">
          <div className="card-1 w-56 h-32 bg-[#F0F9FF] rounded-md relative shadow-md">
            <div className=" absolute top-2 left-4 space-y-2">
              <LuGraduationCap className="text-[#74C1ED]" size={35} />
              <p className="text-slate-400 text-sm">Students</p>
            </div>
            <p className="absolute bottom-2 right-3 text-2xl font-semibold">
              243
            </p>
          </div>

          <div className="card-2 w-56 h-32 bg-[#FEF6FB] rounded-md relative shadow-md">
            <div className=" absolute top-2 left-4 space-y-2">
              <BsFlag className="text-[#EE95C5]" size={35} />
              <p className="text-slate-400 text-sm">Course</p>
            </div>
            <p className="absolute bottom-2 right-3 text-2xl font-semibold">
              13
            </p>
          </div>

          <div className="card-3 w-56 h-32 bg-[#FEFBEC] rounded-md relative shadow-md">
            <div className=" absolute top-2 left-4 space-y-2">
              <RiMoneyDollarBoxLine className="text-[#F6C762]" size={35} />
              <p className="text-slate-400 text-sm">Payments</p>
            </div>
            <p className="absolute bottom-2 right-3 text-2xl font-semibold">
              556,000$
            </p>
          </div>

          <div className="card-4 w-56 h-32 bg-[#F0F9FF] rounded-md relative shadow-lg">
            <div className=" absolute top-2 left-4 space-y-2">
              <HiOutlineUser className="text-[#fff]" size={35} />
              <p className="text-slate-400 text-sm">Users</p>
            </div>
            <p className="absolute bottom-2 right-3 text-2xl font-semibold">
              3
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
