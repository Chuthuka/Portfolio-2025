export const personalData = {
  firstName: "Chuthuka",
  lastName: "Dedunu Hettiarachchi",
  fullName: "Chuthuka Dedunu Hettiarachchi",
  age: 23,
  illustration : "/assets/images/photos/profile_Illustration.png",
  profilePic: "/assets/images/photos/cv2.png",
  location: "Kiribathgoda, Sri Lanka",
  email: "chuthuka097dedunu@gmail.com",
  phone: "+94 76 645 3116",
  education: "SUS Undergraduate | Software Engineering Intern",
  bio: "Hi, I'm Chuthuka Dedunu Hettiarachchi, a passionate 23-year-old Software Engineering Intern from Kiribathgoda, Sri Lanka. I am currently pursuing my Bachelor's degree in Computing & Information Systems at the Sabaragamuwa University of Sri Lanka (SUSL).With hands-on internship experience and a strong interest in developing innovative software solutions, I strive to combine creativity and technical expertise to build impactful and user-friendly applications. My goal is to contribute to projects that solve real-world problems while continuously learning and growing as a software engineer.",
  socialLinks: {
    github: "https://www.github.com/Chuthuka/",
    linkedin: "https://www.linkedin.com/in/chuthuka-dedunu1",
    facebook: "https://www.facebook.com/share/1CUeGiUCna/?mibextid=wwXIfr",
    instagram: "https://www.facebook.com/share/1CUeGiUCna/?mibextid=wwXIfr",
    whatsapp: "https://wa.me/94766453116",
  },
  roles: [
    "Software Engineering Intern",
    "Full Stack Developer",
    "Java Developer",
    "React Developer",
    "Angular Developer",
    "Spring Boot Developer",
    "Problem Solver",
    "Aspiring Data Analyst",
    "Aspiring Data Scientist",
    "Aspiring Data Engineer"
  ],
  experience: "2+",
};

export const mainSkillAreas = [
  {
    title: "Frontend Development",
    icon: "Monitor",
    description:
      "Crafting responsive, accessible, and visually engaging user interfaces using modern frameworks and libraries.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Angular",
      "Bootstrap",
      "Tailwind CSS",
      "TypeScript",
      "SASS",
      "jQuery",
      "Figma",
    ],
  },
  {
    title: "Backend & Databases",
    icon: "Server",
    description:
      "Building robust backend systems and managing relational and NoSQL databases for scalable applications.",
    skills: [
      "Java",
      "Spring Boot",
      "PHP",
      "Node.js",
      "Python",
      "RESTful APIs",
      "JPA",
      "Hibernate",
      "MySQL",
      "MongoDB",
      "SQL",
    ],
  },
  {
    title: "Mobile & Cloud Technologies",
    icon: "Smartphone",
    description:
      "Developing mobile applications and integrating cloud-based services for seamless, real-time access.",
    skills: [
      "Android Studio",
      "React Native",
      "Firebase",
      "Git",
      "Docker",
      "AWS",
      "Kotlin",
      "CI/CD",
      "REST APIs",
    ],
  },
  {
    title: "Tools & Methodologies",
    icon: "Settings",
    description:
      "Applying agile workflows and leveraging modern tools to streamline development and collaboration.",
    skills: [
      "Postman",
      "Agile Methodology",
      "JIRA",
      "VS Code",
      "IntelliJ IDEA",
      "GitHub",
      "Trello",
      "Maven",
      "Scrum",
      "Google Colab",
      "SQL Server / MySQL",
      "MongoDB",
      "Power BI",
      "Tableau",
      "Excel",
      "Git for version control",
      "Docker (for data apps)",
      "Data Visualization",
    ],
  },
];

export const projectsData = [
 {
    title: "Chemosense – Intelligent Chemotherapy Monitoring System",
    description: "An IoT + ML-powered system for real-time monitoring of chemotherapy patients, featuring risk prediction, doctor/admin dashboards, and a patient mobile app with chatbot and appointments.",
    image: "/assets/images/projects/chemosense.png",
    tags: ["IoT", "Machine Learning", "React", "React Native", "FastAPI", "Firebase"],
    demoLink: "https://lnkd.in/p/exQ4kYW5",
    codeLink: "https://github.com/hello-sahasraka/ChemoSense",
    category: "Healthcare",
    featured: true,
    viewButton: true
  },
  {
    title: "MovieExplorer – Movie Discovery Web App",
    description: "Responsive movie discovery platform using TMDb API, featuring authentication, favorites, dark/light mode, search, and optimized Docker + Vercel deployment.",
    image: "/assets/images/projects/movieexplorer.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS", "TMDb API", "Docker", "Vercel"],
    demoLink: "https://your-movieexplorer-demo.com",
    codeLink: "https://github.com/Chuthuka/MovieExplorer-React-2025",
    category: "Web App",
    featured: true,
    viewButton: true,
  },
  {
    title: "Weather Forecast App",
    description: "Responsive weather forecasting app using OpenWeather API with real-time updates, location-based search, and a clean, mobile-friendly UI.",
    image: "/assets/images/projects/weather-forecast.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API"],
    demoLink: "https://your-weatherapp-demo.com",
    codeLink: "https://github.com/Chuthuka/MERN-Weather-Forcast-Web-frontend",
    category: "Web App",
    featured: false,
    viewButton: true,
  },
  {
    title: "Car Data Analysis Project",
  description: "Performed in-depth analysis on Kaggle’s car sales dataset to uncover key trends in brand performance, fuel types, transmission modes, and regional specifications. Utilized Python (Pandas, Matplotlib) in Jupyter Notebook for data cleaning, visualization, and exploratory data analysis.",
  image: "/assets/images/projects/car-data-analysis.png",
  tags: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook", "Data Analysis"],
  demoLink: "https://your-demo-link.com",
  codeLink: "https://github.com/Chuthuka/Car-Data-Analysis-Project",
  category: "Data Analytics",
  featured: false,
  viewButton: true
  },
  {
    title: "MOS Burgers Ordering System",
    description: "Built a full-stack POS system for fast-food outlets with product/customer management, orders, dashboards, and Cloudinary, Jasypt & jsPDF integration.",
    image: "/assets/images/projects/mosburgers.webp",
    tags: ["Spring Boot", "JPA", "HTML", "Bootstrap"],
    demoLink: "",
    codeLink: "https://github.com/Chuthuka/Mos-Burgers-System-frontend",
    category: "web",
    featured: true,
    viewButton: false,
  },
  {
    title: "UAE Cars Sales Analysis Dashboard – Excel",
  description: "Built an interactive Excel dashboard to analyze UAE car sales trends using Kaggle data. Applied data cleaning, pivot tables, slicers, and dashboard design to visualize sales by brand, fuel type, transmission, and more, enabling business insights and trend identification.",
  image: "/assets/images/projects/uae-car-sales-dashboard.png",
  tags: ["Excel", "Data Cleaning", "Pivot Tables", "Dashboard Design"],
  demoLink: "",
  codeLink: "https://github.com/Chuthuka/Cars-Sales-Analysis-Dashboard-Excel",
  category: "Data Analytics",
  featured: true,
  viewButton: true
  },
  {
    title: "Financial Analysis Dashboard – Power BI",
  description: "Developed a Power BI dashboard analyzing sales, profit, and product performance using Kaggle data. Applied data cleaning (Excel, Power Query), DAX measures, and interactive visualizations to track KPIs and uncover insights such as profit margin trends, top-selling products, and country-wise performance.",
  image: "/assets/images/projects/financial-analysis-dashboard.png",
  tags: ["Power BI", "Excel", "DAX", "Data Visualization"],
  demoLink: "",
  codeLink: "https://github.com/Chuthuka/Financial-Analysis-Dashboard-Using-Power-BI",
  category: "Data Analytics",
  featured: true,
  viewButton: true
  },
  {
    
  title: "PlantCare AI",
  description: "AI-powered web app for plant disease detection and care guidance. Users can scan plants, detect diseases instantly, get treatment steps, browse a plant guide, and track history.",
  image: "/assets/images/projects/plantcare.webp",
  tags: ["JavaScript", "HTML", "CSS", "Node.js", "Express", "ml5.js", "Google Generative AI"],
  demoLink: "", 
  codeLink: "https://github.com/Chuthuka/Virtual-Plant-Care",
  category: "web",
  featured: true,
  viewButton: true


  },
  {
    title: "Checkmate 3D",
    description: "3D chess game using Three.js and Stockfish engine.",
    image: "/assets/images/projects/checkmate3d.webp",
    tags: ["Three.js", "JavaScript", "3D Graphics", "WebGL"],
    demoLink: "",
    codeLink: "https://github.com/Chuthuka",
    category: "web",
    featured: true,
    viewButton: true,
  },
];

export const certificationsData = [
 {
    "title": "Artificial Intelligence (AI) Workshop",
    "issuer": "BuilderX",
    "date": "30th August 2025",
    "description": "This certificate confirms that C. D. Hettiarachchi participated in and successfully completed the Artificial Intelligence (AI) Workshop.",
    "badge": "/assets/images/certifications/builderx.jpg",
    "verificationLink": "https://builderx.lk/verify"
},
  {
    "title": "Data Science Foundations - Level 1",
    "issuer": "IBM",
    "date": "August 20, 2025",
    "description": "Successfully satisfied the requirements for the Data Science Foundations - Level 1 badge.",
    "badge": "/assets/images/certifications/datascience.jpg",
    "verificationLink": "https://www.credly.com/badges/d3731bd0-27d5-4148-9f8e-1b6bb946c2ed"
},
  {
    title: "Postman API Student Expert",
    issuer: "Postman",
    date: "March 2025",
    description: "Validated core API development skills using Postman tools.",
    badge: "/assets/images/certifications/postman.png",
    verificationLink: "https://badgr.com/public/assertions/nTENLduoTBCkvJ3Mo9qdJg?identity__email=cdhettiarachchi@std.foc.sab.ac.lk",
  },
  {
    "title": "Work with Components in Figma",
    "issuer": "Coursera Project Network",
    "date": "14th March 2025",
    "description": "This guided project verifies that C. D. Hettiarachchi successfully completed the hands-on project 'Work with Components in Figma' and can demonstrate proficiency in the specified topic.",
    "badge": "/assets/images/certifications/figma.jpg",
    "verificationLink": "https://www.coursera.org/account/accomplishments/verify/H6BT682W7RPQ"
},
 {
    "title": "Web Design for Beginners",
    "issuer": "University of Moratuwa - Centre for Open & Distance Learning",
    "date": "11th December 2023",
    "description": "This certificate verifies that C. D. Hettiarachchi successfully completed the online learning program in Web Design for Beginners.",
    "badge": "/assets/images/certifications/moratuwa.jpg",
    "verificationLink": "https://open.uom.lk/lms/mod/customcert/verify_certificate.php/wxZv2EPQe6"
},
  {
    "title": "Power BI for Beginners",
    "issuer": "Simplilearn",
    "date": "July 01, 2024",
    "description": "This certificate recognizes C. D. Hettiarachchi for successfully completing the Power BI for Beginners training program.",
    "badge": "/assets/images/certifications/powerbi.jpg",
    "verificationLink": "https://simpli-web.app.link/e/qaPHNIaUMVb"
},
];

export const sectionsData = {
  hero: {
    subtitle: "Welcome to my portfolio",
    ctaButtons: [
      {
        text: "View My Work",
        link: "#projects",
        type: "primary",
      },
      {
        text: "Contact Me",
        link: "#contact",
        type: "outline",
      },
    ],
  },
  about: {
    title: "About Me",
    subtitle: "Software Engineering Intern | SUSL Undergraduate",
    ctaButtons: [
      {
        text: "Download CV",
        link: "publc/assets/cv/ChuthukaDedunu_CV.pdf",
        type: "primary",
        id: "download-cv",
      },
      {
        text: "Get In Touch",
        link: "#contact",
        type: "outline",
      },
    ],
  },
  skills: {
    title: "My Skills",
    subtitle: "A showcase of my technical expertise and proficiency",
  },
  projects: {
    title: "My Projects",
    subtitle: "Check out some of my recent work",
    categories: ["all", "web", "mobile", "desktop"],
  },
  certifications: {
    title: "Certifications",
    subtitle: "Professional certifications and achievements",
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Feel free to contact me for any project or collaboration",
    heading: "Let's Talk",
    description:
      "Have a project in mind or want to collaborate? Reach out using any of the methods below.",
  },
};