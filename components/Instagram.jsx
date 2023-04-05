import React from "react";
import IgImg1 from "../public/images/0.png";
import IgImg2 from "../public/images/1.png";
import IgImg3 from "../public/images/2.png";
import IgImg4 from "../public/images/3.png";
import IgImg5 from "../public/images/4.png";
import InstagramImg from "./InstagramImg";

const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Pixel Cats collection</p>
      <p className="pb-4">@pixel-cats</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg2} />
        <InstagramImg socialImg={IgImg3} />
        <InstagramImg socialImg={IgImg4} />
        <InstagramImg socialImg={IgImg5} />
      </div>
    </div>
  );
};

export default Instagram;
