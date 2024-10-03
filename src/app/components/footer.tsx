import React from "react";
import footerimg from "../assets/images/bliss-footer-img.png";
import Image from "next/image";
import Facebook from "../assets/svg/Facebook.svg";
import instagram from "../assets/svg/Instagram.svg";
import linkedln from "../assets/svg/LinkedIn.svg";
import x from "../assets/svg/X.svg";

const list = [
  { name: "facebook", icon: Facebook },
  { name: "instagram", icon: instagram },
  { name: "X", icon: x },
  { name: "linkedln", icon: linkedln },
];

const links = [
  { link: "Features", href: "#" },
  { link: "Testimonials", href: "#" },
  { link: "Faqs", href: "#" },
];
const legalLinks = [
  { link: "Privacy Policy", href: "#" },
  { link: "Terms of Service", href: "#" },
  { link: "Cookies Settings", href: "#" },
];
const Footer = () => {
  return (
    <footer className="bg-[#14121F] text-white md:px-14 px-5 py-4 md:py-14">
      <div className="container mx-auto flex flex-col items-start sm:items-center justify-between md:flex-row">
        <div className="flex items-center space-x-2">
          <Image src={footerimg} alt="Bike Bliss" width={59.06} height={32} />
          <span className="text-base font-medium text-[#E2DDFE]">
            Bike Bliss
          </span>
        </div>

        <ul className="flex space-x-8 mt-4 md:mt-0">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className=" text-[#ECEEEC] text-base hover:text-slate-600"
              >
                {link.link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex space-x-6 mt-4 md:mt-0">
          {list.map((data, index) => (
            <a key={index} href="#" target="_blank">
              <Image src={data.icon} alt={data.name} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-b border-[#282A27] my-8" />

      <div className="container mx-auto mt-5 flex justify-center space-x-8">
        {legalLinks.map((data, index) => (
          <a
            key={index}
            href={data.href}
            className="text-[#AFB5AD] text-sm hover:text-gray-200"
          >
            {data.link}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
