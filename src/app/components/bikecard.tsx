import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { StaticImageData } from "next/image";
interface BikeCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;

  imageFirst: boolean;
}
const BikeCard: React.FC<BikeCardProps> = ({
  image,
  title,
  description,
  imageFirst,
}) => {
  return (
    <div className="  p-6 rounded-lg flex md:flex-row flex-col items-start md:items-center justify-between">
      {imageFirst ? (
        <>
          <div className="md:w-[85%] w-full ">
            <Image
              priority={true}
              quality={100}
              src={image}
              alt="StreetRider"
              className="w-full object-contain"
            />
          </div>

          <div className="md:w-1/2 w-full ">
            <h3 className="text-3xl font-semibold mb-2 text-[#ECEEEC]">
              {title}
            </h3>
            <p className="text-[#AFB5AD] text-xl  w-full md:max-w-md">
              {description}
            </p>
            <Button className="bg-[#56468B] mt-3 text-base lg:text-lg font-medium hover:bg-purple-500 w-full md:w-[140px]  text-white py-2 px-6 rounded-md">
              Buy Now
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 w-full md:order-1  order-2">
            <h3 className="text-3xl font-semibold mb-2 text-[#ECEEEC]">
              {title}
            </h3>
            <p className="text-[#AFB5AD] text-xl  w-full md:max-w-md">
              {description}
            </p>
            <Button className="bg-[#56468B] mt-3 text-base lg:text-lg font-medium hover:bg-purple-500 w-full md:w-[140px]  text-white py-2 px-6 rounded-md">
              Buy Now
            </Button>
          </div>

          <div className="md:w-[85%] w-full md:order-2 order-1 ">
            <Image
              priority={true}
              quality={100}
              src={image}
              alt="StreetRider"
              className="w-full object-contain"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BikeCard;
