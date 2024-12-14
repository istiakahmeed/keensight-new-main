import AnimatedTyping from './HeroTypeanimtion';
import ConsultationButton from "./Button";
import { FaUserTie } from "react-icons/fa";


export default function Hero() {

  return (
    <section className="bg-gray-50 dark:bg-inherit shadow-md rounded-xl overflow-hidden py-10 md:py-20 min-h-screen flex items-center relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-8 xl:gap-16">

        {/* Text and Button Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h4 className="text-xl sm:text-2xl xl:text-3xl pb-2 sm:pb-4 font-light text-black dark:text-white">
            🚀 Keensight Analytics
          </h4>
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            Empowering Businesses Through
            <span className="block mt-2 text-blue-600">
              Advanced Data and AI Solutions
            </span>
          </h1>
          <div className='h-25 sm:h-20'><AnimatedTyping /></div>

          <div className='mt-16 sm:mt-10'>
            <ConsultationButton buttonText='Get Expert Advice' icon={<FaUserTie />} />
          </div>
        </div>

        {/* Image and Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0">
          {/* Image Section */}
          <div className="w-full flex justify-center relative mb-6">
            <div className="relative aspect-[700/444] w-full max-w-md lg:max-w-none">
              <img
                className="rounded-2xl object-cover w-full h-full"
                src="/images/hero/USA.jpg"
                alt="Hero"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="max-w-md lg:max-w-none">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-black dark:text-white">
              Transforming Businesses with AI & Data
            </h2>
            <p className="text-sm sm:text-base text-black dark:text-gray-400">
              At Keensight Analytics, we specialize in transforming businesses by harnessing cutting-edge technologies in generative AI, data analytics, and business intelligence. Our team delivers tailored solutions that enhance operational efficiency, elevate decision-making, and significantly boost your bottom line.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
