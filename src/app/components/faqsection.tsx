import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
const faqs = [
  {
    question: "Question text goes here",
    answer: "Answer to the question goes here.",
  },
  {
    question: "Question text goes here",
    answer: "Answer to the question goes here.",
  },
  {
    question: "Question text goes here",
    answer: "Answer to the question goes here.",
  },
  {
    question: "Question text goes here",
    answer: "Answer to the question goes here.",
  },
  {
    question: "Question text goes here",
    answer: "Answer to the question goes here.",
  },
];

const FAQSection = () => {
  return (
    <div className=" mt-10 text-white py-12 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-[#ECEEEC] font-bold">
          Frequently asked questions
        </h2>
        <p className="text-[#AFB5AD] text-lg font-medium mt-2">
          Find answers to common questions about our bikes, services, and more.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <hr className="border-[#282A27] border" />
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[#282A27]">
            <Accordion
              className="border-b border-[#282A27]"
              type="single"
              collapsible
            >
              <AccordionItem
                value={`item-${index}`}
                className="border-b-0 border-[#282A27] "
              >
                <AccordionTrigger className="text-lg font-semibold text-[#AFB5AD]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 text-center">
        <h3 className="md:text-4xl text-xl text-[#ECEEEC] font-bold">
          Still have questions?
        </h3>
        <p className="text-[#AFB5AD] md:text-lg text-base mt-7">
          Support details to capture customers that might be on the fence.
        </p>
        <Button className="mt-8 px-6 py-2 text-base bg-transparent border-[1px] border-[#7D66D9] text-indigo-500 rounded-xl hover:bg-indigo-500 hover:text-white">
          Contact
        </Button>
      </div>
    </div>
  );
};

export default FAQSection;
