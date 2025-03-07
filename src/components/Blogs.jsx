"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Ecommerce1 from '../assets/ecommerce1.webp';
import Ecommerce2 from '../assets/ecommerce2.webp';
import Ecommerce3 from '../assets/ecommerce3.webp';

export function Blogs() {
  const navigate = useNavigate();
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-r from-blue-100 to-purple-400 mt-12">
      <div className="container">
        <div className="rb-12 mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            Discover a seamless shopping experience tailored just for you.
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <img
                src={Ecommerce1}
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Browse through our extensive collection of top-rated products
              effortlessly.
            </h3>
            <p>
              Select your favorite items, add them to your cart, and check out
              with ease.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" onClick={() => navigate('/categories')}>
                Shop
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <img
                src={Ecommerce2}
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Enjoy personalized recommendations based on your shopping
              preferences.
            </h3>
            <p>
              Our platform learns what you love, making shopping even more
              enjoyable.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" onClick={() => navigate('/products')}>
                Explore
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <img
                src={Ecommerce3}
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Experience secure payment options for a hassle-free
              checkout.
            </h3>
            <p>
              Complete your purchase with confidence, knowing your information
              is protected.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" onClick={() => navigate('/checkout')}>
                Buy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
