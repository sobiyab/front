import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img="https://m.media-amazon.com/images/I/61wITScmQWL._UY879_.jpg"
            productName="Maxi Wear"
            price="44.00"
            color="Black"
            badge={true}
            des="I LOVE this dress!!! I honestly wasn’t expecting much for the price, but I’m actually ordering more colors."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img="https://romans-cdn.rlab.net/images/original/7699da69-bbd7-4dc7-a188-5fa89d150e8f.jpg"
            productName="Hamred Dress"
            price="250.00"
            color="Black"
            badge={true}
            des="I LOVE this dress!!! I honestly wasn’t expecting much for the price, but I’m actually ordering more colors."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img="https://cdna.lystit.com/photos/asos/e2b5c4dd/asos-Multi-Pinafore-Dress-In-Floral-Print.jpeg"
            productName="pinafore Dress"
            price="80.00"
            color="Mixed"
            badge={true}
            des="I LOVE this dress!!! I honestly wasn’t expecting much for the price, but I’m actually ordering more colors."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img="https://tse2.mm.bing.net/th?id=OIP.Azqs9bZIFqQHO1F4zBYOvQHaKM&pid=Api&P=0&h=180"
            productName="PrincessSeam Dress"
            price="60.00"
            color="Mixed"
            badge={false}
            des="I LOVE this dress!!! I honestly wasn’t expecting much for the price, but I’m actually ordering more colors."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img="https://cdnc.lystit.com/photos/2013/04/23/asos-collection-orange-asos-wrap-dress-with-blouson-sleeve-lace-back-product-2-8108733-436902003.jpeg"
            productName="Blouson Dress"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
