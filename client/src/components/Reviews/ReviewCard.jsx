import React, { useState, useEffect } from "react";
import { TiStar } from "react-icons/ti";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

// redux
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/Reducers/user/user.action";

const ReviewCard = (props) => {
  dayjs.extend(relativeTime);

  const [user, setUser] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(props.user)).then((data) => setUser(data.payload.user));
  }, [props]);

  return (
    <div className="flex flex-col gap-3 px-2 py-4 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10">
          <img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1665987299~exp=1665987899~hmac=f87b5a7df7fdb1e1fd337d2db949672667cb6ec9ae7ed8881e5ed5a1153ee554"
            alt="avatar"
            className="w-full h-full rounded-full object-center object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 w-3/4">
          <h3 className="text-lg tracking-wide">{user}</h3>
          <p className="text-gray-400 text-sm font-light tracking-wide">
            10 reviews • 20 Followers
          </p>
        </div>
        <button className="text-zomato-400 border border-zomato-400 px-4 py-2 font-light hover:bg-zomato-50 hover:text-zomato-600 hover:border-zomato-600 rounded transition ease-in-out duration-200">
          Follow
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <div className="bg-green-800 flex items-center text-white font-medium px-1 text-sm rounded">
            {props.rating} <TiStar />
          </div>
          <h5 className="font-light text-xs tracking-wider">
            {props.isRestaurantReview ? "DINING" : "DELIVERY"}
          </h5>
          <span className="text-gray-300 font-light text-sm">
            {dayjs(props.createdAt).fromNow()}{" "}
          </span>
        </div>
        <p className="text-gray-500 font-light text-lg tracking-wide text-justify">
          {props.reviewText}{" "}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
