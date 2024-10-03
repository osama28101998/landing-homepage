import { Button } from "@/components/ui/button";
import React from "react";
const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-600 py-16 flex flex-col items-center justify-center text-center">
      <h2 className="text-[#ECEEEC] px-3 md:px-0 max-w-3xl text-xl md:text-4xl font-bold mb-6">
        Explore our collection and find the perfect bike for you.
      </h2>
      <Button className="bg-[#56468B] md:text-base text-sm font-medium hover:bg-indigo-700 text-white  py-3 px-6 rounded-lg">
        Get Started
      </Button>
    </section>
  );
};

export default CallToAction;
