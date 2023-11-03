import React from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";

const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
        <Link to="/shop">
          <Image className="h-full w-full object-cover" imgSrc="https://sp.yimg.com/ib/th?id=OPA.itEl3VboFDHY%2bQ474C474&o=5&pid=21.1&w=&h=" />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc="https://sp.yimg.com/ib/th?id=OPA.oxoCibtcnTfIlA474C474&o=5&pid=21.1&w=&h=" />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image
              className="h-full w-full object-cover"
              imgSrc="https://sp.yimg.com/ib/th?id=OPA.BkyFxn0epQj7KQ474C474&o=5&pid=21.1&w=&h="
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
