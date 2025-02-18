"use client";

import React from "react";

export function Gallery2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Image Gallery
          </h2>
          <p className="md:text-md">
            Explore our product from every angle and use.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-6 md:grid-cols-2 md:gap-8">
          <a href="#">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 1"
              className="size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 2"
              className="size-full object-cover"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
