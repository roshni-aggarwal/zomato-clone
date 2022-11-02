import React, { useState } from "react";

// components
import NutritionHeroCarousel from "./NutritionHeroCarousel";
import NutritionCarousel from "./NutritionCarousel";
import NutritionCard from "./NutritionCard";

const Nutrition = () => {
  const [nutrition, setNutrition] = useState([
    {
      bg: "red",
      image:
        "https://img.freepik.com/free-psd/protein-jar-mockup_134542-389.jpg?w=826&t=st=1665414269~exp=1665414869~hmac=3405a5db5b8bdcd599ef7aa86895479b6cf4fffcd9dcec94f8992ac8dd2477cd",
    },
    {
      bg: "red",
      image:
        "https://img.freepik.com/free-psd/protein-powder-container-mockup_47987-2908.jpg?w=900&t=st=1665413495~exp=1665414095~hmac=9da82653e0e4ded724d332cb74558c9d3776b7299324c73e68a66cb5451332fb",
    },
    {
      bg: "red",
      image:
        "https://img.freepik.com/free-psd/hand-holding-fitness-spoon-filled-with-protein-container_23-2148657547.jpg?w=996&t=st=1665413476~exp=1665414076~hmac=2475bcab0996ec7b85baf11c41d75bab56761614ad98382bcea4eb0a80499bf0",
    },
    {
      bg: "red",
      image:
        "https://img.freepik.com/premium-psd/protein-powder-supplement-packaging-with-dumbbell-mockup_7956-717.jpg?w=996",
    },
    {
      bg: "blue",
      image:
        "https://img.freepik.com/free-psd/collection-fitness-protein-powder-bags_23-2148657586.jpg?w=996&t=st=1665416816~exp=1665417416~hmac=9e6116551070010a0354905ae6400ab171c1bd0d6e01156f8319783330fa6049",
    },
  ]);

  return (
    <>
      <div className="mt-4 mb-24 lg:mb-10">
        <NutritionHeroCarousel />
        <div className="my-8">
          <NutritionCarousel />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nutrition.map((items, index) => (
            <NutritionCard key={index} {...items} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Nutrition;
