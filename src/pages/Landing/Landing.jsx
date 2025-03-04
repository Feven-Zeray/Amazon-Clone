import React from 'react'
// import { Carousel } from 'react-responsive-carousel';
import Category from '../../Component/Category/Category';
import Product from '../../Component/Product/Product';
import LayOut from '../../Component/LayOut/LayOut';
import Carousel from "../../Component/Carousel/Carousel"

function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Category/>

      <Product/>
    </LayOut>
  );
}

export default Landing