import React, { useEffect, useState } from "react";
import { OneCategory, Navbar, Footer } from "../../components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../utils/constants";

export default function Page() {
  return (
    <div>
      <Navbar />
      <OneCategory />
      <Footer />
    </div>
  );
}
