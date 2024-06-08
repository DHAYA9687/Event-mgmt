import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    axios
      .delete(`http://localhost:5000/event/${id}`)
      .then((response) => {
        alert("Event Deleted Successfully");
        navigate("/explore");
      })
      .catch((err) => {
        alert("An error Occured. Please check Console for more details");
        console.log(err);
      });
  };
  return (
    <div className="p-4">
      <Header />
      <h1 className="text-3xl text-white font-bold text-center my-4">
        Delete Event
      </h1>
      <div className="flex flex-col items-center border-2 bg-white border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl text-black">
          Are You Sure You want to delete this Event?
        </h3>
        <button
          className="p-4 bg-red-600 hover:bg-red-700 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
