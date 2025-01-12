import { technologies } from "@/components/Technologies/technologyData"
import { BiSolidDockTop } from "react-icons/bi"
import TechnologyHero from "./TechnologyHero"

const Technologies = () => {
  return (
    <>
    <TechnologyHero/>
   <div id="technologies" className="container mx-auto px-4 py-16 min-h-screen">
         {/* Section Header */}
         <div className="text-center mb-16">
           <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
             Our All Technologies We Utilize
           </h1>
         </div>
   
         {/* Technologies Grid */}
         <div className="grid gap-8 md:grid-cols-3 mb-16">
           {technologies.map((tech, index) => (
             <div
               key={index}
               className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
             >
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="relative z-10">
                 <div
                   className={`w-12 h-12 mb-4 flex items-center justify-center ${tech.bgColor} text-white rounded-full`}
                 >
                   {tech.icon}
                 </div>
                 <h2 className="text-2xl font-bold mb-2">{tech.title}</h2>
                 <ul className="text-sm text-gray-600 space-y-2">
                   {tech.description.map((item, idx) => (
                     <li key={idx} className="flex items-center">
                       <span className="mr-2">{item.icon || <BiSolidDockTop className="text-gray-400" />}</span>
                       {item.text}
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
           ))}
         </div>
       </div>
       </>
  )
}

export default Technologies