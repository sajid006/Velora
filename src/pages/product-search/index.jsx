import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Footer } from "../../components";
import { AllProducts } from "../../components/AllProducts";

export default function Page() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");
  return (
    <div>
      <Navbar />
      <AllProducts searchValue={searchQuery} />
      <Footer />
    </div>
  );
}
