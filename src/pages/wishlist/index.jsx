import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../utils/constants";
import { Navbar, Footer, Wishlist } from "../../components";
import { useSelector } from "react-redux";

export default function Page() {
  return (
    <>
      <Navbar />
      <Wishlist />
      <Footer />
    </>
  );
}
