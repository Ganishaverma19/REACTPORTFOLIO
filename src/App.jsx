
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaMoon } from 'react-icons/fa'
import { FaLinkedin ,FaGithub} from 'react-icons/fa'
import img from './assets/img.png'
import './App.css'
import { FaHtml5,FaCss3Alt,FaJs,FaReact} from 'react-icons/fa'
import { SiTailwindcss,SiCplusplus } from 'react-icons/si'
import { CardHoverEffectDemo } from './Cardhover'
import { TimelineDemo } from './timelineeffect'
import Timeline from "./Components/ui/roadmap";
import { useState } from 'react';
import Contact from './Components/Contact/Contact.jsx'


function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false);

  return (
       <div className={darkMode ? "dark" : ""}>
        <head>
          <meta charset="UTF-8" /> 
          <meta name="description" content="Ganisha's React portfolio site"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
           <title> Ganisha Verma </title>
        </head>
        <main className="w-full min-h-screen bg-zinc-200 dark:bg-zinc-900 text-black dark:text-white px-5 lg:px-10">
          <section className='h-screen w-full'>
          <nav className=' py-10 px-5  flex justify-between'>
            <h1 className=' text-md lg:text-2xl  font-black font-Montseerat'>Ganisha Verma</h1>
            <ul className='flex items-center gap-2 lg:gap-5'>
              <li>
                <FaMoon onClick={()=> setDarkMode(!darkMode)} className=' text-md lg:text-xl cursor-pointer '/>
              </li>
              <li>
                <a className =" bg-gradient-to-r from-cyan-500 to-teal-500 rounded px-2 py-1 lg:px-4 lg:py-2" href="src/assets/RESUME.pdf" target="_blank" rel="noopener noreferrer">Resume </a>
              </li>
            </ul>
          </nav> 
          <div className='text-center p-5  mt-40 lg:mt-2  lg:p-10'>
             <h2 className='  text-3xl lg:text-5xl py-2 text-teal-600 font-medium'>Hi I'm Ganisha Verma</h2>
             <h3 className='text-2xl py-2'>Frontend Developer</h3>
                <p className=' w-1/8 lg:w-1/2 lg:mx-auto text-sm lg:text-md py-5  text-zinc-500  lg:leading-9'>Enthusiastic fresher with a solid foundation in C++ and hands-on experience
                   in front-end technologies including HTML5, CSS3, JavaScript, and React. 
                   Passionate about building visually appealing, user-friendly interfaces
                    with smooth and engaging animations.
                </p>
          </div>
          <div className=' text-4xl lg:text-5xl flex justify-center gap-16 py-4 '> 
             <FaLinkedin/>
             <FaGithub/>
            <img src="public/leetcode.png" alt="LeetCode" className=' w-7  h-8  lg:w-10 lg:h-11'/>
          </div>
          <div className='flex justify-center py-4 '>
              <img src={img} alt="Avtar" className="w-40 h-40 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"/>
          </div>
          </section>
          <section>
            <h3 className ='  text-3xl lg:text-5xl py-2 text-teal-600 text-center  mt-20'>SKILLS</h3>
            
            <div className='flex justify-center text-5xl'>
            <FaHtml5 className='text-red-500' />
            <FaCss3Alt className='text-yellow-500'/>
            <SiTailwindcss className='text-blue-600' />
            <FaJs className='text-yellow-500' />
            <FaReact className='text-blue-500' />
            <SiCplusplus  className='text-blue-900'/>
            </div>
             <CardHoverEffectDemo />
          </section>
          <section>
            <h3 className =' text-3xl lg:text-5xl py-2 text-teal-600 text-center mt-20'>PROJECTS</h3>
            <TimelineDemo />
          </section>
          <section>
            <h3 className='text-3xl lg:text-5xl py-2 text-teal-600 text-center mt-20 mb-10'>EDUCATION</h3>
            <Timeline />
          </section>
          <section>
            <h2 className=' text-3xl lg:text-5xl text-teal-600 text-center mt-20  mb-3 lg:mt-48   lg:mb-6'>CONTACT ME </h2>
            <Contact/>
          </section>
        </main>
       </div>
  )
}

export default App
