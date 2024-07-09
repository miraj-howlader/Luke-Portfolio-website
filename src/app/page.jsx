import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section>
      <div className="container mx-auto h-full">
        <div
          className=" flex flex-col xl:flex-row items-center justify-between
          xl:pt-8 xl:pb-24"
        >
          {/* text  */}
          <div className=" text-center xl:text-left order-2 xl:order-none">
            <span className=" text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className=" text-accent">Luke Coleman</span>
            </h1>
            <p className=" max-w-[500px] text-white/80 mb-4">
              I except at crafting elegant digital experience and I am
              proficient in various programming language and technologies.
            </p>
            {/* btn and social icon  */}
            <div className=" flex flex-col xl:flex-row items-center gap-8">
              <Button variant='outline' size='lg'
              className=' uppercase flex items-center gap-2'>
                <span>Download CV</span>
                <FiDownload />
              </Button>

              <div className=" mb-8 xl:mb-0">
                <Socials 
                containerStyles='flex gap-2'
                iconsStyles='w-9 h-9 border-accent rounded-full flex
                 justify-center items-center text-accent text-base
                  hover:bg-accent hover:text-primary hover:transition-all
                   duration-500 '
                />
              </div>
            </div>
          </div>
          {/* phto  */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}