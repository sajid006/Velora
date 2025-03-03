import React from "react";
import { Footer, Navbar } from "../../components";
import ProductInfo from "../../components/ProductInfo";

export default function Page() {
  return (
    <div>
      <Navbar />
      <ProductInfo/>
      <Footer />
    </div>
  );
}
