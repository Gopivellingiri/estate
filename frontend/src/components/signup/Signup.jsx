import React from "react";
import HeroImg from "../../assets/heroimg.png";
import LayOut from "../Layout/LayOut";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <LayOut>
      <div className=" flex items-start lg:items-center justify-center lg:flex-row xl:flex-row">
        <div>
          <div className="flex flex-col items-center ">
            <h1 className="text-3xl mr-auto font-bold text-sky-800 mb-4 ">
              Register your account
            </h1>
            <input
              type="text"
              className=" mt-6 bg-white border border-[#D0DADD] outline-none py-3 px-3 w-full rounded-md"
              placeholder="Enter your name..."
            />
            <input
              type="email"
              className="mt-6 bg-white border border-[#D0DADD] outline-none py-3 px-3 w-full rounded-md"
              placeholder="Enter your email..."
            />
            <input
              type="password"
              className="mt-6 bg-white border border-[#D0DADD] outline-none py-3 px-3 w-full rounded-md"
              placeholder="Enter your password..."
            />
            <div className="flex items-center text-sky-800 space-x-5 mt-5">
              <Link
                className=" font-semibold text-md text-white rounded-full space-y-0 bg-orange-500 py-3 px-6 hover:bg-orange-600 transition-all duration-300"
                to="/home"
              >
                <span>Login</span>
              </Link>
              <div className=" text-right">
                <span className="font-medium">Don't you have an account?</span>
                <Link to="/register">
                  <span className="ml-2 font-semibold text">Sign up</span>
                </Link>
              </div>
            </div>{" "}
          </div>
        </div>
        <div>
          <img
            className="hidden md:block lg:block xl:block"
            src={HeroImg}
            alt="Hero"
          />
        </div>
      </div>
    </LayOut>
  );
};

export default Signup;
