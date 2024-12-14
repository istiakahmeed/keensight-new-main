"use client";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CheckCircleIcon } from '@heroicons/react/solid';
import SectionHeader from './SelectionHeader';

const workIcon = {
  icon: <CheckCircleIcon />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const starIcon = {
  icon: <CheckCircleIcon />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

const Process = () => {
  const timeline = [
    {
      icon: workIcon,
      date: 'Phase 1',
      title: 'Discovery & Assessment',
      subtitle: 'Technical Audit & Opportunity Identification',
      desc: 'We begin by gaining a comprehensive understanding of your business objectives, technological landscape, and competitive environment.',
    },
    {
      icon: workIcon,
      date: 'Phase 2',
      title: 'Strategic Planning',
      subtitle: 'Solution Design & ROI Projection',
      desc: 'Leverage our technical expertise to develop a customized strategy integrating advanced technologies into your business for maximum ROI.',
    },
    {
      icon: workIcon,
      date: 'Phase 3',
      title: 'Implementation',
      subtitle: 'Technology Deployment & Testing',
      desc: 'Our team executes the plan with precision, implementing AI models, analytics tools, and data management systems, ensuring minimal disruption.',
    },
    {
      icon: workIcon,
      date: 'Phase 4',
      title: 'Training & Enablement',
      subtitle: 'Technical Workshops & Support',
      desc: 'We empower your team with in-depth training and provide ongoing support to help you leverage new technologies effectively.',
    },
    {
      icon: workIcon,
      date: 'Phase 5',
      title: 'Optimization & Scaling',
      subtitle: 'Performance Monitoring & Scaling',
      desc: 'We track KPIs, refine solutions based on data-driven insights, and develop strategies to expand technological capabilities as your business grows.',
    },
  ];

  return (
    <section id='process' className="bg-gray-100 pt-5 dark:bg-inherit hover:shadow-2xl transition-all duration-700 ease-in-out">
      <div className="mx-auto max-w-7xl px-4 md:px-8 xl:px-0 py-4">
        <SectionHeader
          headerInfo={{
            title: "Process",
            subtitle: "Our Proven Path to Transformation",
            description: `🛤️ A Strategic Roadmap to Technological Excellence and Financial Success 💵`,
          }}
        />
        <VerticalTimeline>
          {timeline.map((t, i) => {
            const contentStyle = {
              borderRadius: '30px', // Add borderRadius property for rounded corners
              ...(i === 0 && { background: 'rgb(33, 150, 243)', color: 'black' }),
            };
            const arrowStyle =
              i === 0
                ? { borderRight: '9px solid rgb(33, 150, 243)', marginLeft: '-1px' }
                : { borderRight: '15px solid rgb(255,255,255)', marginLeft: '-1px' };

            return (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work transition-all duration-500 ease-in-out hover:scale-110 hover:drop-shadow-2xl dark:hover:drop-shadow-[0_35px_35px_rgba(255,255,255,0.40)]"
                contentStyle={contentStyle}
                contentArrowStyle={arrowStyle}
                date={t.date}
                {...t.icon}
                visible={true}
              >
                {t.title ? (
                  <>
                    <h3 className="vertical-timeline-element-title text-lg md:text-xl lg:text-2xl font-bold text-black">
                      {t.title}
                    </h3>
                    {t.desc && <p className="text-sm md:text-base lg:text-lg">{t.desc}</p>}
                  </>
                ) : undefined}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Process;
