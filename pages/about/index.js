import React, { useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

import { v4 as uuidv4 } from "uuid";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
import Avatar from "../../components/Avatar";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-[100vh] bg-primary/30 py-32 text-center xl:text-left overflow-y-scroll">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-start justify-between xl:flex-row gap-x-4 pt-0 xl:pt-40">
        <div className="w-full max-w-[600px] flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="max-w-[576px] md:text-[48px] text-[26px] leading-[1] mb-4 xl:mb-6 font-bold"
          >
            I am a <span className="text-accent">Junior</span> Front End
            developer
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-2 xl:mb-12 px-2 xl:px-0 md:text-[16px] text-[15px]"
          >
            I am an undergraduate student at the University of Geological
            Sciences. I am passionate about web development. I worked at Simplex
            ITC for 3 months during my 2 years of study. I am still working at
            Simplex ITC.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div>
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={10} duration={5} /> +
                  </div>
                  <div className="uppercase text-xs tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years of experience
                  </div>
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div>
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={220} duration={5} /> +
                  </div>
                  <div className="uppercase text-xs tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years of experience
                  </div>
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div>
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={360} duration={5} /> +
                  </div>
                  <div className="uppercase text-xs tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years of experience
                  </div>
                </div>
              </div>

              <div className="relative flex-1">
                <div>
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={8} duration={5} /> +
                  </div>
                  <div className="uppercase text-xs tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years of experience
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[43%] h-[480px] pt-10 xl:pt-0"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, ind) => (
              <div
                key={item.id}
                className={`${
                  index === ind &&
                  "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(ind)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-3 items-center xl:items-start sm:overflow-hidden overflow-y-scroll sm:max-h-full max-h-[200px]">
            {aboutData[index].info.map((item) => (
              <div
                key={item.id}
                className="flex flex-col flex-1 md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light sm:text-[16px] text-[14px] mb-2 md:mb-0 ">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon) => (
                    <div key={icon.id} className="text-2xl text-white">
                      {icon.icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

const aboutData = [
  {
    id: uuidv4(),
    title: "skills",
    info: [
      {
        id: uuidv4(),
        title: "Web Development",
        icons: [
          {
            id: uuidv4(),
            icon: <FaHtml5 />,
          },
          {
            id: uuidv4(),
            icon: <FaCss3 />,
          },
          {
            id: uuidv4(),
            icon: <FaJs />,
          },
          {
            id: uuidv4(),
            icon: <FaReact />,
          },
          {
            id: uuidv4(),
            icon: <SiNextdotjs />,
          },
          {
            id: uuidv4(),
            icon: <SiFramer />,
          },
          {
            id: uuidv4(),
            icon: <FaWordpress />,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "UI/UX Design",
        icons: [
          {
            id: uuidv4(),
            icon: <FaFigma />,
          },
          {
            id: uuidv4(),
            icon: <SiAdobexd />,
          },
          {
            id: uuidv4(),
            icon: <SiAdobephotoshop />,
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "awards",
    info: [
      {
        id: uuidv4(),
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        id: uuidv4(),
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "experience",
    info: [
      {
        id: uuidv4(),
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        id: uuidv4(),
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        id: uuidv4(),
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "credentials",
    info: [
      {
        id: uuidv4(),
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        id: uuidv4(),
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        id: uuidv4(),
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];
