import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Accordion } from "flowbite";
import { AccordionOptions, AccordionItem, AccordionInterface } from "flowbite";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { fetchGts } from "../store/actions/gtfollowers";

export default function GtFollow() {
  const followers = useSelector((state) => state.gts.gts) || [];
  const dispatch = useDispatch();

  const users = followers.map((item) => {
    return (
      <li key={item.timestamp} className="mb-3 w-full">
        <Link
          href={item.href}
          className="flex justify-between items-center bg-gray-700 text-white hover:bg-white hover:text-gray-700 max-w-sm p-6 rounded-lg cursor-pointer"
        >
          <span>{item.value} </span> <BsArrowRight />
        </Link>
      </li>
    );
  });

  useEffect(() => {
    dispatch(fetchGts());
  }, []);

  return (
    <div className="overflow-hidden">
      <div id="accordion-collapse" data-accordion="collapse" className="mt-5">
        <h2 id="accordion-collapse-heading-5" className="text-xs">
          <button
            type="button"
            className="flex justify-between items-center w-full bg-black text-white hover:bg-white hover:text-gray-700 max-w-sm p-6 border border-gray-200 rounded-lg shadow cursor-pointer"
            data-accordion-target="#accordion-collapse-body-5"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-5"
          >
            <span>Geri Dönmeyenler ({followers.length})</span>
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
          id="accordion-collapse-body-5"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-5"
        >
          <div className="border max-h-96 overflow-y-scroll overflow-hidden mb-5">
            <ul className="mt-5">
            {users.length === 0 && <h1>not users</h1>}
              {users}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
