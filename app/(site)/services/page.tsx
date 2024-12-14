
import ConsultationButton from "@/components/Hero/Button";
import { services } from "@/components/Services/servicesData";
import { GrServices } from "react-icons/gr";


const Services = () => {
  return (
    <>
      {/* <!-- ===== Services Start ===== --> */}
      <section
        id="services"
        className="transition-all duration-500 ease-in-out hover:shadow-xl overflow-hidden pb-10 lg:pb-25 xl:pb-30 bg-blue-50 dark:bg-inherit py-12 lg:py-16 xl:py-20"
      >
        <h2 className="relative mb-10 text-3xl font-bold text-black dark:text-white text-center">
          OUR ALL  SERVICES
        </h2>
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 bg-gray-300/20 dark:bg-gray-800/30 cursor-default flex flex-col h-full"
              >
                <h3 className="mb-2 sm:mb-4 text-lg sm:text-xl font-bold text-black dark:text-white">
                  {service.title}
                </h3>
                <ul className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 flex-grow list-none pl-0 space-y-2">
                  {service.description.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-blue-500 dark:text-blue-400">
                        {item.icon}
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <ConsultationButton buttonText="Schedule Consultation" icon={<GrServices />} className="mt-auto max-w-fit self-center" />
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
