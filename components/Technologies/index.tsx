import React from 'react';
import { FaDocker, FaAws, FaJenkins, FaDatabase } from "react-icons/fa";
import { GiProcessor } from "react-icons/gi";

import { SiTensorflow, SiPytorch, SiScikitlearn, SiTableau, SiPowerbi, SiD3Dotjs, SiApachehadoop, SiApachespark, SiMicrosoftazure, SiGooglecloud, SiOracle, SiMongodb, SiAmazonredshift, SiSnowflake, SiZapier, SiMake, SiSpacy, SiOpenai, SiAnthropic, SiKubernetes, SiApachekafka } from "react-icons/si";

import Image from 'next/image';

const TechnologiesWeUtilize = () => {
    const basePath = '/analyticshome1'; // Set basePath directly here for the test branch

    return (
        <section id="technologies" className="bg-gray-100 dark:bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
                    Technologies We Utilize
                </h2>
                <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
                    Our expertise spans a wide range of cutting-edge technologies and platforms:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Generative AI Tools */}
                    <div className="bg-gradient-to-r from-green-400 via-teal-300 to-blue-300 dark:bg-gradient-to-r dark:from-green-500 dark:via-teal-400 dark:to-blue-400 backdrop-blur-md p-6 rounded-lg shadow-2xl dark:shadow-[0_35px_35px_rgba(255,255,255,0.15)] hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Generative AI Tools
                        </h3>
                        <ul className="space-y-2 text-gray-800 font-semibold">
                            <li className="flex items-center"><SiOpenai className="mr-6" />OpenAI GPTs</li>
                            <li className="flex items-center"> <Image src="/nvidia.svg" alt="Nvidia Logo" width={24} height={24} className="mr-4" />NVIDIA GPUs</li>
                            <li className="flex items-center"><SiAnthropic className="mr-6" />Anthropic</li>
                            <li className="flex items-center"><Image src="/mistral.svg" alt="Mistral Logo" width={20} height={20} className="mr-5" />Mistral</li>
                        </ul>
                    </div>


                    {/* AI & ML Frameworks */}
                    <div className="bg-gray-300/20 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-default">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            Artificial Intelligence & Machine Learning Frameworks
                        </h3>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                            <li className="flex items-center"><SiTensorflow className="mr-2" /> TensorFlow</li>
                            <li className="flex items-center"><SiPytorch className="mr-2" /> PyTorch</li>
                            <li className="flex items-center"><SiScikitlearn className="mr-2" /> Scikit-learn</li>
                        </ul>
                    </div>

                    {/* Data Analytics */}
                    <div className="bg-gray-300/20 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-default">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            Data Analytics & Visualization Tools
                        </h3>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                            <li className="flex items-center"><SiTableau className="mr-2" /> Tableau</li>
                            <li className="flex items-center"><SiPowerbi className="mr-2" /> Power BI</li>
                            <li className="flex items-center"><SiD3Dotjs className="mr-2" /> D3.js</li>
                        </ul>
                    </div>

                    {/* Big Data Platforms */}
                    <div className="bg-gray-300/20 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-default">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            Big Data Platforms
                        </h3>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                            <li className="flex items-center"><SiApachehadoop className="mr-2" /> Hadoop</li>
                            <li className="flex items-center"><SiApachespark className="mr-2" /> Spark</li>
                            <li className="flex items-center"><SiApachekafka className='mr-2' />Kafka</li>
                        </ul>
                    </div>

                    {/* Cloud Services */}
                    <div className="bg-gray-300/20 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-default">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            Cloud Services
                        </h3>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                            <li className="flex items-center"><FaAws className="mr-2" /> AWS</li>
                            <li className="flex items-center"><SiMicrosoftazure className="mr-2" /> Azure</li>
                            <li className="flex items-center"><SiGooglecloud className="mr-2" /> Google Cloud Platform</li>
                        </ul>
                    </div>

                    {/* Databases & Data Warehouses */}
                    <div className="bg-gray-300/20 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-default">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            Databases & Data Warehouses
                        </h3>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                            <li className="flex items-center"><FaDatabase className="mr-2" /> SQL Server</li>
                            <li className="flex items-center"><SiOracle className="mr-2" /> Oracle</li>
                            <li className="flex items-center"><SiMongodb className="mr-2" /> MongoDB</li>
                            <li className="flex items-center"><SiAmazonredshift className="mr-2" /> Redshift</li>
                            <li className="flex items-center"><SiSnowflake className="mr-2" /> Snowflake</li>
                        </ul>
                    </div>

                    {/* Programming Languages */}
                    <div className="bg-gray-300/20 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-default">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        No Code Automation
                        </h3>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                            <li className="flex items-center"><SiZapier  className="mr-6" /> Zapier</li>
                            <li className="flex items-center"><SiMake className="mr-6" /> Make.com</li>
                            <li className="flex items-center"> <Image src="/n8n.svg" alt="n8n Logo" width={24} height={24} className="mr-4" />n8n</li>
                        </ul>
                    </div>

                    {/* DevOps & Automation Tools */}
                    <div className="bg-gray-300/20 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-default">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            DevOps & Automation Tools
                        </h3>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                            <li className="flex items-center"><FaDocker className="mr-2" /> Docker</li>
                            <li className="flex items-center"><SiKubernetes className='mr-2' />Kubernetes</li>
                            <li className="flex items-center"><FaJenkins className="mr-2" /> Jenkins</li>
                        </ul>
                    </div>

                    {/* NLP Technologies */}
                    <div className="bg-gray-300/20 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-default">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            Natural Language Processing Technologies
                        </h3>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                            <li className="flex items-center"><GiProcessor className='mr-2' />BERT</li>
                            <li className="flex items-center"><SiOpenai className="mr-2" />GPT Models</li>
                            <li className="flex items-center"><SiSpacy className="mr-2" /> SpaCy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologiesWeUtilize;
