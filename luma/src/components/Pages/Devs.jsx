import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Header from "../Header";
const Mappictures = {
  MARATHON:
    "https://th.bing.com/th/id/R.0efd588d998aa3ced9bd6d6b57ca9433?rik=L9YRJYhW5XPxGw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fe%2f9%2f6%2f400814.jpg&ehk=DCI%2bq3iDdTfFea831ymDNFHFywQQ4nz7c36HfI56vAA%3d&risl=&pid=ImgRaw&r=0",
  "WEB DEVELOPMENT":
    "https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg?t=st=1716139008~exp=1716142608~hmac=aa4df07d4082c3d36cd0885a00ff95c52a5d0b363709d091c0b0ac7d2779b9f1&w=1380",
  "UI/UX":
    "https://img.freepik.com/free-photo/view-smartphones-with-abstract-wallpaper-coming-out-screen_23-2151033627.jpg",
  "APP DEVELOPMENT":
    "https://img.freepik.com/free-photo/smartphone-trend-social-media-platform_1409-5016.jpg?t=st=1716143839~exp=1716147439~hmac=1bdee680c999a20e491108ae669e78ec0721d0525a8b80247acfd53a35b860dc&w=1380",
  "DSA BOOTCAMP":
    "https://img.freepik.com/free-photo/integrated-microchip-circuit-board-server-central-computer-processor-with-neon-lights_90220-1202.jpg",
  "MERN DEVELOPMENT":
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "AR/VR":
    "https://img.freepik.com/free-photo/glowing-circuit-board-complex-technology-inside-modern-computer-generated-by-ai_188544-31085.jpg",
  "ETHICAL HACKING":
    "https://img.freepik.com/free-photo/medium-shot-man-living-as-digital-nomad_23-2151205370.jpg",
  "CYBER SECURITY":
    "https://img.freepik.com/free-photo/young-adult-programmer-typing-computer-office-generated-by-ai_188544-20410.jpg",
  "DESIGN CONTEST":
    "https://img.freepik.com/free-photo/human-big-data-visualization_587448-4955.jpg?t=st=1716480396~exp=1716483996~hmac=f415cccf4f439db954bb7da30a406b578e2342dec65a8b8e6787ea28437ab506&w=1380",
  "VISION-X-ONLINE":
    "https://img.freepik.com/free-photo/young-adult-businessman-working-late-night-computer-technology-generated-by-artificial-intelligence_24640-131133.jpg?t=st=1716478303~exp=1716481903~hmac=578e05390b016d82ff296ee130005865f87e837b882b8207ba88a9672e9492f0&w=1380",
  "PROJECT KASITOO":
    "https://img.freepik.com/free-photo/metallic-robot-arm-modern-steel-factory-generated-by-ai_188544-17870.jpg",
  "SHRESTHE 2.O":
    "https://img.freepik.com/free-photo/glowing-futuristic-digital-design-network-server-generated-by-ai_188544-27277.jpg?t=st=1716481837~exp=1716485437~hmac=7b38a1f6e69d6998b5da0fb70f38a3720194923ca381d9584dbf814d3501d19d&w=1380",
  "DESIGNI'FY":
    "https://img.freepik.com/free-photo/smartphone-trend-social-media-platform_1409-5016.jpg?t=st=1716478067~exp=1716481667~hmac=b38f2f7f72e494809da6ccf1b2dbc665249a89be7c75c30a113a1e00a828ae19&w=1380",
  "BEYOND THE RESUME":
    "https://img.freepik.com/free-photo/medium-shot-man-living-as-digital-nomad_23-2151205370.jpg",
  "XPLORO 2.O":
    "https://img.freepik.com/free-photo/glowing-circuit-board-complex-technology-inside-modern-computer-generated-by-ai_188544-31085.jpg",
  "BOT-A-THON":
    "https://img.freepik.com/free-photo/futuristic-scene-with-high-tech-robot-used-construction-industry_23-2151329548.jpg",
};

function Devs() {
  const [event, setEvent] = useState([]);
  const string = "DEVS";
  useEffect(() => {
    axios
      .get(`http://localhost:5000/event/${string}`)
      .then((res) => {
        console.log(res.data.data);
        setEvent(res.data.data);
        console.log(Array.isArray(event));
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  }, []);

  return (
    <div className="text-white">
      {/* <div className=" m-2 ">
        <h1 className="text-white text-4xl font-impact ml-3 p-5">DHENT</h1>
      </div> */}
      <Header />
      <div className="">
        <div className="px-28 py-3 md:px-48">
          <h1 className="text-6xl font-impact">DEVS CLUB</h1>
        </div>
        <div className="grid grid-cols-2 z-10 md:grid-cols-4  pt-10 w-4/5 mx-auto">
          {event.map((eve) => (
            <div
              key={eve._id}
              className="main mb-8 flex flex-col w-[250px] p-5 bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 uppercase"
            >
              <img
                className="h-[140px] rounded-lg"
                src={Mappictures[eve.eventName]}
                alt={eve.eventName}
              />
              <Link to={`/delete/${eve._id}`}>
                <MdOutlineDelete className="text-red-600 text-3xl absolute bg-white rounded hover:bg-gray-200 hover:text-black e m-3 top-4 right-4" />
              </Link>
              <div className=" pt-2 px-1 bg-transparent">
                <h1 className="text-xl py-2 text-center font-bold  bg-transparent">
                  {eve.eventName}
                </h1>
                {/* <h1 className="text-md pb-1  font-semibold bg-transparent">
                  date : {eve.eventDate}
                </h1> */}

                <h1 className="text-md pb-1 font-semibold bg-transparent">
                  timing : {eve.eventTime}
                </h1>
                <h1 className="text-md pb-1 font-semibold bg-transparent">
                  venue : {eve.venue}
                </h1>
              </div>
              <div>
                <a href={eve.link} target="_blank">
                  <button className="bg-transparent hover:bg-gray-300 hover:text-black border border-white hover:border-transparent rounded-md py-1 mt-1 px-2 text-sm uppercase">
                    Register
                  </button>
                </a>
              </div>
              <div className="flex justify-end bg-transparent -mt-4">
                <div className="rounded-full w-5 h-5 bg-gradient-to-r from-amber-300 to-red-600 blur-sm"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 right-0 -z-50">
        <img
          className="w-[700px] h-[200px] "
          src="../../src/assets/Images/bubble.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Devs;
