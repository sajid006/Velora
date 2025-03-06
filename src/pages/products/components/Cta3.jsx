"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { useNavigate } from "react-router-dom";
import Ecommerce1 from '../../../assets/ecommerce1.webp';

export function Cta3() {
  const navigate = useNavigate();
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            Discover More Amazing Products
          </h2>
          <p className="text-text-alternative md:text-md">
            Join us today for exclusive deals and unlock a world of fantastic
            finds!
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Explore" onClick={() => navigate('/categories')} className="bg-blue-500 border-none hover:bg-blue-600">Explore</Button>
            <Button title="Sign Up" variant="secondary" onClick={() => navigate('/product-search')} className="border-none hover:bg-gray-100">
              View More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={Ecommerce1}
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
