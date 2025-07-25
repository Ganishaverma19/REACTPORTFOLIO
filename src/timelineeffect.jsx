import React from "react";
import { Timeline } from "./Components/ui/timeline";
import portfolio1 from './assets/portfolio1.png'
import portfolio2 from './assets/portfolio2.png'
import portfolio3 from './assets/portfolio3.png'
import portfolio4 from './assets/portfolio4.png'
import FuelHub1 from './assets/FuelHub1.png'
import FuelHub2 from './assets/FuelHub2.png'
import FuelHub3 from './assets/FuelHub3.png'
import FuelHub4 from './assets/FuelHub4.png'
import Nest1 from './assets/Nest1.png'
import Nest2 from './assets/Nest2.png'
import Nest3 from './assets/Nest3.png'
import Nest4 from './assets/Nest4.png'



export function TimelineDemo() {
  const data = [

    {
      title: "MAY 2025",
      content: (
        <div>
          <p
            className="mb-4  font-normal text-black text-xl  lg:text-2xl dark:text-neutral-300">
            🌐 Personal Resume Portfolio 
          </p>
          <div className="mb-8">

                <div
              className="flex items-center gap-2  text-md lg:text-xl text-black md:text-sm dark:text-neutral-300">
              ✅ A sleek personal portfolio website to showcase professional identity. 
            </div>
            <div
              className="flex items-center gap-2 text-md lg:text-xl text-black md:text-sm dark:text-neutral-300">
              ✅  Highlights skills, projects, certifications, and achievements.
            </div>
            <div
              className="flex items-center gap-2 text-md lg:text-xl text-black md:text-sm dark:text-neutral-300">
              ✅  Designed with clean visual hierarchy and modern design aesthetics.
            </div>
            <div
              className="flex items-center gap-2 text-md lg:text-xl text-black md:text-sm dark:text-neutral-300">
              ✅ Built using HTML5, CSS3, and deployed via Netlify.
            </div>
            <div
              className="flex items-center gap-2 text-md lg:text-xl text-black md:text-xl dark:text-neutral-300 mt-5">
               CLICK HERE TO ACCESS 👇
            </div>

          </div>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://ganishavermaportfolio.netlify.app" target="_blank" rel="noopener noreferrer">
            <img
              src={portfolio1}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
              </a>
            <img
              src={portfolio4}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src={portfolio3}
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src={portfolio2}
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },

    {
      title: "APRIL 2025",
      content: (
        <div>
          <p
            className="mb-3  font-normal text-black text-md lg:text-xl dark:text-neutral-200">
            🚀 FuelHub – Golf Themed E-Commerce Platform
          </p>

          <div className="mb-8">
            <div
              className="flex items-center gap-2 text-md lg:text-xl text-black md:text-sm dark:text-neutral-300">
              ✅  Showcased premium energy drinks and coffee shop offerings.
            </div>
            <div
              className="flex items-center gap-2 text-md lg:text-xl text-black md:text-sm dark:text-neutral-300">
              ✅ Featured sections for golf lessons, adventure golf, and local leagues.
            </div>
            <div
              className="flex items-center gap-2 text-md lg:text-xl text-black md:text-sm dark:text-neutral-300">
              ✅  Built using HTML, CSS, and JavaScript (GSAP Animation) for smooth navigation and UI.
            </div>
            <div
              className="flex items-center gap-2 text-md lg:text-xl text-black md:text-xl dark:text-neutral-300 mt-5">
               CLICK HERE TO ACCESS 👇
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
           
           <a href="https://fuelhub.netlify.app" target="_blank" rel="noopener noreferrer">
           <img
              src={FuelHub1}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
           </a> 
            <img
              src={FuelHub2}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src={FuelHub3}
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src={FuelHub4}
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "MARCH 2025",
      content: (
        <div>
          <p
            className="mb-2 text-md  font-normal text-black lg:text-xl dark:text-neutral-200">
            🏠 360Nest – Virtual Real Estate Explorer
          </p>
              <div className="mb-8">
            <div
              className="flex items-center gap-2 text-md lg:text-xl text-black md:text-sm dark:text-neutral-300">
              ✅ A real estate website offering 360° immersive property views.
            </div>
            <div
              className="flex items-center gap-2 text-md lg:text-xl text-black md:text-sm dark:text-neutral-300">
              ✅ Integrated Panormic View to let users explore properties in an interactive 360° environment.
            </div>
            <div
              className="flex items-center gap-2 text-md lg:text-xl text-black md:text-sm dark:text-neutral-300">
              ✅  Enhanced experience using GSAP animations and Locomotive Scroll for smooth transitions.
            </div>

                <div
              className="flex items-center gap-2 text-md lg:text-xl text-black md:text-sm dark:text-neutral-300">
              ✅  Built entirely with HTML, CSS, and JavaScript for dynamic, immersive walkthroughs.
            </div> 
            <div
              className="flex items-center gap-2 text-md lg:text-xl text-black md:text-xl dark:text-neutral-300 mt-5">
               CLICK HERE TO ACCESS 👇
            </div>

            
          </div>

          <div className="grid grid-cols-2 gap-4">
           <a href="https://360nest.netlify.app" target="_blank" rel="noopener noreferrer">
            <img
              src={Nest1}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            </a>
            <img
              src={Nest2}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src={Nest3}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src={Nest4}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    
    
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
