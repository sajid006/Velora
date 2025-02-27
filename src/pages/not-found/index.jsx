import React from "react";
import {
  Navbar,
  NotFound,
  Footer,
} from "../../components";

export default function Page() {
  return (
    <div>
      <Navbar />
        <NotFound />
      <Footer />
    </div>
  );
}
