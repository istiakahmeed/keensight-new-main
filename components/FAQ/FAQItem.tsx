import { useState, useRef, useEffect } from 'react';

type FaqData = {
  activeFaq: number;
  id: number;
  handleFaqToggle: (id: number) => void;
  quest: string;
  ans: string;
};

const FAQItem = ({ faqData }: { faqData: FaqData }) => {
  const { activeFaq, id, handleFaqToggle, quest, ans } = faqData;
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(activeFaq === id ? contentRef.current.scrollHeight : 0);
    }
  }, [activeFaq, id]);

  return (
    <div className="hover:bg-slate-300 hover:rounded-3xl flex flex-col border-b dark:hover:bg-slate-300 border-stroke last-of-type:border-none dark:border-strokedark dark:hover:text-black dark:hover:drop-shadow-[0_35px_35px_rgba(255,255,255,0.10)] hover:drop-shadow-2xl bg-gray-300/20 dark:bg-gray-800/30 backdrop-blur-md">
      <button
        onClick={() => {
          handleFaqToggle(id);
        }}
        className="flex cursor-pointer items-center justify-between text-left px-6 py-5 text-metatitle3 font-semibold text-black dark:hover:text-black dark:text-inherit lg:px-9 lg:py-7.5"
      >
        {quest}
        {activeFaq === id ? (
          <svg
            width="18"
            height="4"
            viewBox="0 0 18 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1666 0.833374H10.1666H7.83331H0.833313V3.16671H7.83331H10.1666H17.1666V0.833374Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.83331 7.83337V0.833374H10.1666V7.83337H17.1666V10.1667H10.1666V17.1667H7.83331V10.1667H0.833313V7.83337H7.83331Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>
      <div
        ref={contentRef}
        className="transition-all duration-200 overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <p className="border-t border-stroke px-6 py-5 dark:border-strokedark lg:px-9 lg:py-7.5 text-black dark:text-inherit">
          {ans}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
