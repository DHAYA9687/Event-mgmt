import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Fluid from "./fluid";
const Home = () => {
  return (
    <div className="">
      <Header />
      {/* <div className="">
        <h1 className="text-3xl text-white font-bold text-center p-5">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-red-400 to-red-600 rounded-md p-2">
            DHENT
          </span>
        </h1>
      </div> */}
      <div className="absolute inset-0 z-[-1]">
        <Fluid />
      </div>
      <div className="flex justify-center items-center gap-10 min-h-80 min-w-80 mt-5">
        <div>
          <div className="mb-24">
            <div className=" ">
              <h1 className="text-8xl bg-gradient-to-t from-[#CCCCCC] to-white font-impact text-transparent bg-clip-text  m-1 md:m-2">
                FOR THE EVENTS
              </h1>
              <h1 className="text-8xl bg-gradient-to-t from-[#999999] to-[#CCCCCC] font-impact text-transparent bg-clip-text  m-1 md:m-2">
                THAT
              </h1>
            </div>
            <div className="text-8xl font-impact text-transparent  bg-gradient-to-r from-[#231FFF] to-[#FF0E0E] bg-clip-text m-1 md:m-2">
              CHANGE YOU
            </div>
          </div>

          <Link to="/create" className="">
            <button className="m-2 text-2xl font-extrabold tracking-tight bg-white p-4 rounded-md text-black hover:bg-black hover:text-white hover:outline">
              CREATE EVENTS
            </button>
          </Link>
          <Link to="/Explore" className="">
            <button className="md:my-10 text-2xl font-extrabold tracking-tight bg-white md:mx-5 mx-5 my-3 text-black  p-4 rounded-md hover:bg-black hover:text-white hover:outline">
              EXPLORE EVENTS
            </button>
          </Link>
        </div>
        <div className="">
          <img
            src=".././src/assets/Images/spiral.png"
            alt="event"
            className="w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
