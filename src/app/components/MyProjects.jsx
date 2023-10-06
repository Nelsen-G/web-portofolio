"use client"
import React from 'react'

import ProjectsCard from './ProjectsCard'
import ProjectsTag from './ProjectsTag'

import { useState } from "react";
import { useRef } from "react";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "EcoGlobe",
    description: "A mobile app designed to unite individuals passionate about the environment, fostering a community dedicated to learning, taking action, and discussing environmental issues",
    image: "/images/thumbnailEco.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.figma.com/file/zHu2MbCImeVyza5QaKUNub/Penikmat-Design?type=design&node-id=0%3A1&mode=design&t=CIepK3vWTn20rxGp-1",
    previewUrl: "https://www.figma.com/file/zHu2MbCImeVyza5QaKUNub/Penikmat-Design?type=design&node-id=0%3A1&mode=design&t=CIepK3vWTn20rxGp-1",
  },
  {
    id: 2,
    title: "LelanginAja",
    description: "An exciting auction marketplace, offering users an interactive platform for buying and selling products through engaging bidding processes.",
    image: "/images/thumbnailLelang.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/ficopang/LelanginAja",
    previewUrl: "https://www.youtube.com/watch?v=xkBD6bgEyFU",
  },
  {
    id: 3,
    title: "KPopZtation",
    description: "An ASP.NET project that employs Domain Driven Design (DDD) principles, featuring a multi-layered website structure that includes views, controllers, handlers, repositories, factories, and models.",
    image: "/images/thumbnailKpop.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nelsen-G/KPopZtation-Project",
    previewUrl: "https://github.com/Nelsen-G/KPopZtation-Project",
  },
  {
    id: 4,
    title: "Bluejack Bookstore",
    description: "A versatile book-selling platform encompassing various genres, facilitating seamless book transactions and sales management.",
    image: "/images/thumbnailBluejack.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nelsen-G/Kelompok-1A-BADProject-Refactored",
    previewUrl: "https://github.com/Nelsen-G/Kelompok-1A-BADProject-Refactored",
  },
  {
    id: 5,
    title: "BajoLife",
    description: "An application designed to be the ultimate virtual tour guide for Labuan Bajo, offering insights into destinations, culinary delights, informative articles, guidebooks, and a vibrant community.",
    image: "/images/thumbnailBajo.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.figma.com/file/DhMyQx6VdtH4mNQilIEqMh/BajoLife?type=design&node-id=0%3A1&mode=design&t=b1HHdszPW0HYec71-1",
    previewUrl: "https://www.figma.com/file/DhMyQx6VdtH4mNQilIEqMh/BajoLife?type=design&node-id=0%3A1&mode=design&t=b1HHdszPW0HYec71-1",
  },
  {
    id: 6,
    title: "Airplane",
    description: "Airplane is the triumphant result of a Flutter Android Developer Bootcamp competition, clinching the 1st place spot.",
    image: "/images/thumbnailAirplane.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Nelsen-G/airplane-bootcamp",
    previewUrl: "https://github.com/Nelsen-G/airplane-bootcamp",
  },
  {
    id: 7,
    title: "MTGraphy",
    description: "a responsive website created for showcasing photography services and portfolios, tailored for web, tablet, and mobile viewing.",
    image: "/images/thumbnailMTGraphy.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Nelsen-G/MTGraphy",
    previewUrl: "https://www.figma.com/file/47yYP2D0aJolOMrYJUHVEX/MTGraphy-Prototype-Portofolio?type=design&node-id=98-8&mode=design",
  },
  {
    id: 8,
    title: "PISCIS Aquarium",
    description: "A website that presents captivating articles and mesmerizing sea creatures, aiming to inspire visitors to explore the wonders of the aquarium and deepen their appreciation for marine life.",
    image: "/images/thumbnailPiscis.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nelsen-G/piscis-aquarium-web",
    previewUrl: "https://github.com/Nelsen-G/piscis-aquarium-web",
  },
  {
    id: 9,
    title: "Mukicik",
    description: "An online music store that offers a platform for both members and sellers to trade musical instruments globally.",
    image: "/images/thumbnailMukicik.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nelsen-G/Mukicik-Backend",
    previewUrl: "https://github.com/Nelsen-G/Mukicik-Backend",
  },
  {
    id: 10,
    title: "NikahYuk",
    description: "A mobile application designed to simplify the process of finding wedding venues, such as ballrooms, hotels, gardens, and more.",
    image: "/images/thumbnailNikah.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.figma.com/file/HUiCyYoX8vw4qGPcSVilzu/NikahYuk?type=design&node-id=0-1&mode=design",
    previewUrl: "https://www.figma.com/file/HUiCyYoX8vw4qGPcSVilzu/NikahYuk?type=design&node-id=0-1&mode=design",
  },
  {
    id: 11,
    title: "Nelsen's Website",
    description: "Nelsen's Portfolio Website is an online showcase designed to introduce myself, showcase my projects, highlight my skills, and provide insights into my achievements, education, and professional experience.",
    image: "/images/thumbnailPorto.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },

];



const MyProjects = () => {

  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };


  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12" >
        Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectsTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectsTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectsTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectsCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}

            />

          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default MyProjects