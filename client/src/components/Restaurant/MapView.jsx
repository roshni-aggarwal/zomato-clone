import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MdContentCopy } from "react-icons/md";
import { FaDirections } from "react-icons/fa";

// redux
import { useSelector } from "react-redux";

const MapView = (props) => {
  // console.log(props.center);
  // console.log(props.mapLocation);

  // const [position, setPosition] = useState();

  // const reduxState = useSelector(
  //   (globalState) =>
  //     globalState.restaurant.selectedRestaurant.restaurant
  // );

  // // console.log(reduxState);

  // // const position = reduxState.mapLocation;
  // // console.log(position);

  // useEffect(() => {
  //   if (reduxState) {
  //     setPosition(reduxState);
  //     console.log(position);
  //   }
  // }, [reduxState]);

  // console.log(position);
  const position1 = [28.6581637791, 77.193508409];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl tracking-wide">Call</h2>
        <p className="text-zomato-200 font-light">{props.phoneNumber}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl tracking-wide">Direction</h2>
        <div className="w-full h-52">
          <MapContainer
            center={position1}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position1}>
              <Popup>{props.title}</Popup>
            </Marker>
          </MapContainer>
        </div>
        <p className="text-lg font-light">{props.address}</p>
      </div>
      <div className="flex md:flex-col lg:flex-row items-center md:items-stretch lg:items-center gap-2">
        <button className="flex items-center md:justify-center gap-2 p-2 border border-gray-400 font-light rounded-lg text-gray-700 hover:bg-gray-50">
          <MdContentCopy size={18} /> Copy
        </button>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${props.mapLocation}`}
          target={"_blank"}
          className="flex items-center gap-2 p-2 border border-gray-400 font-light rounded-lg text-gray-700 md:justify-center hover:bg-gray-50"
        >
          <span className="text-zomato-400">
            <FaDirections size={18} />
          </span>{" "}
          Direction
        </a>
      </div>
    </div>
  );
};

export default MapView;
