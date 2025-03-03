import React from "react";
import { Navbar, Footer, Profile } from "../../components";
import { Career2 } from "../../components/Career2";
import { Contact7 } from '../../components/Contact7';
import { Contact19 } from '../../components/Contact19';
import { Faq2 } from "../../components/Faq2";
import { Team2 } from '../../components/Team2';

export default function Page() {
  return (
    <div>
      <Navbar />
      <Career2 />
      <Contact7 />
      <Contact19 />
      <Faq2 />
      <Team2 />
      <Profile />
      <Footer />
    </div>
  );
}
