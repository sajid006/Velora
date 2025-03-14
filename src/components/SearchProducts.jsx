"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const useForm = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSetSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ search });
    if (search.trim()) {
      navigate(`/product-search?query=${search}`);
    }
  };
  return {
    search,
    handleSetSearch,
    handleSubmit,
  };
};

export function SearchProducts() {
  const formState = useForm();
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto w-full max-w-lg overflow-x-auto text-center">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            Discover Your Next Favorite Product Today!
          </h1>
          <p className="md:text-md">
            At Velora, we bring you a curated selection of top-rated products
            tailored to your needs. Shop with confidence and enjoy a seamless
            online experience.
          </p>
          <div className="mx-auto mt-6 max-w-md md:mt-8">
            <form
              className="grid w-full max-w-md grid-cols-[1fr_max-content] gap-4 gap-y-3"
              onSubmit={formState.handleSubmit}
            >
              <Input
                id="search"
                type="search"
                placeholder="Search"
                icon={<BiSearch className="size-6" />}
                iconPosition="left"
                value={formState.search}
                onChange={formState.handleSetSearch}
              />
              <Button title="Search" className="bg-blue-500 border-none hover:bg-blue-600">Search</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
