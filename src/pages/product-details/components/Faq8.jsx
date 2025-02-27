"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your questions about our products and services right
            here.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What is the warranty?
            </h2>
            <p>
              Our products come with a one-year warranty covering manufacturing
              defects. If you encounter any issues, please reach out to our
              support team. We are committed to ensuring your satisfaction.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How to return items?
            </h2>
            <p>
              To return an item, please visit our returns page and fill out the
              form. Ensure the product is in its original condition. Once
              processed, you will receive a confirmation email.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I track orders?
            </h2>
            <p>
              Yes, you can track your order through the tracking link sent to
              your email. Simply click the link to view the status. You can also
              check your order history in your account.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What payment methods accepted?
            </h2>
            <p>
              We accept various payment methods including credit cards, PayPal,
              and Apple Pay. All transactions are secure and encrypted. Choose
              the option that suits you best at checkout.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How to contact support?
            </h2>
            <p>
              You can contact our support team via the 'Contact' button above.
              We are available 24/7 to assist you with any inquiries. Your
              satisfaction is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
