
import { services } from "@/components/Services/servicesData";
import { ChevronRight, Plus } from "lucide-react";
import Link from "next/link";
import ServicesHero from "./ServicesHero";

const Services = () => {
  return (
    <>
    <ServicesHero/>
      {/* <!-- ===== Services Start ===== --> */}
      <section className="py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02] bg-[size:3rem_3rem] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="text-blue-600 dark:text-blue-400 font-medium tracking-wider uppercase text-sm mb-4 inline-block">
            What we offer
          </span>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white relative inline-block">
            Our Services
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-50 blur-2xl group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 h-full
                            border border-gray-200 dark:border-gray-800
                            hover:border-transparent dark:hover:border-transparent
                            transition-all duration-500">
                {/* Service Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  {`0${index + 1}`}
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Service Features */}
                <ul className="space-y-4 mb-8">
                  {service.description.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-300 group/item">
                      <Plus className="mr-3 w-4 h-4 mt-1 text-blue-600 dark:text-blue-400 transform group-hover/item:rotate-45 transition-transform duration-300" />
                      <span className="group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-300">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Read More Link */}
                <Link 
                  href={`/services/${service.id}`}
                  className="absolute bottom-6 right-6 w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center
                           group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* <!-- ===== Services End ===== --> */}
    </>
  );
};

export default Services;
