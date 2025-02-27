"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
// import type { ButtonProps, CarouselApi } from "@relume_io/relume-ui";
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";

// type ImageProps = {
//   src: string;
//   alt?: string;
// };

// type ProductCardProps = {
//   url: string;
//   image: ImageProps;
//   title: string;
//   price: string;
//   variant: string;
//   button: ButtonProps;
// };

// type Props = {
//   tagline: string;
//   heading: string;
//   description: string;
//   button: ButtonProps;
//   products: ProductCardProps[];
// };

// export type Product6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Products = (props) => {
  const { tagline, heading, description, button, products } = {
    ...Product6Defaults,
    ...props,
  };

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

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
          <Button {...button} className="hidden md:flex">
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

const productData = {
  url: "#",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
  title: "Product name",
  price: "$55",
  variant: "Variant",
  button: { variant: "secondary", size: "sm", title: "Add to cart" },
};

export const Product6Defaults = {
  tagline: "Tagline",
  heading: "Products",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  button: {
    variant: "secondary",
    size: "primary",
    title: "View all",
  },
  products: [
    productData,
    productData,
    productData,
    productData,
    productData,
    productData,
    productData,
    productData,
  ],
};
