import { HoverEffect } from "./Components/ui/card-hover-effect";

 

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "HTML5",
    description:
     "Crafts well-structured, accessible web pages using semantic tags with clean, maintainable code across modern browsers.",    
  },
  {
    title: "CSS3",

    description:
"Applies modern features like Flexbox and Grid to build responsive, pixel-perfect layouts for all screen sizes.",    
  },
  {
    title: "Tailwind",
    description:
      "	Tailwind helps me build sleek, responsive UIs fast. With utility-first classes and custom components, I maintain design consistency without writing bulky CSS",
          
    
  },
  {
    title: "JavaScript",
    description:
      "Writes modular, clean ES6+ JavaScript to power dynamic interactions and API integrations. I’m confident with DOM manipulation, fetch APIs, and event-driven logic.",
  },
  {
    title: "React",
    description:
      "Familiar with React fundamentals including components, JSX, props, and basic state management. Able to create simple interactive UIs and understand the component-based architecture of React applications.",
  },
  {
    title: "C++",
    description:
      "	With C++, I focus on problem-solving, object-oriented design, and efficient data structure implementations — solidifying my foundation in algorithms and logic.",
  },
  
];

