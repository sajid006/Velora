import React from "react";
import { Navbar, Footer, ProductHeader } from "../../components";
import { Product6 } from "./components/Product6";
import { Layout242 } from "./components/Layout242";
import { Cta3 } from "./components/Cta3";

export default function Page() {
  return (
    <div>
      <Navbar />
      <ProductHeader />
      <Product6 />
      <Layout242 />
      <Cta3 />
      <Footer />
    </div>
  );
}
