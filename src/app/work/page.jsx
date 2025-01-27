"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import WorkSliderBtn from "@/components/WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum  adipisicing elit. Placeat ducimus delectus repellat odio quo ipsa!",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "Lorem ipsum  adipisicing elit. Placeat ducimus delectus repellat odio quo ipsa!",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Lorem ipsum  adipisicing elit. Placeat ducimus delectus repellat odio quo ipsa!",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "React.js" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const  handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=" min-h-[80vh] flex flex-col justify-center py-12
     xl:py-0"
    >
      <div className=" container mx-auto">
        <div className=" flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className=" w-full xl:w-[50%] xl:h-[460px]
           flex flex-col xl:justify-between order-2 xl:order-none"
          >
            <div className=" flex flex-col gap-[30px] h-[50%]">
              <div className=" text-4xl leading-none font-extrabold
               text-transparent text-outline">
                {project.num}
              </div>
              {/* project category  */}
              <h2
              className=" text-[24px] font-bold leading-none
               text-white group-hover:text-accent transition-all
                duration-500 capitalize "
              >{project.category} project</h2>
              {/* project description  */}
              <p className=" text-white/60">{project.description}</p>
              {/* stock  */}
              <ul className=" flex gap-4">
                {project.stack.map((item,index)=>{
                  return <li key={index}
                  className=" text-xl text-accent"
                  >{item.name}
                  {index !== project.stack.length -1 && ","}
                  </li>
                })}
              </ul>

              {/* border  */}
              <div className="border border-white/20"></div>
              {/* buttons  */}
              <div className=" flex items-center gap-4">
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger
                    className=" w-[70px] h-[70px] rounded-full
                     bg-white/5 flex justify-center items-center
                      group"
                    >
                      <BsArrowUpRight 
                      className=" text-white text-3xl
                       group-hover:text-accent"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>

                {/* github project  */}
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger
                    className=" w-[70px] h-[70px] rounded-full
                     bg-white/5 flex justify-center items-center
                      group"
                    >
                      <FaGithub
                      className=" text-white text-3xl
                       group-hover:text-accent"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className=" w-full xl:w-[80%]">
            <Swiper spaceBetween={30}
            slidesPerView={1}
            className=" xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map((project,index)=>{
                return <SwiperSlide key={index} className=" w-full">
                        <div className=" h-[468px]   relative
                         group flex justify-center items-center
                          bg-pink-50/20">

                            <div
                            className=" absolute top-0 bottom-0
                             w-full h-full bg-black/10 z-10"
                            ></div>
                            <div className=" relative w-full h-full">
                              <Image 
                              src={project.image}
                              fill
                              className=" object-cover"
                              alt=""
                              />
                              
                            </div>

                        </div>
                </SwiperSlide>

                
              })}
              
               {/* workslider btn  */}
               <WorkSliderBtn 
               containerStyle='flex gap-2 absolute right-0
                bottom-[calc(50%_-_22px)] xl:bottom-0
                 z-20 w-full justify-between xl:w-max xl:justify-none'
               btnStyle='bg-accent hover:bg-accent-hover text-primary
                text-[22px] w-[44px] h-[44px] flex 
                 justify-center items-center transition-all'
               
               />

            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
