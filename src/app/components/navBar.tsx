import React from "react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <>
      <nav className="bg-[#14121F]   text-white md:px-14 px-5 py-4 md:py-6 ">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="cursor-pointer font-medium text-base">Bike Bliss</h1>

          <ul className="md:flex hidden text-[#ECEEEC] font-medium text-base   space-x-8">
            <li>
              <a href="#features" className="hover:text-gray-400">
                Features
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-gray-400">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-gray-400">
                Faqs
              </a>
            </li>
          </ul>

          <Button className="bg-[#56468B] hover:bg-purple-500 text-[#E2DDFE] font-medium text-base py-2 px-6 rounded-md">
            Contact
          </Button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
