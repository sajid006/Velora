"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import Subscription from "../assets/Subscription.webp";

export function Subscribe() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            Join Our Exclusive Community
          </h2>
          <p className="text-text-alternative md:text-md">
            Subscribe now for exclusive offers, updates, and the latest trends
            delivered straight to your inbox!
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Subscribe">Subscribe</Button>
            <Button title="Learn More" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={Subscription}
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
