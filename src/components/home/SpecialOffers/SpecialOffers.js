import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img="https://sp.yimg.com/ib/th?id=OPA.Ob%2fmCh1BjCGBWg474C474&o=5&pid=21.1&w=&h="
          productName="MaxiWear"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="A shapeless tentlike full dress,  that hangs loosely from the shoulders; it has a baggy silhouette and is usually worn short. The airy billowy dress is a favorite as a summer wear.

          ."
        />
        <Product
          _id="1102"
          img="https://xcdn.next.co.uk/common/items/default/default/publications/g86/shotzoom/59/361-286s.jpg"
          productName="Pinafore Dress"
          price="180.00"
          color="Gray"
          badge={true}
          des="This is a type of dress with a shaped top portion of the bodice which is separate from the bodice. The yoked dress can have a front yoke or back yoke or both

          ."
        />
        <Product
          _id="1103"
          img="https://cdn.shopify.com/s/files/1/2102/5691/products/TB2thn3mWQoBKNjSZJnXXaw9VXa__1676068855_1024x1024@2x.jpg?v=1615537813"
          productName="princessSesameDress"
          price="25.00"
          color="Mixed"
          badge={true}
          des="This is a type of dress with a shaped top portion of the bodice which is separate from the bodice. The yoked dress can have a front yoke or back yoke or both

          ."
        />
        <Product
          _id="1104"
          img="https://images.femmeconnection.com.au/products/morocco-floral-maxi-dress-d731298-aqua-103--v1-original.jpg"
          productName="Maxi Wear"
          price="220.00"
          color="Black"
          badge={true}
          des="This is a  high waist dress that has a fitting bodice till just under the bust and then a flowy silhouette

          ."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
