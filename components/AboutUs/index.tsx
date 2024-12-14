import React from 'react';
import ConsultationButton from '../Hero/Button';
import Newsletter from '../Newsletter';
import { FaHandshake } from "react-icons/fa"; // Import another icon


const AboutUs = () => {
    return (
        <section id="aboutus" className="bg-gray-100 dark:bg-gray-900 py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Why Choose Keensight Analytics */}
                <h2 className="flex justify-center text-center pb-5 text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                    Why Choose Keensight Analytics?
                </h2>
                <div className="border-2 rounded-lg shadow-md dark:shadow-gray-800 overflow-x-auto transition-all ease-in-out duration-500 hover:scale-105 mb-12">
                    <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 bg-black dark:bg-gray-50 text-white dark:text-black text-left text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                    Aspect
                                </th>
                                <th className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 bg-black dark:bg-gray-50 text-white dark:text-black text-left text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                    Traditional Consulting
                                </th>
                                <th className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 bg-black dark:bg-gray-50 text-white dark:text-black text-left text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                    Keensight Analytics
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="even:bg-gray-100 dark:even:bg-gray-900 hover:bg-blue-200 dark:hover:bg-gray-700 transition-colors duration-300">
                                <td className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 text-black dark:text-white font-extrabold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors duration-300">
                                    Solution Approach
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 text-gray-600 dark:text-gray-50 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                    Generic
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 text-gray-600 dark:text-gray-50 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                    Customized Competitive Advantages
                                </td>
                            </tr>
                            <tr className="even:bg-gray-100 dark:even:bg-gray-900 hover:bg-blue-200 dark:hover:bg-gray-700 transition-colors duration-300">
                                <td className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 text-black dark:text-white font-extrabold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors duration-300">
                                    Technical Expertise
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 text-gray-600 dark:text-gray-50 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                    Limited
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 text-gray-600 dark:text-gray-50 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                    Deep Expertise in Software Development Processes and AI
                                </td>
                            </tr>
                            <tr className="even:bg-gray-100 dark:even:bg-gray-900 hover:bg-blue-200 dark:hover:bg-gray-700 transition-colors duration-300">
                                <td className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 text-black dark:text-white font-extrabold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors duration-300">
                                    Data Utilization
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 text-gray-600 dark:text-gray-50 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                    Basic Charts and Graphs , Shallow Insight
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 text-gray-600 dark:text-gray-50 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                    Robust Visualization Structure , Validated Insights
                                </td>
                            </tr>
                            <tr className="even:bg-gray-100 dark:even:bg-gray-900 hover:bg-blue-200 dark:hover:bg-gray-700 transition-colors duration-300">
                                <td className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 text-black dark:text-white font-extrabold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors duration-300">
                                    Services Investment Returns
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 text-gray-600 dark:text-gray-50 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                    Uncertain ROI , Unwarranted Failure
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 text-gray-600 dark:text-gray-50 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                    ROI Justified in Pre-Engagement Process
                                </td>
                            </tr>
                            <tr className="even:bg-gray-100 dark:even:bg-gray-900 hover:bg-blue-200 dark:hover:bg-gray-700 transition-colors duration-300">
                                <td className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 text-black dark:text-white font-extrabold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors duration-300">
                                    Engagement Model
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 text-gray-600 dark:text-gray-50 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                    Transactional Without Depth
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 text-gray-600 dark:text-gray-50 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                    Strategic Partnership , Mutual Growth
                                </td>
                            </tr>
                            <tr className="even:bg-gray-100 dark:even:bg-gray-900 hover:bg-blue-200 dark:hover:bg-gray-700 transition-colors duration-300">
                                <td className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 text-black dark:text-white font-extrabold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors duration-300">
                                    Innovation Ability
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 text-gray-600 dark:text-gray-50 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                    Reactive and Uncertain
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 md:p-4 lg:p-6 text-gray-600 dark:text-gray-50 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                    Proactive and Pioneering
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* Take the Next Leap */}
                <div className="mb-12 text-center">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                        Take the Next Leap in Your Business Evolution
                    </h3>
                    <p className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
                        Experience unparalleled technical excellence and financial growth by partnering with Keensight Analytics.
                        Unlock the full potential of your data assets and transform insights into tangible financial results.
                    </p>
                    <div className='flex justify-center'>
                        <div className='max-w-fit'>
                            <ConsultationButton buttonText='Schedule a Free Consultation' />
                        </div>
                    </div>
                </div>

                {/* About Keensight Analytics */}
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700 mb-12 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                    <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">About Keensight Analytics</h4>
                    <p className="mt-4 text-gray-700 dark:text-gray-200">
                        At Keensight Analytics, we are committed to propelling businesses into the future through sophisticated AI and data solutions.
                        Our team combines deep technical knowledge with strategic insight to deliver measurable financial results.
                    </p>
                    <p className="mt-4 mb-4 text-gray-700 dark:text-gray-300">
                        <strong className='dark:text-white'>P.S.</strong> In the world of data and AI, standing still means falling behind. Let's move forward together.
                    </p>
                    <ConsultationButton buttonText="Get in Touch" icon={<FaHandshake />}  className="max-w-fit " />


                </div>

                <Newsletter />
            </div>
        </section>
    );
};

export default AboutUs;
