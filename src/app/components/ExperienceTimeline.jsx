"use client"

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import VideocamIcon from '@mui/icons-material/Videocam';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Typography from '@mui/material/Typography';

const ExperienceTimeline = () => {
  const [tag, setTag] = useState("All");

  const items = [
    {
      imageSrc: "/images/IsfestJuara4.jpg",
      title: "4th Place Winner",
      subtitle: "UI/UX Competition at ISFEST 2023",
      date: "September 2023",
      content: "My team 'PenikmatDesign' proudly secured 4th place in the UI/UX Competition at ISFEST 2023, hosted by Universitas Kristen Satya Wacana in Salatiga. Selected as one of the top 12 finalists, we tackled a challenging 12-hour task that involved conducting user research using the design thinking method and designing the user interface for EcoGlobe, an application aimed at combatting climate change. Our team presented our innovative project to the jury, showcasing our commitment to user-friendly design and creative problem-solving."
    },
    {
      imageSrc: "/images/FlutterJuara1.jpg",
      title: "1st Place Winner",
      subtitle: "Best Flutter Project in Android Developer Bootcamp",
      date: "December 2022",
      content: "I emerged as the 1st place winner in the Flutter Android Developer Bootcamp's Best Project competition. The challenge was to transform UI/UX designs from Figma into a responsive Flutter project. My project secured the top position by closely matching and excelling in responsiveness compared to the original UI/UX designs in Figma."
    },
    {
      imageSrc: "/images/HIMTI1.jpg",
      title: "1st Place Winner",
      subtitle: "HIMTI BINUS Coding Battle",
      date: "September 2021",
      content: "Achieved 1st place in the HIMTI BINUS Coding Battle, a week-long competition hosted by Progate in collaboration with HIMTI BINUS. The goal was to accumulate the highest points using various programming languages like Git, HTML, CSS, JavaScript, PHP, Java, Python, Command Line, SQL, and Sass."
    },
    {
      imageSrc: "/images/Best4.jpg",
      title: "The Best 4 Graduates Awardee",
      subtitle: "Bukit Sion High School",
      date: "June 2021",
      content: "Graduated with an Outstanding Average of 93.20."
    },
    {
      imageSrc: "/images/Physics.jpg",
      title: "Excellence in Physics",
      subtitle: "Bukit Sion High School",
      date: "June 2021",
      content: "Awarded for Excellence in Physics."
    },
    {
      imageSrc: "/images/PhysicsFinal.jpg",
      title: "Physics Final Assignment Distinction Award",
      subtitle: "Bukit Sion High School",
      date: "June 2021",
      content: "Recognized for Best Paper Presentation in Physics."
    },
    {
      imageSrc: "/images/PsychoFinal.jpg",
      title: "Psychology Final Assignment Distinction Award",
      subtitle: "Bukit Sion High School",
      date: "June 2021",
      content: "Secured the Top Score in Psychology."
    },
    {
      imageSrc: "/images/ChemistryFinal.jpg",
      title: "Chemistry Final Assignment Distinction Award",
      subtitle: "Bukit Sion High School",
      date: "June 2021",
      content: "Achieved Chemistry Best Final Paper Report."
    },
    {
      imageSrc: "/images/Penabur3.jpg",
      title: "3rd Place Winner",
      subtitle: "Bulan Bahasa Ibu Internasional",
      date: "January 2020",
      content: "My team secured 3rd place in the 'Bulan Bahasa Ibu Internasional' competition, hosted by 'BPK Penabur' under the theme 'Aku Cinta Bahasa dan Budaya Indonesia.' The competition aimed to raise awareness about Indonesian culture to prevent it from being forgotten. Our team created a compelling video titled 'Aku Indonesia' to inspire young individuals to take pride in their Indonesian heritage and contribute to cultural preservation."
    }
  ];

  return (
    <section id="experience" style={{ marginTop: '80px' }}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Achievements
      </h2>

      <Timeline position="alternate">
        {items.map((item, index) => {
          const controls = useAnimation();
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0,
          });

          useEffect(() => {
            if (inView) {
              controls.start({
                opacity: 1,
                y: 0,
              });
            } else {
              controls.start({
                opacity: 0,
                y: 100,
              });
            }
          }, [inView, controls]);

          const isEven = index % 2 === 0;
          const alignItemsStyle = isEven ? 'flex-start' : 'flex-end'; // Adjust alignment for even and odd items

          return (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0', display: 'flex', flexDirection: 'column', alignItems: isEven ? 'flex-end' : 'flex-start' }}
                align={isEven ? 'right' : 'left'}
                variant="body"
                color="white"
              >
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 100 }}
                  animate={controls}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                >
                  <div style={{ width: '400px', height: '300px', borderRadius: '10px', overflow: 'hidden', marginBottom: '14px' }}>
                    <img
                      src={item.imageSrc}
                      alt="Winner Image"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <Typography variant="h6" component="span" style={{ fontWeight: 'bold' }}>
                      {item.title}
                    </Typography>
                    <Typography>{item.subtitle}</Typography>
                    {item.date}
                  </div>
                </motion.div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                <TimelineDot color="primary">
                  {index === 0 ? <DesignServicesIcon /> : index === 1 ? <AppSettingsAltIcon /> : index === 2 ? <IntegrationInstructionsIcon /> : index === 3 ? <VideocamIcon /> : index === 4 ? <EmojiEventsIcon /> : index === 5 ? <ThumbUpIcon /> : index === 6 ? <CoPresentIcon /> : index === 7 ? <WorkspacePremiumIcon /> : <AssessmentIcon />}
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: alignItemsStyle }}>
                <div style={{ maxWidth: '80%', wordWrap: 'break-word' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                  >
                    <Typography align="justify">{item.content}</Typography>
                  </motion.div>
                </div>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </section>
  );
}

export default ExperienceTimeline;