'use client';

import { TypeAnimation } from "react-type-animation";

const AnimatedTyping = () => {
  return (
    <TypeAnimation
      sequence={[
        2000,
        "Innovative Consulting in Generative AI, Data Analytics, and Business Intelligence",
        3000,
        "",
        500,
      ]}
      speed={60}
      deletionSpeed={80}
      wrapper="p"
      cursor={true}
      repeat={Infinity}
      className="font-semibold text-2xl md:text-lg self-center lg:self-start xl:self-start"
      style={{ display: 'inline-block' }}
    />
  );
};

export default AnimatedTyping;