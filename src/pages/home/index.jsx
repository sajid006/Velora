import React from "react";
import axios from "axios";
import { apiUrl } from "../../utils/constants";
import {
  Navbar,
  SearchProducts,
  ShortCategories,
  ProductCarousel,
  Stats,
  Testimonial,
  Blogs,
  Subscribe,
  Footer,
} from "../../components";

export default function Page() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`${apiUrl}/products`)
      .then((response) => setProducts(response.data.products));
  }, []);
  return (
    <div>
      <Navbar />
      <SearchProducts />
      <ShortCategories />
      <ProductCarousel
        title={`Top Products`}
        description={`Find out what our customers are buying.`}
        products={products}
      />
      <Stats />
      <Testimonial />
      <Blogs />
      <Subscribe />
      <Footer />
    </div>
  );
}
