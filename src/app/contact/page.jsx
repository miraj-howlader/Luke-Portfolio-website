'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Select,SelectContent,SelectGroup,SelectItem
  ,SelectLabel,SelectTrigger,SelectValue
 } from "@/components/ui/select"

 import { FaPhoneAlt,FaEnvelope,FaMapMarkerAlt  } from "react-icons/fa";

const info = [
  {
    icon:<FaPhoneAlt />,
    title:"Phone",
    description:"(+88 017 3145 8068)"
  },
  {
    icon:<FaEnvelope />,
    title:"Email",
    description:"mirajhowlader9999@gmail.com"
  },
  {
    icon:<FaMapMarkerAlt />,
    title:"Address",
    description:"C/32 Mohammadpur Raybazar Dhaka R.MekupKhan"
  },
]

import { motion } from "framer-motion"
 const Contact = () => {
  return (
    <motion.section
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{delay:2.2,duration:0.4,ease:'easeIn'}
    }}
    className=" py-6"
    >
      <div className="container mx-auto">
        <div className=" flex flex-col xl:flex-row
         gap-[30px]">
          <div  className=" xl:w-[54%] order-2 xl:order-none">
            <form className=" flex flex-col gap-6
             p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-accent text-3xl">Let's Work together</h3>
              <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, impedit.</p>
             {/* input  */}
             <div className="   grid grid-cols-1 md:grid-cols-2
              gap-6">
              <Input type='firstname' placeholder="Firstname"/>
              <Input type='lastname' placeholder="Lastname"/>
              <Input type='email' placeholder="Email"/>
              <Input type='phone' placeholder="Phone number"/>
             </div>
             {/* select  */}
             <Select>
              <SelectTrigger className=' w-full'>
                <SelectValue placeholder='Select a services' />
              </SelectTrigger>

              <SelectContent>
               <SelectGroup>
               <SelectLabel>Select a service</SelectLabel>
               <SelectItem value='est'>Web development</SelectItem>
               <SelectItem value='cst'>UI/UX Design</SelectItem>
               <SelectItem value='mst'>Digital Marketing</SelectItem>
               </SelectGroup>
              </SelectContent>
             </Select>
             {/* text area  */}
             <Textarea
             className='h-[200px]'
             placeholder="Type your message here..."
             >

             </Textarea>
             {/* btn  */}
             <Button size='md' className='max-w-40'>Send message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center
           xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className=" flex flex-col gap-10">
            {
              info.map((item,index)=>{
                return <li key={index}
                className=" flex items-center gap-6"
                >
                  <div  className=" w-[52px] xl:w-[32px]
                   xl:h-[42px] bg-[#27272c] text-accent
                    rounded-md flex items-center  justify-center">
                    <div className=" text-[18px]">{item.icon}</div>
                  </div>
                  <div className=" flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <p >{item.description}</p>
                  </div>
                </li>
              })
            }
            </ul>
            </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
