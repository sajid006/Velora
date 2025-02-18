"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Dialog,
  DialogContent,
  DialogTrigger,
  Input,
  Label,
  SheetClose,
  SheetContent,
  SheetTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React, { Fragment, useEffect, useState } from "react";

const Star = () => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const isFullStar = i < fullStars;
        const isHalfStar = hasHalfStar && i === fullStars;

        return (
          <div key={i}>
            {isFullStar ? (
              <BiSolidStar />
            ) : isHalfStar ? (
              <BiSolidStarHalf />
            ) : (
              <BiStar />
            )}
          </div>
        );
      })}
    </div>
  );
};

const useGalleyDialog = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const handleSelectSlide = (number) => () => {
    setSelectedSlide(number);
  };
  const preventDefault = (e) => e.preventDefault();
  return {
    selectedSlide,
    handleSelectSlide,
    preventDefault,
  };
};

const useLightbox = () => {
  const [mainApi, setMainApi] = useState();
  const [thumbApi, setThumbApi] = useState();
  const [current, setCurrent] = useState(selectedSlide);
  useEffect(() => {
    setCurrent(selectedSlide);
  }, [selectedSlide]);
  useEffect(() => {
    if (!mainApi || !thumbApi) {
      return;
    }
    mainApi.on("select", () => {
      const index = mainApi.selectedScrollSnap();
      setCurrent(index);
      thumbApi.scrollTo(index);
    });
  }, [mainApi, thumbApi]);
  const handleClick = (index) => () => {
    return mainApi?.scrollTo(index);
  };
  const getThumbStyles = (index) => {
    return clsx("block", current === index && "opacity-30");
  };
  return {
    setMainApi,
    setThumbApi,
    handleClick,
    getThumbStyles,
  };
};

const useGalleyDialog = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const handleSelectSlide = (number) => () => {
    setSelectedSlide(number);
  };
  const preventDefault = (e) => e.preventDefault();
  return {
    selectedSlide,
    handleSelectSlide,
    preventDefault,
  };
};

export function ProductHeader2() {
  const useActive = useGalleyDialog();
  const useActive = useLightbox(useActive.selectedSlide);
  const useActive = useGalleyDialog();
  return (
    <header id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="mb-8 flex flex-col gap-6 md:mb-12">
          <Breadcrumb className="order-last flex flex-wrap items-center text-sm md:order-none">
            <BreadcrumbList>
              <Fragment>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Shop all</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
              <Fragment>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Electronics</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
              <Fragment>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Smartphone X</BreadcrumbLink>
                </BreadcrumbItem>
              </Fragment>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative">
            <Dialog>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
                <div>
                  <DialogTrigger className="block size-full">
                    <div
                      onClick={useActive.handleSelectSlide(0)}
                      className="h-full"
                    >
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder image 1"
                        className="aspect-[5/4] size-full object-cover"
                      />
                    </div>
                  </DialogTrigger>
                </div>
                <div className="hidden md:grid md:grid-cols-2 md:gap-4">
                  <DialogTrigger className="block w-full">
                    <div onClick={useActive.handleSelectSlide(1)}>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder image 2"
                        className="aspect-[5/4] size-full object-cover"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogTrigger className="block w-full">
                    <div onClick={useActive.handleSelectSlide(2)}>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder image 3"
                        className="aspect-[5/4] size-full object-cover"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogTrigger className="block w-full">
                    <div onClick={useActive.handleSelectSlide(3)}>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder image 4"
                        className="aspect-[5/4] size-full object-cover"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogTrigger className="block w-full">
                    <div onClick={useActive.handleSelectSlide(4)}>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder image 5"
                        className="aspect-[5/4] size-full object-cover"
                      />
                    </div>
                  </DialogTrigger>
                </div>
              </div>
              <DialogContent
                onCloseAutoFocus={useActive.preventDefault}
                closeIconPosition="inside"
                closeIconClassName="text-text-alternative"
              >
                <div className="relative flex h-screen flex-col">
                  <div className="flex grow items-center justify-center pb-[12vh]">
                    <div className="mx-auto max-w-[1000px]">
                      <div className="overflow-hidden">
                        <Carousel
                          setApi={useActive.setMainApi}
                          opts={{ loop: true, align: "start" }}
                          className="static m-0"
                        >
                          <CarouselContent className="m-0">
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(1)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 1"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(2)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 2"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(3)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 3"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(4)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 4"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(5)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 5"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(6)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 6"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(7)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 7"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(8)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 8"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(9)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 9"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(10)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 10"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(11)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 11"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(12)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 12"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(13)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 13"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(14)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 14"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(15)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 15"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(16)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 16"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(17)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 17"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(18)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 18"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(19)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 19"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                            <CarouselItem className="pl-0">
                              <button
                                onClick={useActive.handleClick(20)}
                                className="block w-full"
                              >
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                  alt="Relume placeholder image 20"
                                  className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                />
                              </button>
                            </CarouselItem>
                          </CarouselContent>
                          <CarouselPrevious className="left-6 hidden rounded-none border-none bg-transparent text-text-alternative md:flex md:size-12 lg:size-14" />
                          <CarouselNext className="right-6 hidden rounded-none border-none bg-transparent text-text-alternative md:flex md:size-12 lg:size-14" />
                        </Carousel>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full overflow-hidden p-[1vh]">
                    <Carousel
                      setApi={useActive.setThumbApi}
                      opts={{ align: "start", dragFree: true, loop: true }}
                      className="m-0"
                    >
                      <CarouselContent className="m-0 block whitespace-nowrap text-center">
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(0)}
                            className={useActive.getThumbStyles(0)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 1"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(1)}
                            className={useActive.getThumbStyles(1)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 2"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(2)}
                            className={useActive.getThumbStyles(2)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 3"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(3)}
                            className={useActive.getThumbStyles(3)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 4"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(4)}
                            className={useActive.getThumbStyles(4)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 5"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(5)}
                            className={useActive.getThumbStyles(5)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 6"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(6)}
                            className={useActive.getThumbStyles(6)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 7"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(7)}
                            className={useActive.getThumbStyles(7)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 8"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(8)}
                            className={useActive.getThumbStyles(8)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 9"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(9)}
                            className={useActive.getThumbStyles(9)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 10"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(10)}
                            className={useActive.getThumbStyles(10)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 11"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(11)}
                            className={useActive.getThumbStyles(11)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 12"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(12)}
                            className={useActive.getThumbStyles(12)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 13"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(13)}
                            className={useActive.getThumbStyles(13)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 14"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(14)}
                            className={useActive.getThumbStyles(14)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 15"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(15)}
                            className={useActive.getThumbStyles(15)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 16"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(16)}
                            className={useActive.getThumbStyles(16)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 17"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(17)}
                            className={useActive.getThumbStyles(17)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 18"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(18)}
                            className={useActive.getThumbStyles(18)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 19"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                        <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                          <button
                            onClick={useActive.handleClick(19)}
                            className={useActive.getThumbStyles(19)}
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 20"
                              className="w-full"
                            />
                          </button>
                        </CarouselItem>
                      </CarouselContent>
                    </Carousel>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <SheetTrigger className="absolute bottom-4 right-4 z-10 border border-border-alternative bg-background-primary px-5 py-2">
                Show all photos
              </SheetTrigger>
              <SheetContent side="bottom" className="size-full px-4">
                <SheetClose />
                <div className="container">
                  <div className="mx-auto max-w-lg">
                    <Dialog>
                      <div className="grid grid-cols-2 gap-4">
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(0)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 1"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(0)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(1)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 2"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(1)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(2)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 3"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(2)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(3)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 4"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(3)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(4)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 5"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(4)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(5)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 6"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(5)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(6)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 7"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(6)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(7)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 8"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(7)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(8)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 9"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(8)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(9)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 10"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(9)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(10)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 11"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(10)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(11)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 12"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(11)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(12)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 13"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(12)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(13)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 14"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(13)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(14)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 15"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(14)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(15)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 16"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(15)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(16)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 17"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(16)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(17)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 18"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(17)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(18)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 19"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(18)}
                            />
                          </div>
                        </DialogTrigger>
                        <DialogTrigger>
                          <div
                            onClick={useActive.handleSelectSlide(19)}
                            className="first:col-span-2"
                          >
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                              alt="Relume placeholder image 20"
                              className="aspect-[5/4] size-full object-cover"
                              onClick={useActive.handleSelectSlide(19)}
                            />
                          </div>
                        </DialogTrigger>
                      </div>
                      <DialogContent
                        onCloseAutoFocus={useActive.preventDefault}
                        closeIconPosition="inside"
                        closeIconClassName="text-text-alternative"
                      >
                        <div className="relative flex h-screen flex-col">
                          <div className="flex grow items-center justify-center pb-[12vh]">
                            <div className="mx-auto max-w-[1000px]">
                              <div className="overflow-hidden">
                                <Carousel
                                  setApi={useActive.setMainApi}
                                  opts={{ loop: true, align: "start" }}
                                  className="static m-0"
                                >
                                  <CarouselContent className="m-0">
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(1)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 1"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(2)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 2"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(3)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 3"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(4)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 4"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(5)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 5"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(6)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 6"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(7)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 7"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(8)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 8"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(9)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 9"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(10)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 10"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(11)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 11"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(12)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 12"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(13)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 13"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(14)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 14"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(15)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 15"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(16)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 16"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(17)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 17"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(18)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 18"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(19)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 19"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                    <CarouselItem className="pl-0">
                                      <button
                                        onClick={useActive.handleClick(20)}
                                        className="block w-full"
                                      >
                                        <img
                                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                          alt="Relume placeholder image 20"
                                          className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                                        />
                                      </button>
                                    </CarouselItem>
                                  </CarouselContent>
                                  <CarouselPrevious className="left-6 hidden rounded-none border-none bg-transparent text-text-alternative md:flex md:size-12 lg:size-14" />
                                  <CarouselNext className="right-6 hidden rounded-none border-none bg-transparent text-text-alternative md:flex md:size-12 lg:size-14" />
                                </Carousel>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 w-full overflow-hidden p-[1vh]">
                            <Carousel
                              setApi={useActive.setThumbApi}
                              opts={{
                                align: "start",
                                dragFree: true,
                                loop: true,
                              }}
                              className="m-0"
                            >
                              <CarouselContent className="m-0 block whitespace-nowrap text-center">
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(0)}
                                    className={useActive.getThumbStyles(0)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 1"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(1)}
                                    className={useActive.getThumbStyles(1)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 2"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(2)}
                                    className={useActive.getThumbStyles(2)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 3"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(3)}
                                    className={useActive.getThumbStyles(3)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 4"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(4)}
                                    className={useActive.getThumbStyles(4)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 5"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(5)}
                                    className={useActive.getThumbStyles(5)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 6"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(6)}
                                    className={useActive.getThumbStyles(6)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 7"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(7)}
                                    className={useActive.getThumbStyles(7)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 8"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(8)}
                                    className={useActive.getThumbStyles(8)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 9"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(9)}
                                    className={useActive.getThumbStyles(9)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 10"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(10)}
                                    className={useActive.getThumbStyles(10)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 11"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(11)}
                                    className={useActive.getThumbStyles(11)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 12"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(12)}
                                    className={useActive.getThumbStyles(12)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 13"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(13)}
                                    className={useActive.getThumbStyles(13)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 14"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(14)}
                                    className={useActive.getThumbStyles(14)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 15"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(15)}
                                    className={useActive.getThumbStyles(15)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 16"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(16)}
                                    className={useActive.getThumbStyles(16)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 17"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(17)}
                                    className={useActive.getThumbStyles(17)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 18"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(18)}
                                    className={useActive.getThumbStyles(18)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 19"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                                <CarouselItem className="inline-block max-w-[12vh] pl-[2vh]">
                                  <button
                                    onClick={useActive.handleClick(19)}
                                    className={useActive.getThumbStyles(19)}
                                  >
                                    <img
                                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                      alt="Relume placeholder image 20"
                                      className="w-full"
                                    />
                                  </button>
                                </CarouselItem>
                              </CarouselContent>
                            </Carousel>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </SheetContent>
            </Dialog>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-[1fr_16rem] md:gap-x-12 md:gap-y-10 lg:gap-12 xl:grid-cols-[1fr_0.5fr] xl:gap-x-20">
          <div>
            <h1 className="hidden text-4xl font-bold leading-[1.2] md:mb-8 md:block md:text-5xl lg:text-6xl">
              Smartphone X
            </h1>
            <p>
              Experience cutting-edge technology with the Smartphone X. Perfect
              for photography and gaming.
            </p>
            <ul className="mb-6 mt-4 list-inside list-disc md:mb-8">
              <li className="py-0.5 pl-1.5 first:pt-0 last:pb-0">
                Includes a one-year warranty for peace of mind.
              </li>
              <li className="py-0.5 pl-1.5 first:pt-0 last:pb-0">
                Includes a one-year warranty for peace of mind.
              </li>
              <li className="py-0.5 pl-1.5 first:pt-0 last:pb-0">
                Includes a one-year warranty for peace of mind.
              </li>
            </ul>
            <Tabs defaultValue="tab-details">
              <TabsList className="mb-5 flex-wrap items-center gap-6 md:mb-6">
                <TabsTrigger
                  value="tab-details"
                  className="border-0 border-b-[1.5px] border-border-alternative px-0 py-2 duration-0 data-[state=active]:border-b-[1.5px] data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
                >
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value="tab-shipping"
                  className="border-0 border-b-[1.5px] border-border-alternative px-0 py-2 duration-0 data-[state=active]:border-b-[1.5px] data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
                >
                  Shipping
                </TabsTrigger>
                <TabsTrigger
                  value="tab-returns"
                  className="border-0 border-b-[1.5px] border-border-alternative px-0 py-2 duration-0 data-[state=active]:border-b-[1.5px] data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
                >
                  Returns
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="tab-details"
                className="data-[state=active]:animate-tabs"
              >
                <p>
                  Returns are accepted within 30 days of purchase. Items must be
                  in original condition and packaging. Contact our support team
                  for assistance.
                </p>
              </TabsContent>
              <TabsContent
                value="tab-shipping"
                className="data-[state=active]:animate-tabs"
              >
                <p>
                  Returns are accepted within 30 days of purchase. Items must be
                  in original condition and packaging. Contact our support team
                  for assistance.
                </p>
              </TabsContent>
              <TabsContent
                value="tab-returns"
                className="data-[state=active]:animate-tabs"
              >
                <p>
                  Returns are accepted within 30 days of purchase. Items must be
                  in original condition and packaging. Contact our support team
                  for assistance.
                </p>
              </TabsContent>
            </Tabs>
          </div>
          <div className="order-first md:order-none">
            <h1 className="mb-4 text-4xl font-bold leading-[1.2] md:hidden">
              Smartphone X
            </h1>
            <p className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl lg:text-4xl">
              $55
            </p>
            <div className="mb-5 flex flex-wrap items-center gap-3 md:mb-6">
              <Star rating={3.5} />
              <p className="text-sm">(3.5 stars) • 10 reviews</p>
            </div>
            <form>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col">
                  <Label className="mb-2">Variant</Label>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#"
                      className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-4 py-2"
                    >
                      Black color
                    </a>
                    <a
                      href="#"
                      className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-4 py-2"
                    >
                      White color
                    </a>
                    <a
                      href="#"
                      className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-4 py-2 pointer-events-none opacity-25"
                    >
                      Blue color
                    </a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="quantity" className="mb-2">
                    Quantity
                  </Label>
                  <Input
                    type="number"
                    id="quantity"
                    placeholder="1"
                    className="w-16"
                  />
                </div>
              </div>
              <div className="mb-4 mt-8 flex flex-col gap-y-4">
                <Button title="Add to cart">Add to cart</Button>
                <Button title="Buy now" variant="secondary">
                  Buy now
                </Button>
              </div>
              <p className="text-center text-xs">Free shipping over $50</p>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
