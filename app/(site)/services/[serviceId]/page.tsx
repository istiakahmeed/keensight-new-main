import { services } from "@/components/Services/servicesData";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: { serviceId: string };
}

const Page = ({ params }: PageProps) => {
  const serviceId = Number(params.serviceId);
  const service = services.find((s) => s.id === serviceId);

  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02] bg-[size:3rem_3rem] -z-10" />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-purple-600/5 dark:from-blue-600/10 dark:to-purple-600/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative">
          <Link
            href="/services"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white group transition-all duration-200"
          >
            <ArrowLeftIcon className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-medium">Back to Services</span>
          </Link>
          
          <div className="mt-12 mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 leading-tight">
              {service?.title}
            </h1>
          </div>
          
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12">
          {service?.description.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm
                         border border-gray-200 dark:border-gray-800
                         hover:border-transparent transition-all duration-300"
            >
              {/* Gradient Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="h-px flex-grow ml-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {item.text}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-600/10 dark:to-purple-600/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-white dark:bg-gray-900/50 rounded-2xl p-12 backdrop-blur-sm
                          border border-gray-200 dark:border-gray-800 text-center
                          hover:border-transparent transition-all duration-300 group">
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                  Ready to transform your business?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  Let's discuss how our {service?.title} service can help you achieve your goals
                </p>
                <button className="relative inline-flex items-center px-8 py-4 text-sm font-medium
                                 overflow-hidden rounded-xl group/btn">
                  <Link href="https://calendly.com/jerryahmed127/30min">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center text-white">
                    Start a Conversation
                    <ChevronRight className="ml-2 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;