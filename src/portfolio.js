/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jayanthi P",
  title: "Hi all, I'm Jayanthi",
  subTitle: emoji(
    "A specialized Graduate Data Science Engineer 🚀 looking for entry-level opportunities in Bangalore. Passionate about building predictive models, data cleaning architecture, and engineering deep learning pipelines to solve real-world industry challenges."
  ),
  resumeLink: "", // Paste Google Drive or custom Resume PDF link here
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/", // Add GitHub profile link here
  linkedin: "www.linkedin.com/in/jayanthi-pa", // Her actual LinkedIn profile
  gmail: "padakandlajayanthi@gmail.com", // Add professional email address here
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA SCIENCE & AIML GRADUATE READY TO DEPLOY PREDICTIVE MODELS",
  skills: [
    emoji(
      "⚡ Construct and train complex Deep Learning architectures (CNN, LSTM) for pattern recognition and threat classification"
    ),
    emoji("⚡ Engineer data preprocessing, statistical pipelines, and feature extraction layers using Python and Pandas"),
    emoji(
      "⚡ Build algorithmic systems using Java and core Data Structures to handle structured relational datasets efficiently"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-brain" // Custom representation for AI/ML modeling
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Visvesvaraya Technological University",
      logo: null, 
      subHeader: "Bachelor of Engineering in Computer Science Engineering (Data Science)",
      duration: "2022 - 2026",
      desc: "Specialized engineering program emphasizing core big data concepts, automated learning metrics, and advanced statistics.",
      descBullets: [
        "Core Coursework: Big Data Analytics, Statistical Data Analysis, Deep Learning, Data Structures & Algorithms.",
        "Applied core machine learning algorithms onto structural network layers during university capstone modules."
      ]
    }
  ]
};

// Top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis & ML (Python / Pandas / TensorFlow)", 
      progressPercentage: "90%" 
    },
    {
      Stack: "Core Programming (Java / Object-Oriented Logic)",
      progressPercentage: "80%"
    },
    {
      Stack: "Web Layouts & Databases (SQL / HTML5 / CSS3)",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false 
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AIML Engineering Intern",
      company: "IT - ITES Sector Skill Council NASSCOM",
      companylogo: null,
      date: "Feb 2025 – May 2025",
      desc: "Collaborated on an automated virtual engineering framework focused on parsing data metrics and scaling algorithmic performance rules.",
      descBullets: [
        "Developed and deployed machine learning models using Python and TensorFlow to solve real-world data challenges.",
        "Implemented Deep Learning architectures and NLP techniques for automated solution building.",
        "Collaborated on integrating AI models into functional web environments, gaining exposure to full-stack workflows."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects */
const openSource = {
  showGithubProfile: "true", 
  display: true 
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "RESEARCH ARCHITECTURES AND REPOSITORIES I HAVE ENGINEERED",
  projects: [
    {
      image: null,
      projectName: "Cyber Threat Detection Using Deep Learning",
      projectDesc: "Engineered a robust deep learning environment using Python and TensorFlow to read live network logs, isolate suspicious traffic configurations, and classify data threat vectors to prevent systemic network vulnerabilities.",
      footerLink: [
        {
          name: "View Source Code",
          url: "https://github.com/" // Change this to her github link for this project
        }
      ]
    },
    {
      image: null,
      projectName: "Relational Management & System Engine",
      projectDesc: "Designed an object-oriented tracking infrastructure built using Java and connected to structural database repositories to handle intensive tabular inputs cleanly without performance degradation.",
      footerLink: [
        {
          name: "View Source Code",
          url: "https://github.com/" 
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Academic benchmarks and specialized domains verified:",
  achievementsCards: [
    {
      title: "AI & Machine Learning Engineering Certification",
      subtitle: "Verified virtual training credential hosted through NASSCOM Futureskills.",
      image: null,
      imageAlt: "NASSCOM Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section - Turn off
const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", 
  blogs: [],
  display: false 
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false 
};

// Podcast Section
const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "",
  podcast: [],
  display: false 
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to check out my credentials",
  display: true 
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open for Data Science, AI/ML engineering, and Graduate Trainee roles across Bangalore.",
  number: "Available Upon Request",
  email_address: "jayanthi.email@gmail.com" // Update to her email address
};

// Twitter Section
const twitterDetails = {
  userName: "twitter",
  display: false 
};

const isHireable = true; 

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
