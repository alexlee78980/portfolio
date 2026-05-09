import Image from 'next/image';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import Slideshow from './Slideshow';
interface ProjectItemProps{
  description:string;
  title:string;
  tech:string[];
  github:string;
  year:string;
  demo:string;
  num:number;
  images:string[];
  tagline:string;
}
const ProjectItem = ({description, title, tech, github, year, demo, num, images, tagline}: ProjectItemProps) => {
  return <div className={`flex h- w-full ${num % 2 !== 0 ? "flex-row-reverse" : ""} mt-10`}>
  <div className="w-1/2 h-100 relative flex-shrink-0">
    {/* <Image  
      src="/img/images.png" 
      fill
      className={`object-cover ${num % 2 !== 0 ? "rounded-r-full" : "rounded-l-full"}`}
      alt={title}
    /> */}
    <Slideshow num={num} images={images}/>
  </div>
  <div className='mx-10 flex flex-col w-1/2 overflow-hidden'>
    <div className='flex justify-between'>
      <div className='font-bold'>{title}</div>
      <div className='text-gray-400 text-sm'>{year}</div>
    </div>
    <div className="text-gray-500 text-sm mt-1 italic mb-4">{tagline}</div>
    {tech && (
      <div className='flex flex-wrap gap-2 mb-4'>
        {tech.map((t) => (
          <div key={t} className='px-4 border border-gray-500 rounded-full text-sm'>{t}</div>
        ))}
      </div>
    )}
    <div className='flex-1 overflow-hidden text-ellipsis'>{description}</div>
    <div className='flex gap-4 mt-4 justify-between'>
      {demo && <a href={demo} target="_blank" className='text-blue-500'>Live Demo</a>}
      {github && <a href={github} target="_blank" className='text-blue-500'><FaGithub size={24} /></a>}
    </div>
  </div>
</div>
  
}

export default ProjectItem