"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Akakus Real Estate",
    description: `A real estate sales platform built with Laravel 10 and MySQL. Features secure payment gateways, CRUD operations for property listings, and a responsive Bootstrap UI.`,
    link: "#",
    images: ["/assets/projects-screenshots/akakus/landing.png"],
  },
  {
    id: 2,
    name: "Harmud School Portal",
    description: `A real estate portal designed for private schools, developed with Laravel 10. Features responsive design and robust database architecture.`,
    link: "#",
    images: ["/assets/projects-screenshots/harmud/landing.png"],
  },
  {
    id: 3,
    name: "Tunisie Telecom Store Locator",
    description: `A mobile web app for store location management built with Symfony, featuring REST API endpoints and hybrid app integration for seamless location tracking.`,
    link: "#",
    images: ["/assets/projects-screenshots/tunisietelecom/landing.png"],
  },
  {
    id: 4,
    name: "CapTb HR & Accounting",
    description: `An HR and accounting management system developed with PHP5, C, and Java/JSP. Manages employee records, payroll, and financial data with Bootstrap frontend.`,
    link: "#",
    images: ["/assets/projects-screenshots/captb/landing.png"],
  },
  {
    id: 5,
    name: "Mairie-Facile",
    description: `A municipal services portal built with Laravel Breeze featuring user authentication and service request management, deployed on OVH hosting.`,
    link: "#",
    images: ["/assets/projects-screenshots/mairiefacile/landing.png"],
  },
  {
    id: 6,
    name: "Travelin",
    description: `A travel agency WordPress site with booking engine integration, custom Elementor blocks, and responsive layouts for multi-region support.`,
    link: "#",
    images: ["/assets/projects-screenshots/travelin/landing.png"],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
