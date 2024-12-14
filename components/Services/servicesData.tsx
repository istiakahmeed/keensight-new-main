import { AiOutlineAppstoreAdd, AiOutlineDollarCircle, AiOutlineLineChart, AiOutlineSetting } from "react-icons/ai";
import { BiBarChart, BiData } from "react-icons/bi";
import { FaBars, FaBuilding, FaBullhorn, FaCalculator, FaChartBar, FaChartLine, FaChartPie, FaCloud, FaCloudUploadAlt, FaCode, FaCogs, FaExclamationTriangle, FaHeartbeat, FaLanguage, FaLaptopCode, FaLock, FaMoneyBillAlt, FaPlug, FaProjectDiagram, FaRandom, FaRobot, FaRss, FaSearch, FaUsers, FaWrench } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { MdCloudUpload, MdOutlineAssessment, MdOutlineBuild, MdSecurity } from "react-icons/md";

export const services = [
  {
    title: "Generative AI Consulting",
    description: [
      { text: "Custom AI models for business challenges", icon: <FaCode /> },  // Replaced FormatCodeSettings with FaCode
      { text: "NLP for improved customer engagement", icon: <FaLanguage /> },
      { text: "AI strategy for maximizing ROI", icon: <FaChartLine /> },
      { text: "AI-driven process automation", icon: <FaRobot /> },
      { text: "Integration with business operations", icon: <FaProjectDiagram /> },
      { text: "Continuous performance tracking", icon: <MdOutlineAssessment /> },
    ],
  },
  {
    title: "Quantitative & Data Analytics",
    description: [
      { text: "Data strategy and governance frameworks", icon: <MdSecurity /> },
      { text: "Predictive analytics for strategic decisions", icon: <BiBarChart /> },
      { text: "Advanced machine learning techniques", icon: <FaRobot /> },
      { text: "Quantitative modeling for optimization", icon: <AiOutlineLineChart /> },
      { text: "Big Data processing and analysis", icon: <BiData /> },
      { text: "Custom data visualization and reporting", icon: <AiOutlineSetting /> },
    ],
  },
  {
    title: "Business Analytics Consulting",
    description: [
      { text: "Implementation of BI tools for insights", icon: <FaChartPie /> },
      { text: "Operational efficiency and profitability", icon: <FaCogs /> },
      { text: "KPI development and monitoring", icon: <MdOutlineAssessment /> },
      { text: "Market trend and competitive analysis", icon: <BiBarChart /> },
      { text: "Customized data dashboards", icon: <AiOutlineSetting /> },
      { text: "Strategic support for decision-making", icon: <AiOutlineLineChart /> },
    ],
  },
  {
    title: "Data Analytics",
    description: [
      { text: "Data collection and analysis for insights", icon: <BiData /> },
      { text: "Predictive analytics for trend forecasting", icon: <BiBarChart /> },
      { text: "Data cleansing and processing", icon: <AiOutlineLineChart /> },
      { text: "Data integration with business systems", icon: <FaProjectDiagram /> },
      { text: "Interactive data visualization", icon: <AiOutlineSetting /> },
      { text: "Custom reporting dashboards", icon: <MdOutlineAssessment /> },
    ],
  },
  {
    title: "Business Intelligence",
    description: [
      { text: "BI tool integration for actionable insights", icon: <FaChartPie /> },
      { text: "Data warehouse design and optimization", icon: <MdSecurity /> },
      { text: "Real-time data processing and analysis", icon: <AiOutlineSetting /> },
      { text: "Performance monitoring and reporting", icon: <FaCogs /> },
      { text: "KPI tracking and strategic reporting", icon: <MdOutlineAssessment /> },
      { text: "Data-driven decision support systems", icon: <AiOutlineLineChart /> },
    ],
  },
  {
    title: "Cloud Solutions",
    description: [
      { text: "Cloud strategy and implementation", icon: <FaCloud /> },
      { text: "Cloud architecture design and scaling", icon: <FaBuilding /> },
      { text: "Cloud migration and optimization", icon: <MdCloudUpload /> },
      { text: "Cost-effective cloud management", icon: <FaMoneyBillAlt /> },
      { text: "Secure data storage solutions", icon: <FaLock /> },
      { text: "Cloud-native app development", icon: <FaCode /> },
    ],
  },
  {
    title: "AI Consulting",
    description: [
      { text: "Custom AI model development", icon: <FaRobot /> },
      { text: "NLP and machine learning for business", icon: <FaLanguage /> },
      { text: "AI-driven decision-making tools", icon: <FaChartLine /> },
      { text: "Automating processes with AI", icon: <MdOutlineBuild /> },
      { text: "AI-based predictive analytics", icon: <FaChartBar /> },
      { text: "AI deployment and maintenance", icon: <FaCogs /> },
    ],
  },
  {
    title: "Marketing Analytics",
    description: [
      { text: "Data-driven marketing strategies", icon: <FaBullhorn /> },
      { text: "Campaign performance analysis", icon: <FaChartPie /> },
      { text: "Audience segmentation and targeting", icon: <FaUsers /> },
      { text: "Customer behavior analysis", icon: <FaHeartbeat /> },
      { text: "Market research and insights", icon: <FaSearch /> },
      { text: "A/B testing and optimization", icon: <FaRandom /> },
    ],
  },
  {
    title: "Financial Modeling",
    description: [
      { text: "Building financial forecasts", icon: <FaCalculator /> },
      { text: "Risk analysis and management", icon: <FaExclamationTriangle /> },
      { text: "Business valuation models", icon: <AiOutlineDollarCircle /> },
      { text: "Investment analysis and planning", icon: <FaChartLine /> },
      { text: "Cash flow modeling", icon: <FaMoneyBillAlt /> },
      { text: "Sensitivity and scenario analysis", icon: <FaBars /> },
    ],
  },
  {
    title: "Risk Analysis",
    description: [
      { text: "Risk assessment and mitigation strategies", icon: <MdOutlineAssessment /> },
      { text: "Quantitative risk modeling", icon: <AiOutlineLineChart /> },
      { text: "Regulatory compliance and reporting", icon: <MdSecurity /> },
      { text: "Market risk analysis", icon: <FaChartLine /> },
      { text: "Operational risk management", icon: <FaWrench /> },
      { text: "Enterprise risk management frameworks", icon: <AiOutlineSetting /> },
    ],
  },
  {
    title: "Data Integration",
    description: [
      { text: "Connecting disparate data systems", icon: <FaProjectDiagram /> },
      { text: "Data migration and synchronization", icon: <MdCloudUpload /> },
      { text: "Data warehousing and optimization", icon: <BiData /> },
      { text: "Real-time data integration", icon: <FaCloud /> },
      { text: "Cloud and on-premise integration", icon: <FaCloudUploadAlt /> },
      { text: "Seamless data flow across platforms", icon: <AiOutlineLineChart /> },
    ],
  },
  {
    title: "Custom Software Development",
    description: [
      { text: "Custom software tailored to business needs", icon: <FaCode /> },
      { text: "Web and mobile app development", icon: <FaLaptopCode /> },
      { text: "Software integration with business systems", icon: <FaPlug /> },
      { text: "End-to-end software lifecycle support", icon: <FaWrench /> },
      { text: "UI/UX design and optimization", icon: <AiOutlineAppstoreAdd /> },
      { text: "Agile development methodologies", icon: <FaRss /> },
    ],
  },
];
