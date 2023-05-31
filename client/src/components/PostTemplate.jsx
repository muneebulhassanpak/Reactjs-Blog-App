import React from "react";
import { useDispatch } from "react-redux";
import { increaseLike } from "../store/store";
const PostTemplate = (props) => {
  const dispatch = useDispatch();
  const userid = localStorage.getItem("userID");
  const increaseByOne = () => {
    dispatch(increaseLike(userid, props.id));
  };
  const text = props.description.substring(0, 100);
  return (
    <div className="w-80 shadow-lg">
      <div className="relative w-full h-52">
        <img
          src={props.imgUrl}
          alt="Couldn't load"
          className="w-full h-full object-cover"
        />
        <div className="absolute py-1 px-2 top-2 right-2 rounded-full bg-morange text-white">
          {props.duration} minutes
        </div>
      </div>
      <h2 className="text-xl font-medium text-center my-1">{props.title}</h2>
      <p className="px-2 pb-2 text-justify">{text}...</p>
      <button className="p-2 hover:cursor-pointer" onClick={increaseByOne}>
        ❤{props.likes}
      </button>
    </div>
  );
};

export default PostTemplate;
