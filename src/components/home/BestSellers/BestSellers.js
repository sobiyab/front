import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img="https://i5.walmartimages.com/asr/29c1f888-a5f2-4f5d-a64c-09ae26a1a553.364c8392be2409dc77a8208d0873eb0f.jpeg"
          productName="MaxiWear"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1012"
          img="https://img.huffingtonpost.com/asset/5b8ec7ec190000b6065035dc.jpeg?ops=scalefit_960_noupscale"
          productName="Pinafore Dress"
          price="180.00"
          color="Gray"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1013"
          img="http://2.bp.blogspot.com/-8_ji4ISP-QE/T3PgUXMNC0I/AAAAAAAAAEQ/eZFlOIT6UVY/s1600/Satin+and+Tulle+One-Shoulder+A-Line+Short+Cocktail+Dress.jpg"
          productName="Mermaid Dress"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1014"
          img="https://sp.yimg.com/ib/th?id=OPA.rpF570LQy3M88Q474C474&o=5&pid=21.1&w=&h="
          productName="Cocktail Dress"
          price="220.00"
          color="Black"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default BestSellers;
