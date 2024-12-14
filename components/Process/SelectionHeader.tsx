type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
      <div className="animate_top mx-auto text-center mb-15 transition-opacity duration-1000 ease-out transform translate-y-0 opacity-100 hover:opacity-100">
        <div className="mb-4 inline-block rounded-full bg-zumthor px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection blur-3xl">
          <span className="text-sectiontitle font-medium text-black dark:text-white">
            {title}
          </span>
        </div>
        <h2 className="mx-auto mb-4 text-4xl font-extrabold leading-relaxed text-black dark:text-white md:w-4/5 xl:text-sectiontitle3">
          {subtitle}
        </h2>
        <p className="mx-auto text-lg leading-relaxed md:w-4/5 lg:w-3/5 xl:w-[46%]">
          {description}
        </p>
      </div>
      {/* <!-- Section Title End --> */}
    </>
  );
};

export default SectionHeader;
