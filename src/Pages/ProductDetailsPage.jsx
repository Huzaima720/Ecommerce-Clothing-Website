import React from "react";
import Navbar from "../Components/Navbar";

import ProductDetails from "../Components/ProductDetails";
import ProductDesc from "../Components/ProductDesc";

import RelatedProducts from "../Components/RelatedProducts";
import Footer from "../Components/Footer";

export default function ProductDetailsPage() {
  return (
    <>
      <Navbar searchBox={true} bgColor="white" />

      <ProductDetails />
      <ProductDesc />
      <RelatedProducts heading="Similar Products" />
      <RelatedProducts heading="Customer Also Like" />
      <Footer />
    </>
  );
}
