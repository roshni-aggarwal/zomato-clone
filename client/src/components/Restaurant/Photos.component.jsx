import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

// components
import PhotoCollectionCard from "./PhotoCollectionCard";

const Photos = () => {
  const [photos, setPhotos] = useState([
    "https://b.zmtcdn.com/data/pictures/chains/1/18624001/a26ce254d26a3c73d83fa91f01d8f29c.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/1/18624001/d34cbcc796c1fc940aa0f919da4c71c9.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/1/18624001/3a65e3e2c0e69b928f063514a951a6a2.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/fde/935301ac668dfc7c7d313a13f8093fde_1652181956.jpg",
    "https://b.zmtcdn.com/data/pictures/0/19555120/5a90905be6d0467990f545e06be73643.jpeg",
  ]);

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
      <h2 className="text-xl font-medium">Photos</h2>
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
