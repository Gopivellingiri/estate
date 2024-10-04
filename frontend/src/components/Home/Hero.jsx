import React, { useState } from "react";
import HeroImg from "../../assets/heroimg.png";
import LayOut from "../Layout/LayOut";

const Hero = () => {
  const [selected, setSelected] = useState("buy"); // Default selected button

  const handleButtonClick = (type) => {
    setSelected(type);
  };

  return (
    <LayOut>
      <div className="flex flex-col text-center md:text-left md:flex-row sm:items-center sm:justify-between">
        <div className="md:basis-[35%] lg:basis-[35%] xl:basis-[35%]">
          <div>
            <h1 className="text-5xl text-sky-800 font-bold leading-[55px]">
              Your New <br />{" "}
              <span className="text-orange-500">Home Awaits</span>
            </h1>
            <h4 className="text-2xl font-semibold text-sky-800">
              Buy, Rent, and Move In Today
            </h4>
          </div>
          <div>
            <p className="text-lg text-sky-800 py-10 ">
              Whether you're searching for a place to call your own or a rental
              that feels like home, we've got you covered.
            </p>
          </div>
          <div>
            <div className="hidden relative sm:hidden md:flex items-center font-bold text-base">
              <button
                onClick={() => handleButtonClick("buy")}
                className={`py-5 px-8 rounded-tl-xl transition-all duration-300 ${
                  selected === "buy"
                    ? "bg-orange-500 text-[#F5F9FB]"
                    : " text-sky-800"
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => handleButtonClick("sell")}
                className={`py-5 px-8 hover:bg-orange-500 transition-all duration-300 hover:text-[#F5F9FB] ${
                  selected === "sell"
                    ? "bg-orange-500 text-[#F5F9FB]"
                    : " text-sky-800"
                }`}
              >
                Sell
              </button>
              <button
                onClick={() => handleButtonClick("rent")}
                className={`py-5 px-8 hover:bg-orange-500 transition-all duration-300 hover:text-[#F5F9FB] hover:rounded-tr-xl ${
                  selected === "rent"
                    ? "bg-orange-500 text-[#F5F9FB] rounded-tr-xl"
                    : " text-sky-800"
                }`}
              >
                Rent
              </button>
            </div>
          </div>
          <div>
            <div className="hidden sm:hidden mx-w-full md:flex md:flex-wrap lg:flex-nowrap absolute items-center px-3 py-5 space-y-2 bg-orange-500 rounded-tr-xl rounded-b-xl">
              <div className=" w-1/3 md:flex md:flex-col font-bold text-white">
                <label htmlFor="location">Location</label>
                <input
                  className=" outline-none bg-orange-500 placeholder-transparent placeholder-white opacity-60 font-semibold"
                  type="text"
                  placeholder="location.."
                  id="location"
                />
              </div>
              <div className="w-1/3 md:flex md:flex-col font-bold text-white">
                <label htmlFor="MinPrice">Min Price</label>
                <input
                  className=" outline-none bg-orange-500 placeholder-transparent placeholder-white opacity-60 font-semibold"
                  type="text"
                  placeholder="location.."
                  id="MinPrice"
                />
              </div>
              <div className="w-1/3 md:flex md:flex-col font-bold text-white">
                <label htmlFor="MaxPrice">Max Price</label>
                <input
                  className=" outline-none bg-orange-500 placeholder-transparent placeholder-white opacity-60 font-semibold"
                  type="text"
                  placeholder="location.."
                  id="MaxPrice"
                />
              </div>
              <div>
                <button className="py-2 px-4 bg-white text-orange-500 font-bold rounded-lg">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:basis-[65%] lg:basis-[65%] xl:basis-[65%]">
          <img className="w-full" src={HeroImg} alt="Hero" />
        </div>
      </div>
    </LayOut>
  );
};

export default Hero;
