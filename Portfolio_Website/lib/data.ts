// Ensure proper typing for the data structures
export interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  tags: string[]
  demoUrl: string
  repoUrl: string
  featured: boolean
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  logo: string
  startDate: string
  endDate: string | null
  description: string
  achievements: string[]
  technologies: string[]
}

export const projects: Project[] = [
  {
    id: "healthpredict",
    title: "HealthPredict",
    description: "An AI-powered disease prediction platform capable of predicting multiple diseases like Diabetes, Stroke, Thyroid, Parkinson's, and Depression using FastAPI backend, MySQL, MongoDB and React frontend.",
    imageUrl: "/HealthPredict.jpg",
    tags: ["FastAPI", "Python", "React", "MySQL", "MongoDB", "Machine Learning"],
    demoUrl: "https://github.com/Aspect022/HealthPredict#readme",
    repoUrl: "https://github.com/Aspect022/HealthPredict",
    featured: true,
  },
  {
    id: "moneyfyi",
    title: "MoneyFyi - AI CFO for SMEs",
    description: "AI-powered financial intelligence platform detecting fraud, validating GST/TDS compliance, and forecasting cashflow for Indian businesses. Multi-agent system with OCR, anomaly detection, and WhatsApp alerts. Processes documents 10x faster than manual review.",
    imageUrl: "/MoneyFyi.png",
    tags: ["Next.js 16", "TypeScript", "Supabase", "FastAPI", "PaddleOCR", "Prophet", "AI Agents", "FinTech"],
    demoUrl: "https://money-fyi.vercel.app/",
    repoUrl: "https://github.com/Aspect022/MoneyFyi#readme",
    featured: true,
  },
  {
    id: "smart-evp",
    title: "SmartEVP - Smart Emergency Vehicle Platform",
    description: "End-to-end emergency medical service platform with AI-powered call automation, driver dashboard with navigation, patient vitals monitoring, and hospital selection. Features real-time emergency request processing and trip management. Reduces emergency response time through automated call processing.",
    imageUrl: "/smartevp.png",
    tags: ["Next.js 16", "TypeScript", "FastAPI", "Google Gemini API", "Leaflet Maps", "Healthcare", "Real-time"],
    demoUrl: "https://smart-evp.vercel.app/",
    repoUrl: "https://github.com/Aspect022/SmartEVP#readme",
    featured: true,
  },
  {
    id: "research2text",
    title: "Research2Text - Paper to Code Generator",
    description: "AI assistant that processes research papers with RAG-based querying and automatically generates executable PyTorch code from methodologies. Features self-healing validation, equation extraction, and artifact export. Bridges the gap between research and implementation.",
    imageUrl: "/Research2Text.png",
    tags: ["Python", "Streamlit", "ChromaDB", "Ollama", "PyTorch", "RAG", "Code Generation", "NLP"],
    demoUrl: "https://github.com/Aspect022/Research2Text",
    repoUrl: "https://github.com/Aspect022/Research2Text#readme",
    featured: true,
  },
  {
    id: "infinity-ai",
    title: "InfinityAI - AI Multi-Agent Development Platform",
    description: "Autonomous engineering organization simulation with specialized AI agents for CEO, PM, design, frontend, backend, and QA. Generates complete product deliverables from ideas with iterative refinement and real-time visualization. Reduces development cycles from weeks to hours.",
    imageUrl: "/infinityai.png",
    tags: ["Next.js 16", "Python", "FastAPI", "LangChain", "AI Agents", "Vector DB", "Automation"],
    demoUrl: "https://github.com/Aspect022/InfinityAI",
    repoUrl: "https://github.com/Aspect022/InfinityAI#readme",
    featured: true,
  },

  {
    id: "latex-humanizer",
    title: "LaTeX Humanizer - Academic Writing Assistant",
    description: "AI-powered LaTeX manuscript refinement tool with 7-dimensional risk analysis, semantic safety gates, and stylometric humanization. Preserves technical accuracy while reducing AI detection markers. Perfect for academic writing assistance.",
    imageUrl: "Humanizer.png",
    tags: ["Python", "NLP", "Transformers", "LaTeX", "Academic Writing", "Text Processing"],
    demoUrl: "https://github.com/Aspect022/Humanizer",
    repoUrl: "https://github.com/Aspect022/Humanizer#readme",
    featured: false,
  },
  {
    id: "threatpeek",
    title: "ThreatPeek - AI Security Scanner",
    description: "Security scanning platform with AI-powered vulnerability analysis, threat detection, and automated remediation suggestions. Features web app scanning, API testing, and comprehensive security reports. Multi-layer security analysis combining automated scanning with AI-driven threat assessment.",
    imageUrl: "/ThreatPeek_web.png",
    tags: ["TypeScript", "Next.js", "Express", "Vercel", "Render", "Cybersecurity", "Open Source"],
    demoUrl: "https://threat-peek.vercel.app",
    repoUrl: "https://github.com/Aspect022/ThreatPeek#readme",
    featured: true,
  },
  
  {
    id: "finai",
    title: "FinAI - Financial Analytics & Portfolio Management",
    description: "AI-powered financial analytics platform with portfolio management, market analysis, and ML-based investment recommendations. Real-time data processing and comprehensive visualization dashboards. Complete FinTech solution with frontend dashboard and FastAPI backend.",
    imageUrl: "/FinAI.png",
    tags: ["FastAPI", "Python", "React", "Machine Learning", "FinTech", "Portfolio Analytics"],
    demoUrl: "https://moneyfyi.vercel.app/dashboard",
    repoUrl: "https://github.com/Aspect022/FinAI#readme",
    featured: false,
  },
 
  {
    id: "predictive-maintenance",
    title: "Industrial Predictive Maintenance AI",
    description: "ML-powered predictive maintenance system for industrial equipment. Features time-series analysis, anomaly detection, and failure prediction to optimize maintenance schedules and reduce downtime. Real-world industrial application with proactive intervention capabilities.",
    imageUrl: "/PredectiveMaintenance.png",
    tags: ["Python", "Machine Learning", "Time Series", "IoT", "Anomaly Detection", "Industrial AI"],
    demoUrl: "https://futurista.vercel.app/",
    repoUrl: "https://github.com/Aspect022/Futurista#readme",
    featured: false,
  }, 
]

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "WhyDigit Pvt. Ltd",
    role: "Backend Developer Intern",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHLy3PoMaBupw/company-logo_200_200/company-logo_200_200/0/1677856901961/why_digit_system_private_limited_logo?e=2147483647&v=beta&t=7qhaKCz7mvpaFn4O6guToXjbJjvJ0zQFHs9yZh18mNU",
    startDate: "Jan 2025",
    endDate: "Feb 2025",
    description:
      "Worked as a Backend Developer Intern focusing on Java Spring Boot and SQL-based backend systems for data-driven applications.",
    achievements: [
      "Assisted in developing and maintaining backend systems for efficient data management and processing.",
      "Collaborated with the development team to ensure seamless integration of backend APIs and database solutions.",
      "Improved backend problem-solving and debugging skills while working on real-time business modules.",
    ],
    technologies: ["Java", "Spring Boot", "SQL", "MySQL"],
  },
  {
    id: "exp-2",
    company: "Humans Care Foundation",
    role: "Python & ML Intern",
    logo: "/logo.png",
    startDate: "Feb 2025",
    endDate: "Mar 2025",
    description:
      "Worked as a Python and Machine Learning Intern focusing on EDA, Data Analysis, and ML model development while contributing to multiple projects and team training initiatives.",
    achievements: [
      "Completed over 35+ Python projects specializing in Machine Learning, Data Analysis, EDA, and Feature Engineering.",
      "Led hands-on training sessions on NumPy, Pandas, Matplotlib, and Scikit-Learn for new interns.",
      "Gained expertise in GitHub collaboration and contributed to impactful, real-world data projects.",
      "Demonstrated strong technical and leadership skills through active project ownership and mentorship.",
    ],
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "GitHub"],
  },
  {
    id: "exp-3",
    company: "Humans Care Foundation",
    role: "Lead Software Developer",
    logo: "/logo.png",
    startDate: "June 2025",
    endDate: "July 2025",
    description: "Led the design, development, and deployment of the official website for Humans Care Foundation with integrated backend services, secure authentication, and multi-role access control.",
    achievements: [
      "Developed a fully responsive, SEO-optimized website using Next.js, TypeScript, and Firebase.",
      "Implemented a multi-role based access control system (Admin, Teacher, Student) with differentiated dashboard views.",
      "Integrated multiple authentication methods including Email/Password and Google Sign-In via Firebase Authentication.",
      "Deployed the live website with SSL security, domain management, and real-time database operations.",
      "Achieved over 100+ active users within the first month of launch.",
      "Attained a 97 Lighthouse performance score, ensuring fast load times, mobile responsiveness, and optimized SEO.",
      "Collaborated with stakeholders to gather requirements, iterate designs, and deliver a production-ready platform under strict deadlines.",
    ],
    technologies: ["Next.js", "TypeScript", "Firebase Authentication", "Firebase Realtime Database", "Firebase Hosting", "SEO Optimization", "Lighthouse Auditing"],
  },
]
