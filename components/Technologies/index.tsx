"use client"
import { useRouter } from "next/navigation";
import { BiSolidDockTop } from "react-icons/bi";
import { technologies } from "./technologyData";

export default function TechnologiesPage() {

  const router = useRouter()

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    router.push("/technologies")
  }
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          Technologies We Utilize
        </h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          Our expertise spans a wide range of cutting-edge technologies and platforms:
        </p>
      </div>

      {/* Technologies Grid */}
      <div className="grid gap-8 md:grid-cols-3 mb-16">
        {technologies.slice(0, 6).map((tech, index) => (
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
                  {/* Button to view all services */}
                  <div className="flex items-center justify-center mt-12 text-center">
            <button
            onClick={handleClick}
              className="flex items-center justify-center rounded-full bg-black px-4 py-4 text-white duration-500 ease-in-out hover:bg-transparent hover:text-black hover:border border-black dark:hover:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
            >
              View All Technologies
            </button>
          </div>
    </div>
  );
}
