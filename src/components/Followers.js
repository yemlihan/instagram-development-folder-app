import React from "react";
import { Accordion } from "flowbite";
import { AccordionOptions, AccordionItem, AccordionInterface } from "flowbite";

export default function Followers() {
  return (
    <>
      <div id="accordion-collapse" data-accordion="collapse" className="mt-5">
        <h2 id="accordion-collapse-heading-3" className="text-xs">
          <button
            type="button"
            className="flex justify-between items-center w-full block bg-gray-700 text-white hover:bg-white hover:text-gray-700 max-w-sm p-6 border border-gray-200 rounded-lg shadow cursor-pointer"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span>Takipçiler</span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="p-5 border">
            <p>content</p>
          </div>
        </div>
      </div>
    </>
  );
}
