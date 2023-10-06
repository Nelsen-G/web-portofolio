"use client"
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Tab from "./Tab";
import { useState } from "react";
import { useTransition } from "react";
import { useInView } from "react-intersection-observer";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Laravel</li>
        <li>Figma</li>
        <li>React</li>
        <li>Flutter</li>
        <li>ASP.NET</li>
        <li>MySQL</li>
        <li>Python</li>
        <li>Java & JavaFX</li>
        <li>HTML, CSS, and Javascript</li>
        <li>Premiere Pro</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="mb-4">
          <p className="font-semibold text-lg">BINUS University <span className="text-gray-400 font-light">(2021-2025)</span></p>
          <p className="text-sm font-medium">Computer Science, Software Engineering Stream</p>
          <p className="text-sm font-light">Current GPA: 3.92</p>
        </li>
        <li className="mb-4">
          <p className="font-semibold text-lg">Bukit Sion High School <span className="text-gray-400 font-light">(2018-2021)</span></p>
          <p className="text-sm font-medium">Natural Sciences</p>
          <p className="text-sm font-light">Average Score: 93.20</p>
        </li>
      </ul>
    ),
  },

  {
    title: "experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li className="mb-4">
          <p className="font-semibold text-lg">BINUS University <span className="text-gray-400 font-light">(Aug 2023 - Present)</span></p>
          <p className="text-sm font-medium">Scholarship Mentor</p>
          <p className="text-sm font-light">Currently teaching Java Mobile Programming, Database Systems, and Discrete Mathematics.</p>
        </li>

        <li className="mb-4">
          <p className="font-semibold text-lg">Ureeka BINUS <span className="text-gray-400 font-light">(Apr 2023 - Present)</span></p>
          <p className="text-sm font-medium">Member</p>
          <p className="text-sm font-light">Engaged in weekly training sessions focused on front-end, back-end, and UI/UX development, and actively participated in competitions.</p>
        </li>

        <li className="mb-4">
          <p className="font-semibold text-lg">Fiverr <span className="text-gray-400 font-light">(Feb 2021 - Jul 2021)</span></p>
          <p className="text-sm font-medium">Freelance Graphic Designer</p>
          <p className="text-sm font-light">Designed logos, WordPress websites, t-shirt designs, PowerPoint presentations, and video editing.</p>
        </li>
      </ul>
    ),
  },
];


const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const imageControls = useAnimation();
  const contentControls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      imageControls.start({
        opacity: 1,
        x: 0,
      });

      contentControls.start({
        opacity: 1,
        x: 0,
      });
    } else {
      imageControls.start({
        opacity: 0,
        x: -100,
      });

      contentControls.start({
        opacity: 0,
        x: 100,
      });
    }
  }, [inView, imageControls, contentControls]);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
        ref={ref}
      >
        <motion.div
          style={{
            width: "500px",
            height: "500px",
            overflow: "hidden",
            borderRadius: "30px",
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={imageControls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="/images/aboutme.JPG"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              transform: "scale(1.3) translate(-15px, -90px)",
            }}
            alt="About Me"
          />
        </motion.div>

        <motion.div
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
          initial={{ opacity: 0, x: 100 }}
          animate={contentControls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            I’m a passionate Software Engineering student at
            BINUS University. My journey in technology
            revolves around my love for creating software solutions.
            I bring to the table a unique blend of soft skills,
            including adaptability, teamwork, open-
            mindedness, strong work ethic, integrity, and
            critical thinking, which have proven invaluable in
            my academic and project endeavors.
          </p>
          <div className="flex flex-row justify-start mt-8 -mb-6">
            <Tab
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </Tab>
            <Tab
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </Tab>

            <Tab
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              Experiences
            </Tab>
          </div>

          {/* <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div> */}

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {tab === "skills" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {TAB_DATA.find((t) => t.id === "skills").content}
              </motion.div>
            )}
            {tab === "education" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {TAB_DATA.find((t) => t.id === "education").content}
              </motion.div>
            )}
            {tab === "experiences" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {TAB_DATA.find((t) => t.id === "experiences").content}
              </motion.div>
            )}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
