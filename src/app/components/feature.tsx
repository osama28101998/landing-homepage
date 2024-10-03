import React from "react";
import BikeCard from "./bikecard";
import streetrider from "../assets/images/streetrider.png";
import thunderbolt from "../assets/images/thunderbolt.png";
import trailblazer from "../assets/images/trailblazer.png";

const bikes = [
  {
    id: 1,
    title: "StreetRider",
    image: streetrider,
    imagefirst: true,
    description:
      "Embrace the perfect blend of style and performance. Conquer every journey with ease.",
  },
  {
    id: 1,
    title: "ThunderBolt",
    image: thunderbolt,
    imagefirst: false,
    description:
      "Unleash the power within. Dominate the streets with unmatched agility and design.",
  },
  {
    id: 1,
    title: "TrailBlazer",
    image: trailblazer,
    imagefirst: true,
    description:
      "Elevate your riding experience. Precision engineering meets unparalleled comfort and control.",
  },
];

const Feature = () => {
  return (
    <section className=" md:px-14 px-5  py-6 mt-16 ">
      <div className="">
        <div className="text-center space-y-3 ">
          <h1 className="text-[#7D66D9] text-sm md:text-base font-semibold ">
            Main feature
          </h1>
          <h2 className="text-[#ECEEEC] text-[22px] md:text-[48px] leading-[48px]">
            Discover The Perfect Ride
          </h2>
          <p className="text-[#AFB5AD] text-base md:text-lg">
            Explore the key features that make our bikes stand out from the
            crowd.
          </p>
        </div>
      </div>
      {bikes.map((bike, index) => (
        <BikeCard
          key={index}
          title={bike.title}
          image={bike.image}
          description={bike.description}
          imageFirst={bike.imagefirst}
        />
      ))}
    </section>
  );
};

export default Feature;
