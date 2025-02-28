"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";


export const Products = (props) => {
  const { heading, description, button, products } = {
    ...props,
  };

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);


  const navigate = useNavigate();
  const handleButtonClick = (e) => {
    e.preventDefault();
    navigate('/products')
  };

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-r from-blue-100 to-purple-200 mt-12"
    >
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-end gap-12 md:mb-18 md:grid-cols-[1fr_max-content] lg:mb-20 lg:gap-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
          </div>
          <Button {...button} className="hidden md:flex bg-blue-500 hover:bg-blue-600 text-white"  onClick={handleButtonClick}>
            {button.title}
          </Button>
        </div>
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <div className="relative pb-24">
            <CarouselContent className="ml-0">
              {products.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-1/4"
                >
                  <ProductCard key={index} {...product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute bottom-0 flex w-full items-end justify-between">
              <div className="flex h-7 pt-[10px]">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={clsx(
                      "mx-[3px] size-2 rounded-full",
                      current === index + 1 ? "bg-black" : "bg-neutral-light"
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2 md:gap-4">
                <CarouselPrevious className="static size-16 -translate-y-0" />
                <CarouselNext className="static size-16 -translate-y-0" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

const ProductCard = ({ url, image, title, price, variant, button }) => {
  return (
    <div>
      <a href={url} className="mb-3 block aspect-[5/6] md:mb-4">
        <img
          src={image.src}
          alt={image.alt}
          className="size-full object-cover"
        />
      </a>
      <a href={url} className="flex justify-between md:text-md">
        <div className="mr-4">
          <h3 className="font-semibold">{title}</h3>
          <div className="text-sm">{variant}</div>
        </div>
        <div className="text-md font-semibold md:text-lg">{price}</div>
      </a>
      <Button {...button} className="mt-3 w-full md:mt-4">
        {button.title}
      </Button>
    </div>
  );
};