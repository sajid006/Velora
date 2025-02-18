"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Career2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Careers</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Job Openings
            </h2>
            <p className="md:text-md">
              Explore exciting job opportunities and join our dynamic team at
              Velora today!
            </p>
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-1" className="first:border-t-0">
            <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Marketing Team
            </AccordionTrigger>
            <AccordionContent className="mb-6 pb-0 md:mb-8">
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Content Writer
                    </h3>
                    <p className="md:text-md">Remote</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply Now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  Join our marketing team as a Content Writer. You will create
                  engaging content that resonates with our audience. Bring your
                  creativity and passion for storytelling to Velora!
                </p>
              </div>
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Data Analyst
                    </h3>
                    <p className="md:text-md">Onsite</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply Now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  We are looking for a Data Analyst to join our team. In this
                  role, you will analyze data trends to inform business
                  decisions. Your insights will help shape the future of Velora.
                </p>
              </div>
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold md:text-2xl">
                      UX Designer
                    </h3>
                    <p className="md:text-md">Hybrid</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply Now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  As a UX Designer, you will enhance user experiences across our
                  platform. Collaborate with cross-functional teams to design
                  intuitive interfaces. Your work will directly impact customer
                  satisfaction at Velora.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="first:border-t-0">
            <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Sales Team
            </AccordionTrigger>
            <AccordionContent className="mb-6 pb-0 md:mb-8">
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Sales Associate
                    </h3>
                    <p className="md:text-md">Remote</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply Now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  Join our Sales Team as a Sales Associate. You will engage with
                  customers and drive sales through exceptional service. Your
                  enthusiasm and dedication will contribute to Velora's growth.
                </p>
              </div>
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Product Manager
                    </h3>
                    <p className="md:text-md">Remote</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply Now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  We are seeking a Product Manager to lead product development
                  initiatives. You'll collaborate with various teams to bring
                  innovative solutions to market. Your leadership will shape the
                  future of Velora's offerings.
                </p>
              </div>
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Customer Support
                    </h3>
                    <p className="md:text-md">Remote</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply Now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  Join our Customer Support team to assist customers with their
                  inquiries. Your role will involve providing solutions and
                  ensuring customer satisfaction. Help us maintain our high
                  standards at Velora.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="first:border-t-0">
            <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
              IT Department
            </AccordionTrigger>
            <AccordionContent className="mb-6 pb-0 md:mb-8">
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Software Engineer
                    </h3>
                    <p className="md:text-md">Remote</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply Now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  We are looking for a Software Engineer to join our IT
                  Department. You will develop and maintain our e-commerce
                  platform. Your technical expertise will be crucial for
                  Velora's success.
                </p>
              </div>
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Graphic Designer
                    </h3>
                    <p className="md:text-md">Remote</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply Now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  As a Graphic Designer, you will create visually appealing
                  graphics for our marketing campaigns. Your creativity will
                  help elevate Velora's brand presence. Join us to make a
                  lasting impact!
                </p>
              </div>
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Operations Manager
                    </h3>
                    <p className="md:text-md">Onsite</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply Now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  Join us as an Operations Manager to oversee daily operations.
                  You will ensure efficiency and effectiveness across all
                  departments. Your leadership will be vital to Velora's
                  operational success.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
