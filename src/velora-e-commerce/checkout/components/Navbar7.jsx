"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar7() {
  const useActive = useRelume();
  return (
    <section
      id="relume"
      className="relative z-[999] flex min-h-16 w-full items-center border-b border-border-primary bg-background-primary px-[5%] md:min-h-18"
    >
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        <a href="#">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
            alt="Logo image"
          />
        </a>
        <div className="absolute hidden h-screen overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-24 pt-4 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0">
          <div className="flex flex-col items-center lg:flex-row">
            <a
              href="#"
              className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
            >
              Home Page
            </a>
            <a
              href="#"
              className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
            >
              Shop Now
            </a>
            <a
              href="#"
              className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
            >
              Contact Us
            </a>
            <div
              onMouseEnter={useActive.openOnDesktopDropdownMenu}
              onMouseLeave={useActive.closeOnDesktopDropdownMenu}
            >
              <button
                className="relative flex w-full items-center justify-between whitespace-nowrap py-3 text-md lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
                onClick={useActive.openOnMobileDropdownMenu}
              >
                <span>More Options</span>
                <motion.span
                  animate={useActive.animateDropdownMenuIcon}
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <RxChevronDown />
                </motion.span>
              </button>
              <AnimatePresence>
                <motion.nav
                  variants={{
                    open: {
                      opacity: 1,
                      height: "var(--height-open, auto)",
                      display: "block",
                    },
                    close: {
                      opacity: 0,
                      height: "var(--height-close, 0)",
                      display: "none",
                    },
                  }}
                  animate={useActive.animateDropdownMenu}
                  initial="close"
                  exit="close"
                  transition={{ duration: 0.2 }}
                  className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-background-primary lg:absolute lg:w-screen lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
                >
                  <div className="mx-auto flex size-full max-w-full items-center justify-between">
                    <div className="flex w-full flex-col lg:flex-row">
                      <div className="grid flex-1 grid-cols-1 content-start items-start gap-x-8 gap-y-6 py-4 md:grid-cols-2 md:py-8 lg:auto-cols-fr lg:grid-cols-4 lg:content-stretch lg:items-stretch lg:gap-y-0">
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">
                            Explore Categories
                          </h4>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 1"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Electronics</h5>
                              <p className="hidden text-sm md:block">
                                Latest gadgets and devices for you.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 2"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Fashion Trends</h5>
                              <p className="hidden text-sm md:block">
                                Stay stylish with our latest collections.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 3"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Home Decor</h5>
                              <p className="hidden text-sm md:block">
                                Transform your space with unique items.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 4"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Beauty Products</h5>
                              <p className="hidden text-sm md:block">
                                Enhance your beauty with our selections.
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">
                            Additional Pages
                          </h4>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 5"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">
                                Customer Reviews
                              </h5>
                              <p className="hidden text-sm md:block">
                                See what our customers are saying.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 6"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Order History</h5>
                              <p className="hidden text-sm md:block">
                                Review your past purchases easily.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 7"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Wishlist</h5>
                              <p className="hidden text-sm md:block">
                                Save your favorite items for later.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 8"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Special Offers</h5>
                              <p className="hidden text-sm md:block">
                                Check out our latest discounts and deals.
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">
                            User Account
                          </h4>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 9"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">
                                Profile Settings
                              </h5>
                              <p className="hidden text-sm md:block">
                                Manage your account information here.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 10"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Logout</h5>
                              <p className="hidden text-sm md:block">
                                Securely sign out of your account.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 11"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Help Center</h5>
                              <p className="hidden text-sm md:block">
                                Find answers to your questions.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 12"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">FAQs</h5>
                              <p className="hidden text-sm md:block">
                                Common inquiries answered here.
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">
                            Stay Connected
                          </h4>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 13"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">
                                Newsletter Signup
                              </h5>
                              <p className="hidden text-sm md:block">
                                Get updates directly to your inbox.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 14"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Follow Us</h5>
                              <p className="hidden text-sm md:block">
                                Join our community on social media.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 15"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Feedback</h5>
                              <p className="hidden text-sm md:block">
                                We value your thoughts and suggestions.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon 16"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Support</h5>
                              <p className="hidden text-sm md:block">
                                We're here to help you anytime.
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative mb-6 flex w-full flex-col items-start justify-between p-6 sm:items-center lg:mb-0 lg:flex-row lg:px-0 lg:py-4">
                    <div className="absolute -left-[50vw] -right-[50vw] bottom-0 top-0 w-[200vw] bg-background-secondary" />
                    <div className="relative mb-4 grid auto-cols-fr grid-cols-[max-content] grid-rows-[auto_auto] items-center gap-x-2 gap-y-4 lg:mb-0 lg:flex lg:items-center">
                      <p>
                        Ready to explore?
                        <a href="#" className="ml-1 underline">
                          Sign up today
                        </a>
                      </p>
                    </div>
                    <div className="relative flex w-full flex-col gap-6 sm:w-auto sm:flex-row">
                      <Button
                        title="Login"
                        variant="link"
                        size="link"
                        image={{
                          src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                          alt: "Button icon 1",
                        }}
                      >
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                          alt="Button icon 1"
                          className="size-6 shrink-0"
                        />
                        Login
                      </Button>
                      <Button
                        title="Cart"
                        variant="link"
                        size="link"
                        image={{
                          src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                          alt: "Button icon 2",
                        }}
                      >
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                          alt="Button icon 2"
                          className="size-6 shrink-0"
                        />
                        Cart
                      </Button>
                    </div>
                  </div>
                </motion.nav>
              </AnimatePresence>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button title="Help" variant="secondary" size="sm">
              Help
            </Button>
            <Button title="Search" size="sm">
              Search
            </Button>
          </div>
        </div>
        <button
          className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
          onClick={useActive.toggleMobileMenu}
        >
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: 8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={useActive.animateMobileMenu}
            variants={{
              open: { width: 0, transition: { duration: 0.1 } },
              closed: {
                width: "1.5rem",
                transition: { delay: 0.3, duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: -8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
        </button>
      </div>
      <AnimatePresence>
        <motion.div
          variants={{ open: { height: "100dvh" }, close: { height: "auto" } }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          className="absolute left-0 right-0 top-full w-full overflow-hidden lg:hidden"
          transition={{ duration: 0.4 }}
        >
          <motion.div
            variants={{ open: { y: 0 }, close: { y: "-100%" } }}
            animate={useActive.animateMobileMenu}
            initial="close"
            exit="close"
            transition={{ duration: 0.4 }}
            className="absolute left-0 right-0 top-0 block h-dvh overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-8 pt-4"
          >
            <div className="flex flex-col">
              <a href="#" className="block py-3 text-md">
                Link One
              </a>
              <a href="#" className="block py-3 text-md">
                Link Two
              </a>
              <a href="#" className="block py-3 text-md">
                Link Three
              </a>
              <div>
                <button
                  className="relative flex w-full items-center justify-between whitespace-nowrap py-3 text-md lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
                  onClick={useActive.openOnMobileDropdownMenu}
                >
                  <span>Link Four</span>
                  <motion.span
                    animate={useActive.animateDropdownMenuIcon}
                    variants={{
                      rotated: { rotate: 180 },
                      initial: { rotate: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <RxChevronDown />
                  </motion.span>
                </button>
                <AnimatePresence>
                  <motion.nav
                    variants={{
                      open: {
                        opacity: 1,
                        height: "var(--height-open, auto)",
                        display: "block",
                      },
                      close: {
                        opacity: 0,
                        height: "var(--height-close, 0)",
                        display: "none",
                      },
                    }}
                    animate={useActive.animateDropdownMenu}
                    initial="close"
                    exit="close"
                    transition={{ duration: 0.2 }}
                    className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-background-primary lg:absolute lg:w-screen lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
                  >
                    <div className="mx-auto flex size-full max-w-full items-center justify-between">
                      <div className="flex w-full flex-col lg:flex-row">
                        <div className="grid flex-1 grid-cols-1 content-start items-start gap-x-8 gap-y-6 py-4 md:grid-cols-2 md:py-8 lg:auto-cols-fr lg:grid-cols-4 lg:content-stretch lg:items-stretch lg:gap-y-0">
                          <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                            <h4 className="text-sm font-semibold leading-[1.3]">
                              Page group one
                            </h4>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                  alt="Icon 1"
                                  className="shrink-0"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Page One</h5>
                                <p className="hidden text-sm md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                  alt="Icon 2"
                                  className="shrink-0"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Page Two</h5>
                                <p className="hidden text-sm md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                  alt="Icon 3"
                                  className="shrink-0"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Page Three</h5>
                                <p className="hidden text-sm md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                  alt="Icon 4"
                                  className="shrink-0"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Page four</h5>
                                <p className="hidden text-sm md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                          </div>
                          <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                            <h4 className="text-sm font-semibold leading-[1.3]">
                              Page group two
                            </h4>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                  alt="Icon 5"
                                  className="shrink-0"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Page Five</h5>
                                <p className="hidden text-sm md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                  alt="Icon 6"
                                  className="shrink-0"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Page Six</h5>
                                <p className="hidden text-sm md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                  alt="Icon 7"
                                  className="shrink-0"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Page Seven</h5>
                                <p className="hidden text-sm md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                  alt="Icon 8"
                                  className="shrink-0"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Page Eight</h5>
                                <p className="hidden text-sm md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                          </div>
                          <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                            <h4 className="text-sm font-semibold leading-[1.3]">
                              Page group three
                            </h4>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                  alt="Icon 9"
                                  className="shrink-0"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Page Nine</h5>
                                <p className="hidden text-sm md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                  alt="Icon 10"
                                  className="shrink-0"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Page Ten</h5>
                                <p className="hidden text-sm md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                  alt="Icon 11"
                                  className="shrink-0"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Page Eleven</h5>
                                <p className="hidden text-sm md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                  alt="Icon 12"
                                  className="shrink-0"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Page Twelve</h5>
                                <p className="hidden text-sm md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                          </div>
                          <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                            <h4 className="text-sm font-semibold leading-[1.3]">
                              Page group four
                            </h4>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                  alt="Icon 13"
                                  className="shrink-0"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Page Thirteen</h5>
                                <p className="hidden text-sm md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                  alt="Icon 14"
                                  className="shrink-0"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Page Fourteen</h5>
                                <p className="hidden text-sm md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                  alt="Icon 15"
                                  className="shrink-0"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Page Fifteen</h5>
                                <p className="hidden text-sm md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                  alt="Icon 16"
                                  className="shrink-0"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Page Sixteen</h5>
                                <p className="hidden text-sm md:block">
                                  Lorem ipsum dolor sit amet consectetur elit
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative mb-6 flex w-full flex-col items-start justify-between p-6 sm:items-center lg:mb-0 lg:flex-row lg:px-0 lg:py-4">
                      <div className="absolute -left-[50vw] -right-[50vw] bottom-0 top-0 w-[200vw] bg-background-secondary" />
                      <div className="relative mb-4 grid auto-cols-fr grid-cols-[max-content] grid-rows-[auto_auto] items-center gap-x-2 gap-y-4 lg:mb-0 lg:flex lg:items-center">
                        <p>
                          Ready to get started?
                          <a href="#" className="ml-1 underline">
                            Sign up for free
                          </a>
                        </p>
                      </div>
                      <div className="relative flex w-full flex-col gap-6 sm:w-auto sm:flex-row">
                        <Button
                          title="Button"
                          variant="link"
                          size="link"
                          image={{
                            src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                            alt: "Button icon 1",
                          }}
                        >
                          <img
                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                            alt="Button icon 1"
                            className="size-6 shrink-0"
                          />
                          Button
                        </Button>
                        <Button
                          title="Button"
                          variant="link"
                          size="link"
                          image={{
                            src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                            alt: "Button icon 2",
                          }}
                        >
                          <img
                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                            alt="Button icon 2"
                            className="size-6 shrink-0"
                          />
                          Button
                        </Button>
                      </div>
                    </div>
                  </motion.nav>
                </AnimatePresence>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                <Button title="Button" variant="secondary" size="sm">
                  Button
                </Button>
                <Button title="Button" size="sm">
                  Button
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
