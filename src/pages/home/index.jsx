import React from "react";
import {
  Navbar,
  SearchProducts,
  ShortCategories,
  Products,
  Stats,
  Testimonial,
  Blogs,
  Subscribe,
  Footer,
} from "../../components";

export default function Page() {
  return (
    <div>
      <Navbar />
      <SearchProducts />
      <ShortCategories />
      <Products />
      <Stats />
      <Testimonial />
      <Blogs />
      <Subscribe />
      <Footer />
    </div>
  );
}
