import React from "react";

const PhotoCollectionCard = (props) => {
  const openImage = () => {
    props.setCurrentIndex(props.index);
    props.openViewer();
  };

  return (
    <div className="w-full h-36 md:h-48 rounded-md overflow-hidden" onClick={openImage}>
      <img
        src={props.image}
        alt="photo"
        className="w-full h-full rounded-md transform transition duration-700 ease-in-out hover:scale-110 brightness-75 hover:brightness-100"
      />
    </div>
  );
};

export default PhotoCollectionCard;
