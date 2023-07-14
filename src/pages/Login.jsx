import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setLoginControl }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  // You can use any email address and password

  return (
    <div className="bg-[#F9C930] flex justify-center items-center w-screen h-screen">
      <form
        className="flex flex-col justify-around items-center bg-[#FFFFFF]  w-[500px] h-[600px] rounded-xl"
        onSubmit={handleSubmit}
      >
        <div className="login-header flex flex-col justify-center items-center tracking-wider">
          <h1 className="text-4xl font-bold flex justify-center items-center">
            <span className="bg-[#F9C930] w-1 h-9 block mr-3"></span> MANAGE
            COURSES
          </h1>
          <h3 className="text-2xl font-semibold mt-10 mb-3">SIGN IN</h3>
          <h6 className=" font-extralight  text-sm">
            Enter your credentials to access your account
          </h6>
        </div>
        <div className="login-body flex flex-col tracking-wider">
          <div className="emailInfo flex flex-col mb-3">
            <label className="text-gray-500 text-md mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-2 border-gray-200 w-[400px] h-10 p-3 rounded-md placeholder:text-sm placeholder:opacity-60"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="passwordInfo flex flex-col">
            <label className="text-gray-500 text-md mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border-2 border-gray-200 h-10 rounded-md w-[400px] p-3 placeholder:text-sm placeholder:opacity-60"
              placeholder="Enter yor password"
              required
            />
          </div>
        </div>
        <div className="login-footer flex flex-col items-center justify-center">
          <button
            className="bg-[#FEAF00] text-[#fff] w-[400px] h-12 tracking-wider rounded-md"
            type="submit"
          >
            SIGN IN
          </button>
          <div className="mt-3">
            <span className=" opacity-30 mr-2">Forgot your password ?</span>
            <button className="text-[#FEAF00] underline">Reset Password</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
