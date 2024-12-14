"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import FAQItem from "./FAQItem";
import faqData from "./faqData";

const FAQ = () => {

  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  return (
    <>
      {/* <!-- ===== FAQ Start ===== --> */}
      <section
        id="faq"
        className="mt-40 overflow-hidden pb-10 md:pb-16 lg:pb-20 xl:pb-25 transition-all duration-700 ease-in-out"
      >
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 xl:px-0">
        <div className="absolute -bottom-16 -z-1 h-full w-full">
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-16">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left w-full md:w-2/5 lg:w-1/2 text-center xl:text-left lg:text-left"
            >
              <div className="font-bold p-5 pl-0 uppercase text-black dark:text-white text-4xl md:text-2xl lg:text-3xl">
                FAQS
              </div>
              <h2 className="relative mb-4 text-2xl font-bold text-black dark:text-white md:text-3xl lg:text-4xl xl:text-hero">
                Got Questions?
                <span className="relative block before:absolute before:bottom-2 before:left-0 before:-z-1 before:h-2 before:w-full">
                We Have Answers
                </span>
              </h2>
              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-2 text-black hover:text-primary dark:text-white dark:hover:text-primary text-sm md:text-base"
              >
                <div className="duration-300 group-hover:pr-2">
                  Still Have Questions? Contact Us
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right w-full md:w-3/5 lg:w-1/2"
            >
              <div className="rounded-xl bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection dark:hover:drop-shadow-[0_35px_35px_rgba(255,255,255,0.10)] hover:drop-shadow-2xl tansition-all duration-500 ease-in-out">
                {faqData.map((faq, key) => (
                  <FAQItem
                    key={key}
                    faqData={{ ...faq, activeFaq, handleFaqToggle }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== FAQ End ===== --> */}
    </>
  );
};

export default FAQ;
