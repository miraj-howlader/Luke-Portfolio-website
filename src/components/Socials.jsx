
import Link from "next/link"
import { FaGithub,FaTwitter,FaYoutube,FaLinkedin  } from "react-icons/fa";

const socials = [
    {icon:<FaGithub />, path:""},
    {icon:<FaTwitter />, path:""},
    {icon:<FaYoutube />, path:""},
    {icon:<FaLinkedin />, path:""},
]
const Socials = ({containerStyles,iconsStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item,index)=>{
        return <Link key={index} href={item.path} className={iconsStyles}>
        {item.icon}
        </Link>
      })}
    </div>
  )
}

export default Socials
