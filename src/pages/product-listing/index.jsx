import React from "react";
import axios from "axios";
import { Navbar, Footer, ProductCarousel } from "../../components";
import { Product6 } from "./components/Product6";
import { Layout242 } from "./components/Layout242";
import { Cta3 } from "./components/Cta3";
import { apiUrl } from "../../utils/constants";

export default function Page() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${apiUrl}/products`).then((response) => setProducts(response.data.products));
  }, []);

  return (
    <div>
      <Navbar />
      <ProductCarousel title={`Top Products`} description={`Find out what our customers are buying.`} products={products} />
      <Layout242 />
      <Cta3 />
      <Footer />
    </div>
  );
}
