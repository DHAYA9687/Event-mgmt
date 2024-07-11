import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/Images/1.jpeg";
import Header from "./Header";
const clubs = [
  {
    id: 1,
    link: "/devs",
    icon: "https://media.licdn.com/dms/image/C4D0BAQE8MA5SwG9-tQ/company-logo_200_200/0/1663574766757?e=2147483647&v=beta&t=obgHNzjJNESh8vx6DvCtl1F6hV083zq40e_8_-db_rs",
    name: "DEVS",
    no: 2,
  },
  {
    id: 2,
    link: "/gdsc",
    icon: "https://miro.medium.com/v2/resize:fit:1400/0*YntK59UKWOld4BHr",
    name: "GDSC",
    no: 5,
  },
  {
    id: 3,
    link: "/uipath",
    icon: "https://logowik.com/content/uploads/images/ui-path7967.jpg",
    name: "UI PATH",
    no: 2,
  },
  {
    id: 4,
    link: "/ieee",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFQbYPYd8q_FBK--saQQJ4IyxkJ4ywcDwHsSeN-NGJw&s",
    name: "IEEE",
    no: 2,
  },
  {
    id: 9,
    link: "/elite",
    icon: img1,
    name: "ELITE",
    no: 7,
  },
  {
    id: 6,
    link: "/yuva",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HyVKlYYHozDMBMjq9G9NHLGYSYckcs8ZzEJ_eon1mg&s",
    name: "YUVA",
    no: 2,
  },
  {
    id: 7,
    link: "/leo",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyTClplcTHPwnoM52zRkTXsWxhUGiXSkRhtmWfqUKAeA&s",
    name: "LEO",
    no: 2,
  },
  {
    id: 8,
    link: "/others",
    icon: "https://thumbs.dreamstime.com/b/events-icon-calendar-icon-white-background-events-icon-calendar-icon-simple-vector-icon-122490266.jpg",
    name: "OTHERS",
    no: 1,
  },
];

const ExploreEvent = () => {
  // const num = 5;
  return (
    <div className="text-white">
      {/* <div className=" m-2 ">
        <h1 className="text-white text-4xl font-impact ml-3 p-5">DHENT</h1>
      </div> */}
      <Header />
      <div className=" px-28 md:px-48">
        <h1 className="text-6xl font-impact pb-12">EXPLORE EVENTS</h1>
        <h1 className="text-4xl font-impact pt-4">THIS WEEK</h1>
      </div>
      {/*grid columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 z-10 md:grid-cols-4  pt-10  px-5 md:w-4/5 w-full mx-auto bg-transparent">
        {clubs.map((club) => (
          <Link key={club.id} to={club.link}>
            <div className="flex p-3 gap-3 transform transition-transform duration-200 ease-out hover:scale-110 hover:ease-in-out">
              <div className="flex justify-center items-center bg-white w-[100px] h-[100px] rounded-full">
                <img className="w-[60px]" src={club.icon} alt="" />
              </div>
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-2xl font-bold">{club.name}</h1>
                <h3 className="text-lg text-gray-400">{club.no} Events</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="fixed bottom-0 right-0 -z-50 ">
        <img
          className=" hidden md:block w-[450px]"
          src="../../src/assets/Images/circle.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ExploreEvent;
