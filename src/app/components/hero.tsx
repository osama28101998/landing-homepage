import React from "react";
import Heroimg from "../assets/images/hero-bike-image.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <section className=" text-white py-10 lg:py-16">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl lg:text-[48px] leading-tight font-bold text-[#ECEEEC] text-center">
          Ride with passion <br /> Ride with us
        </h1>

        <p className="text-[#ECEEEC] px-5 text-base sm:text-lg lg:text-xl mt-4 text-center">
          Experience the thrill of the open road with our premium selection of
          bikes.
        </p>

        <Button className="bg-[#56468B] text-base lg:text-lg font-medium hover:bg-purple-500 text-white py-3 px-8 mt-6 rounded-md">
          Buy Now
        </Button>

        <div className="relative mt-8 w-full max-w-3xl lg:max-w-5xl">
          <div className="absolute inset-x-0 mx-auto w-[270px] h-[100px] sm:w-[600px] sm:h-[180px] lg:w-[700px] lg:h-[150px] top-[50px] lg:top-[100px] bg-[#E2DDFE] shadow-[inset_0px_3.35593px_3.35593px_rgba(0,0,0,0.25)] blur-[70px] lg:blur-[100px] rounded-full z-0"></div>

          <Image
            src={Heroimg}
            alt="Bike"
            width={875.88}
            height={503.84}
            className="relative z-10 w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
