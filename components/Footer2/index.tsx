import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 shadow-2xl dark:bg-blacksection text-center py-10">
      <div className="flex justify-center">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <a href="/" className="relative">
            <Image
              width={110}
              height={80}
              src="/images/logo/logo-light.svg"
              alt="KeenSight Analytics Logo"
              className="w-55 hover:scale-110 hover:drop-shadow-2xl dark:hidden rounded-lg transition-all duration-300"
            />
            <Image
              width={110}
              height={80}
              src="/images/logo/logo-dark.svg"
              alt="KeenSight Analytics Logo"
              className="w-55 hover:scale-110 hover:drop-shadow-2xl hidden dark:block rounded-lg transition-all duration-300"
            />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

