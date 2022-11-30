import React, { useState, useEffect } from "react";
import MenuCollection from "./MenuCollection";

// redux
import { useSelector } from "react-redux";

const Menu = () => {
  const [menuImages, setMenuImages] = useState([]);
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
      setMenuImages(images);
    }
  }, [reduxState]);

  return (
    <>
      <h3 className="text-xl font-medium mb-4">{name} Menu</h3>
      <MenuCollection
        menuTitle="Menu"
        pages={menuImages.length}
        images={menuImages}
      />
    </>
  );
};

export default Menu;
