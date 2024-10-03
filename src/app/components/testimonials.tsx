import React from "react";
import avatar from "../assets/images/avatar.png";
import Image from "next/image";
const Testimonials = () => {
  return (
    <section className=" text-[#ECEEEC] p-8 mt-10 rounded-lg flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 mb-4">
        <Image
          src={avatar}
          alt="John S."
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <div className="mb-4">
        <h3 className="md:text-xl text-base  font-bold">John S.</h3>
        <p className="text-[#767D74] text-base md:text-lg font-normal">
          Position, Company name
        </p>
      </div>

      <blockquote className=" md:text-3xl text-xl font-semibold  max-w-5xl mx-auto">
        <p>
          "Absolutely love my ThunderBolt! Smooth ride, sleek design, and
          unbeatable performance."
        </p>
      </blockquote>

      <p className="mt-4 text-xl  md:text-3xl font-semibold ">- John S.</p>
    </section>
  );
};

export default Testimonials;
