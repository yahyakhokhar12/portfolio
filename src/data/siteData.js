export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'Experience', to: '/experience' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Contact', to: '/contact' }
];

export const roles = [
  'Power BI Developer',
  'ML/AI Developer',
  'MERN Stack Developer',
  'Data Analyst',
  'Web Developer'
];

export const stats = [
  { label: 'Projects Completed', value: '6+' },
  { label: 'Certifications', value: '5+' },
  { label: 'Technologies', value: '20+' },
  { label: 'Clients', value: '6+' }
];

export const projects = [
  {
    id: 1,
    title: 'Daily Sales Backlog Report',
    category: 'Power BI',
    description: 'Executive backlog visibility with order aging, cycle time analysis, and regional performance insights.',
    image: '/2.png',
    technologies: ['Power BI', 'Excel', 'DAX'],
    github: 'https://github.com/yahyakhokhar12/Daily-Sales-Backlog-Report',
    live: 'https://drive.google.com/file/d/19kvrD2TTZxC7JL51ejU31-ahHcESy2B4/view?usp=drive_link',
    featured: true
  },
  {
    id: 2,
    title: 'Sales and Order Performance Dashboard',
    category: 'Power BI',
    description: 'Revenue optimization dashboard for trend analysis, fulfillment bottlenecks, and ratio insights.',
    image: '/1.png',
    technologies: ['Power BI', 'Excel', 'Analytics'],
    github: 'https://github.com/yahyakhokhar12/Sales-and-order-performance-dashboard',
    live: 'https://drive.google.com/file/d/1N165dy9LncyLquS4zIZpRS3kJ7I01C5d/view?usp=drive_link',
    featured: true
  },
  {
    id: 3,
    title: 'Invoice Data and Inventory Overview',
    category: 'Data Analytics',
    description: 'Multi-currency invoice intelligence and inventory control with fast, interactive filtration.',
    image: '/3.png',
    technologies: ['Power BI', 'SQL', 'Excel'],
    github: 'https://github.com/yahyakhokhar12/Invoice-Data-and-Inventory-Overview',
    live: 'https://drive.google.com/file/d/1_slZHLkBMDulm-k3dg9weu1d_e47_w8z/view?usp=drive_link',
    featured: false
  },
  {
    id: 4,
    title: 'Company Sales Dashboard',
    category: 'Power BI',
    description: 'Sales performance hub for segmentation, profit analysis, and strategic planning.',
    image: '/4.png',
    technologies: ['Power BI', 'Excel', 'Reporting'],
    github: 'https://github.com/yahyakhokhar12/Company-Sales-Dashboard',
    live: 'https://drive.google.com/file/d/1JO0UhPOUaZ2EkDy6QNVECXp0XyQWOFHl/view?usp=drive_link',
    featured: true
  },
  {
    id: 5,
    title: 'Employee Information Dashboard',
    category: 'Data Analytics',
    description: 'HR analytics for headcount, salary benchmarking, and compensation distribution.',
    image: '/5.png',
    technologies: ['Power BI', 'SQL', 'HR Analytics'],
    github: 'https://github.com/yahyakhokhar12/Employee-Information-Dashboard',
    live: 'https://drive.google.com/file/d/1ALTSCzgVmI291A8NIeEmAeV9F6xaoyjC/view?usp=drive_link',
    featured: false
  },
  {
    id: 6,
    title: 'Financial Performance Analytics',
    category: 'Power BI',
    description: 'Executive financial reporting with bridge analysis, EBITDA trends, and working capital insights.',
    image: '/6.png',
    technologies: ['Power BI', 'SQL', 'Finance'],
    github: 'https://github.com/yahyakhokhar12/Financial-Performance-Analytics',
    live: 'https://drive.google.com/file/d/1Y6gvjoiVl2o3vW0uV8Br_ax618pR0DU_/view?usp=drive_link',
    featured: true
  },
  {
    id: 7,
    title: 'MERN Stack Project 1',
    category: 'MERN Stack',
    description: 'A full-stack MERN project showcasing responsive UI, modern workflows, and practical app structure.',
    image: '/mernstack-proj1.jpg',
    technologies: ['MongoDB', 'Express JS', 'React JS', 'Node JS'],
    github: 'https://github.com/yahyakhokhar12/luxury-store',
    live: 'https://luxury-store-teal.vercel.app/',
    featured: false
  },
  {
    id: 8,
    title: 'AI PDF Chatbot (RAG)',
    category: 'AI Projects',
    description: 'A full-stack RAG chatbot that lets users upload PDFs, ask questions about their content, and get cited answers from source passages.',
    image: '/rag%20project.jpg',
    imageContain: true,
    technologies: ['FastAPI', 'LangChain', 'ChromaDB', 'Next.js', 'Tailwind CSS', 'OpenAI', 'Gemini'],
    github: 'https://github.com/yahyakhokhar12/pdf-rag-chatbot',
    live: null,
    featured: true
  }
];

export const services = [
  {
    title: 'Power BI Solutions',
    items: ['Dashboards', 'Reporting', 'Business Intelligence']
  },
  {
    title: 'ML / AI Development',
    items: ['AI Chatbots', 'RAG Systems', 'AI Agents', 'LLM Integrations']
  },
  {
    title: 'MERN Stack Development',
    items: ['Full Stack Web Apps', 'Admin Panels', 'APIs']
  },
  {
    title: 'Data Analytics',
    items: ['Data Cleaning', 'Forecasting', 'Insights']
  }
];

export const skills = [
  { group: 'Power BI', items: ['DAX', 'Power Query', 'Data Modeling', 'Dashboard Design', 'Data Visualization'] },
  { group: 'ML / AI Development', items: ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs', 'RAG', 'Vector Databases', 'Prompt Engineering'] },
  { group: 'MERN Stack', items: ['MongoDB', 'Express JS', 'React JS', 'Node JS', 'REST APIs', 'JWT', 'Authentication'] },
  { group: 'Programming', items: ['Python', 'Java', 'JavaScript', 'C#', 'SQL'] }
];

export const timeline = [
  { year: '2025 - Present', title: 'Power BI & Analytics', description: 'Started working on Power BI in 2025 and focused on building dashboards, reporting systems, and data stories.' },
  { year: '2025 - Present', title: 'MERN Stack Development', description: 'Started working on MERN Stack in 2025 and have been building modern web applications and APIs.' },
  { year: '2026 - Present', title: 'ML / AI Development', description: 'Started working on ML / AI in 2026 with a focus on practical automation and intelligent workflows.' }
];

export const certifications = [
  {
    title: 'C Certificate',
    organization: 'Certificate',
    date: '2025',
    image: '/certificates/c-certificate.png',
    file: '/certificates/c%20certificate.pdf'
  },
  {
    title: 'Introduction to SQL Certificate',
    organization: 'SQL',
    date: '2025',
    image: '/certificates/introduction-to-sql-certificate.png',
    file: '/certificates/introduction%20to%20sql%20certificate.pdf'
  },
  {
    title: 'Power PI Certificate',
    organization: 'Power BI',
    date: '2025',
    image: '/certificates/power-pi-certificate.png',
    file: '/certificates/power%20pi%20certificate.pdf'
  }
];

export const testimonials = [
  {
    name: 'Client Feedback',
    role: 'Business Intelligence',
    quote: 'Delivered dashboards that made complex data feel immediate, clear, and decision-ready.'
  },
  {
    name: 'Team Feedback',
    role: 'Full Stack Delivery',
    quote: 'Strong communication, clean execution, and a polished product mindset throughout the engagement.'
  },
  {
    name: 'Peer Feedback',
    role: 'AI Prototyping',
    quote: 'Moves fast, learns fast, and turns ideas into demos without losing quality.'
  }
];
