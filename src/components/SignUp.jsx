"use client";

import { useState } from "react";
import { Button, Input, Label } from "@relume_io/relume-ui";
import { BiLogoGoogle } from "react-icons/bi";

export const Signup = (props) => {
  const {
    logo,
    loginText,
    loginLink,
    title,
    description,
    signUpButton,
    signUpWithGoogleButton,
    footerText,
  } = {
    ...Signup1Defaults,
    ...props,
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <section id="relume" className="px-[5%]">
      <div className="relative flex flex-col justify-center overflow-auto py-24 lg:pb-24 lg:pt-16">
        <div className="mx-auto w-full max-w-sm">
          <div className="rb-6 mb-6 text-center md:mb-8">
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {title}
            </h1>
            <p className="md:text-md">{description}</p>
          </div>
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1">
              <Label htmlFor="name" className="mb-2">
                Name*
              </Label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-1">
              <Label htmlFor="email" className="mb-2">
                Email*
              </Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-1">
              <Label htmlFor="password" className="mb-2">
                Password*
              </Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Button
                variant={signUpButton.variant}
                size={signUpButton.size}
                iconLeft={signUpButton.iconLeft}
                iconRight={signUpButton.iconRight}
              >
                {signUpButton.title}
              </Button>
              <div className="flex justify-center">
                <p className="hidden md:block">{loginText}</p>
                <a href={loginLink.url} className="underline">
                  {loginLink.text}
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export const Signup1Defaults = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo text",
  },
  loginText: "Already have an account?",
  loginLink: {
    text: "Log In",
    url: "/login",
  },
  title: "Sign Up",
  description: "Lorem ipsum dolor sit amet adipiscing elit.",
  signUpButton: {
    title: "Sign up",
  },
  signUpWithGoogleButton: {
    variant: "secondary",
    title: "Sign up with Google",
    iconLeft: <BiLogoGoogle className="size-6" />,
  },
  footerText: "© 2024 Velora. All rights reserved.",
};
