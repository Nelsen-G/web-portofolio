"use client"

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const EmailMe = () => {
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
        y: -100,
      });
    }
  }, [inView, controls]);

  return (
    <section
      id="contact"
      className="flex justify-center items-center my-12 md:my-12 py-24 gap-4 relative"
    >
      <motion.div
        className="z-10 text-center"
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm actively exploring new opportunities, and I'm here to connect. Feel free to reach out with your questions or simply to say hello. I'll do my best to respond as soon as possible!
        </p>

        <div className="socials flex flex-row gap-6 justify-center">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logoGitHub.png"
              width={24}
              height={24}
              alt="Github Icon"
            />
            <a
              href="https://github.com/Nelsen-G"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nelsen's GitHub
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/logoLinkedIn.png"
              width={24}
              height={24}
              alt="Linkedin Icon"
            />
            <a
              href="https://www.linkedin.com/in/nelsengabriel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nelsen's LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EmailMe;
