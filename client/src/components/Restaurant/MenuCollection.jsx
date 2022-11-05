import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const MenuCollection = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = () => setIsViewerOpen(true);
  const closeImageViewer = () => setIsViewerOpen(false);

  return (
    <>
      {isViewerOpen && (
        <ImageViewer
          src={props.images}
          currentIndex={currentImage}
          disableScroll={true}
          onClose={closeImageViewer}
          className="z-50"
        />
      )}
      <div
        className="w-48 h-48 flex flex-col md:w-56 md:h-56"
        onClick={openImageViewer}
      >
        <div className="w-full h-full rounded-lg overflow-hidden cursor-pointer">
          <img
            src={props.images[0]}
            alt="menu"
            className="w-full h-full brightness-90 hover:brightness-100 transition duration-400 hover:scale-110 object-cover transform"
          />
        </div>
        <h4 className="text-lg text-gray-900">{props.menuTitle}</h4>
        <p className="text-sm font-light text-gray-500">{props.pages} pages</p>
      </div>
    </>
  );
};

export default MenuCollection;
