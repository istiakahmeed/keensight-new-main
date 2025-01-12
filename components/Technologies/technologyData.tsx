import { AiFillApi } from "react-icons/ai";
import { FaAngular, FaChartBar, FaCloud, FaDatabase, FaJava, FaNodeJs, FaPython, FaReact, FaRobot, FaTools } from "react-icons/fa";

// Technology data with additional 9 items
export const technologies = [
  {
    title: "Generative AI Tools",
    description: [
      { text: "OpenAI GPTs", icon: <FaRobot className="text-blue-500" /> },
      { text: "NVIDIA GPUs", icon: <FaRobot className="text-blue-500" /> },
      { text: "Anthropic", icon: <FaRobot className="text-blue-500" /> },
      { text: "Mistral", icon: <FaRobot className="text-blue-500" /> },
    ],
    icon: <FaRobot className="text-xl" />,
    bgColor: "bg-blue-500",
  },
  {
    title: "Data Analytics",
    description: [
      { text: "Tableau", icon: <FaChartBar className="text-green-500" /> },
      { text: "Power BI", icon: <FaChartBar className="text-green-500" /> },
      { text: "Google Analytics", icon: <FaChartBar className="text-green-500" /> },
      { text: "Apache Superset", icon: <FaChartBar className="text-green-500" /> },
    ],
    icon: <FaChartBar className="text-xl" />,
    bgColor: "bg-green-500",
  },
  {
    title: "Cloud Platforms",
    description: [
      { text: "AWS", icon: <FaCloud className="text-teal-500" /> },
      { text: "Azure", icon: <FaCloud className="text-teal-500" /> },
      { text: "Google Cloud", icon: <FaCloud className="text-teal-500" /> },
      { text: "DigitalOcean", icon: <FaCloud className="text-teal-500" /> },
    ],
    icon: <FaCloud className="text-xl" />,
    bgColor: "bg-teal-500",
  },
  {
    title: "Database Solutions",
    description: [
      { text: "PostgreSQL", icon: <FaDatabase className="text-purple-500" /> },
      { text: "MongoDB", icon: <FaDatabase className="text-purple-500" /> },
      { text: "Firebase", icon: <FaDatabase className="text-purple-500" /> },
      { text: "Redis", icon: <FaDatabase className="text-purple-500" /> },
    ],
    icon: <FaDatabase className="text-xl" />,
    bgColor: "bg-purple-500",
  },
  {
    title: "APIs and Integrations",
    description: [
      { text: "REST APIs", icon: <AiFillApi className="text-orange-500" /> },
      { text: "GraphQL", icon: <AiFillApi className="text-orange-500" /> },
      { text: "gRPC", icon: <AiFillApi className="text-orange-500" /> },
      { text: "WebSockets", icon: <AiFillApi className="text-orange-500" /> },
    ],
    icon: <AiFillApi className="text-xl" />,
    bgColor: "bg-orange-500",
  },
  {
    title: "DevOps Tools",
    description: [
      { text: "Docker", icon: <FaTools className="text-red-500" /> },
      { text: "Kubernetes", icon: <FaTools className="text-red-500" /> },
      { text: "Jenkins", icon: <FaTools className="text-red-500" /> },
      { text: "Terraform", icon: <FaTools className="text-red-500" /> },
    ],
    icon: <FaTools className="text-xl" />,
    bgColor: "bg-red-500",
  },
  // Additional 9 technologies
  {
    title: "Frontend Frameworks",
    description: [
      { text: "React", icon: <FaReact className="text-cyan-500" /> },
      { text: "Vue.js", icon: <FaReact className="text-cyan-500" /> },
      { text: "Angular", icon: <FaAngular className="text-red-500" /> },
    ],
    icon: <FaReact className="text-xl" />,
    bgColor: "bg-cyan-500",
  },
  {
    title: "Backend Frameworks",
    description: [
      { text: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { text: "Express.js", icon: <FaNodeJs className="text-green-500" /> },
      { text: "Django", icon: <FaPython className="text-yellow-500" /> },
    ],
    icon: <FaNodeJs className="text-xl" />,
    bgColor: "bg-green-500",
  },
  {
    title: "Programming Languages",
    description: [
      { text: "JavaScript", icon: <FaReact className="text-yellow-500" /> },
      { text: "Python", icon: <FaPython className="text-yellow-500" /> },
      { text: "Java", icon: <FaJava className="text-red-600" /> },
      { text: "Go", icon: <FaNodeJs className="text-blue-500" /> },
    ],
    icon: <FaReact className="text-xl" />,
    bgColor: "bg-yellow-500",
  },
  {
    title: "No Code Platforms",
    description: [
      { text: "Webflow", icon: <FaTools className="text-purple-500" /> },
      { text: "Bubble", icon: <FaTools className="text-purple-500" /> },
      { text: "Adalo", icon: <FaTools className="text-purple-500" /> },
    ],
    icon: <FaTools className="text-xl" />,
    bgColor: "bg-purple-500",
  },
  {
    title: "Machine Learning",
    description: [
      { text: "TensorFlow", icon: <FaRobot className="text-orange-500" /> },
      { text: "PyTorch", icon: <FaRobot className="text-orange-500" /> },
      { text: "scikit-learn", icon: <FaRobot className="text-orange-500" /> },
    ],
    icon: <FaRobot className="text-xl" />,
    bgColor: "bg-orange-500",
  },
  {
    title: "Version Control",
    description: [
      { text: "Git", icon: <FaTools className="text-blue-500" /> },
      { text: "GitHub", icon: <FaTools className="text-blue-500" /> },
      { text: "GitLab", icon: <FaTools className="text-blue-500" /> },
    ],
    icon: <FaTools className="text-xl" />,
    bgColor: "bg-blue-500",
  },
  {
    title: "Security Tools",
    description: [
      { text: "OWASP ZAP", icon: <FaTools className="text-red-500" /> },
      { text: "Burp Suite", icon: <FaTools className="text-red-500" /> },
      { text: "Wireshark", icon: <FaTools className="text-red-500" /> },
    ],
    icon: <FaTools className="text-xl" />,
    bgColor: "bg-red-500",
  },
  {
    title: "Business Tools",
    description: [
      { text: "Trello", icon: <FaTools className="text-blue-500" /> },
      { text: "Asana", icon: <FaTools className="text-blue-500" /> },
      { text: "Slack", icon: <FaTools className="text-blue-500" /> },
    ],
    icon: <FaTools className="text-xl" />,
    bgColor: "bg-blue-500",
  },
  {
    title: "Mobile Development",
    description: [
      { text: "React Native", icon: <FaReact className="text-cyan-500" /> },
      { text: "Flutter", icon: <FaTools className="text-indigo-500" /> },
      { text: "Swift", icon: <FaTools className="text-pink-500" /> },
    ],
    icon: <FaReact className="text-xl" />,
    bgColor: "bg-cyan-500",
  },
  {
    title: "Serverless Platforms",
    description: [
      { text: "AWS Lambda", icon: <FaCloud className="text-teal-500" /> },
      { text: "Google Cloud Functions", icon: <FaCloud className="text-teal-500" /> },
      { text: "Azure Functions", icon: <FaCloud className="text-teal-500" /> },
    ],
    icon: <FaCloud className="text-xl" />,
    bgColor: "bg-teal-500",
  },
];
