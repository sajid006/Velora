"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-r from-blue-400 to-purple-600 mt-4">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to common questions about your user account and
            settings here.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              How do I reset?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              To reset your password, go to the login page and click on 'Forgot
              Password?'. Enter your email address, and we'll send you a link to
              create a new password. Follow the instructions in the email to
              complete the process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I change email?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can change your email address in your account settings.
              Simply log in, navigate to 'Profile', and update your email. Don't
              forget to save the changes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              What if I forget?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              If you forget your password, use the 'Forgot Password?' link on
              the login page. You'll receive an email with instructions to reset
              it. Make sure to check your spam folder if you don't see it.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              How to delete account?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              To delete your account, please contact our support team through
              the contact page. They will guide you through the process.
              Remember, deleting your account is permanent and cannot be undone.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              How to update info?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              You can update your personal information in the 'Account Settings'
              section. Log in, select 'Profile', and make the necessary changes.
              Be sure to save your updates before exiting.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">We're here to help you!</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
