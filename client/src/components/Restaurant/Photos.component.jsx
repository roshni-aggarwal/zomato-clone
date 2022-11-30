import React, { useState, useEffect } from "react";
import ImageViewer from "react-simple-image-viewer";

// components
import PhotoCollectionCard from "./PhotoCollectionCard";

// redux
import { useSelector } from "react-redux";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [name, setName] = useState();

  const restaurant = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  const reduxState = useSelector((globalState) => globalState.image.images);

  useEffect(() => {
    if (restaurant) setName(restaurant.name);
  }, [restaurant]);

  useEffect(() => {
    if (reduxState) {
      const images = [];
      reduxState.map(({ location }) => images.push(location));
      setPhotos(images);
    }
  }, [reduxState]);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = () => {
    setIsOpen(true);
  };

  const closeViewer = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentIndex}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}
      <h2 className="text-xl font-medium">{name} Photos</h2>
      <div className="my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {photos.map((photo, index) => (
          <PhotoCollectionCard
            key={index}
            image={photo}
            openViewer={openViewer}
            index={index}
            setCurrentIndex={setCurrentIndex}
          />
        ))}
      </div>
    </>
  );
};

export default Photos;
