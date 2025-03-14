"use client";

import { useState } from "react";
import { Button, Input, Label } from "@relume_io/relume-ui";
import { BiLogoGoogle } from "react-icons/bi";
import { login, googleLogin } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";

export const Login = (props) => {
  const {
    signUpText,
    signUpLink,
    title,
    description,
    logInButton,
    logInWithGoogleButton,
    forgotPassword,
  } = {
    ...Login1Defaults,
    ...props,
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    if(event)event.preventDefault();
    console.log({ email, password });
    try {
      const response = await dispatch(login({ email, password }));
      if (response.payload.user) navigate("/");
      else {
        alert("Invalid credentials");
        setPassword("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      console.log(code);
      const response = await dispatch(googleLogin({code}));
      console.log(response);
      if(response.payload.user) navigate('/');
      else {
        alert("Failed to log in with google");
      }
    },
    flow: 'auth-code',
  });

  return (
    <section id="relume" className="px-[5%]">
      <div className="relative flex flex-col justify-center overflow-auto py-24 lg:py-20">
        <div className="mx-auto w-full max-w-sm">
          <div className="rb-6 mb-6 text-center md:mb-8">
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {title}
            </h1>
            <p className="md:text-md">{description}</p>
          </div>
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div className="grid w-full items-center">
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
            <div className="grid w-full items-center">
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
                variant={logInButton.variant}
                size={logInButton.size}
                iconLeft={logInButton.iconLeft}
                iconRight={logInButton.iconRight}
                className="bg-blue-500 border-none border-none hover:bg-blue-600"
              >
                {logInButton.title}
              </Button>
            </div>
          </form>
          <Button
            variant={logInWithGoogleButton.variant}
            size={logInWithGoogleButton.size}
            iconLeft={logInWithGoogleButton.iconLeft}
            iconRight={logInWithGoogleButton.iconRight}
            className="mt-5 w-full text-center md:mt-6 gap-x-3"
            onClick={handleGoogleLogin}
          >
            {logInWithGoogleButton.title}
          </Button>
          <div className="mt-5 w-full text-center md:mt-2">
            <a href={forgotPassword.url} className="underline">
              {forgotPassword.text}
            </a>
          </div>
          <div className="mt-5 w-full text-center md:mt-6">
            <div className="flex justify-center">
              <p className="hidden md:block">{signUpText}</p>
              <a href={signUpLink.url} className="underline ml-2">
                {signUpLink.text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Login1Defaults = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo text",
  },
  signUpText: "Don't have an account?",
  signUpLink: {
    text: "Sign up",
    url: "/signup",
  },
  title: "Log In",
  description: "Login to your velora account.",
  logInButton: {
    title: "Log in",
  },
  logInWithGoogleButton: {
    variant: "secondary",
    title: "Log in with Google",
    iconLeft: <BiLogoGoogle className="size-6" />,
  },
  forgotPassword: {
    text: "Forgot your password?",
    url: "#",
  },
};
