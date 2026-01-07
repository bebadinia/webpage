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
  username: "Benyamin Ebadinia",
  title: "Hi, I'm Ben",
  subTitle: emoji("I am a software engineer with experience building applications across full-stack development, systems tooling, and interactive user experiences."),
  resumeLink:"/resume_flattened.pdf", // Set to empty to hide the button 
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "ben@ebadinia.net",
  linkedin: "https://www.linkedin.com/in/ben-ebadinia/",
  github: "https://github.com/bebadinia/portfolio",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Technical competencies, methodologies, and professional skills developed across systems, applications, research projects, and life.",
  skills: [
            emoji("⚡ Software design and object-oriented programming"),
            emoji("⚡ Full-stack application development"),
            emoji("⚡ Systems and networking fundamentals"),
            emoji("⚡ Agile and iterative development methodologies"),
            emoji("⚡ Technical documentation and research-driven development"),
            emoji("⚡ Leadership experience managing employees and mentoring students, collaborating across teams, and guiding projects from concept to completion"),
            emoji("⚡ Languages spoken: English (Fluent), Persian (Native), Arabic (Native), Spanish (Intermediate)")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "C / C++ / C#", fontAwesomeClassname: "fas fa-code"},
    { skillName: "CSS", fontAwesomeClassname: "fab fa-css3-alt"},
    { skillName: "HTML", fontAwesomeClassname: "fab fa-html5"},
    { skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    { skillName: "Python", fontAwesomeClassname: "fab fa-python"}, 
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft"},
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    { skillName: "Git / GitHub", fontAwesomeClassname: "fab fa-github"},
    { skillName: "Jira", fontAwesomeClassname: "fab fa-jira"},
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js"},
    { skillName: "React Native", fontAwesomeClassname: "fab fa-react"},
    
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux"},
    { skillName: "Ubuntu", fontAwesomeClassname: "fab fa-ubuntu"},
    { skillName: "Windows", fontAwesomeClassname: "fab fa-windows"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "St. Mary's University",
      logo: require("./assets/images/stMarysLogo2.png"),
      subHeader: "Master of Science in Software Engineering",
      duration: "August 2023 - December 2025",
      desc: "Combined degree program for BS and MS in under five years with a cumulative GPA of 4.0",
      desc2: "Recipient of Engineering Dept. Scholarship and Graduate Assistantship",
      desc3: "Relevant Coursework:",
      descBullets: [
        "Agile Development",
        "Java Programming", 
        "Computer Networking", 
        "User Interface Design", 
        "Software Engineering", 
        "Parallel Processing", 
        "Human Factors/Ergonomics", 
        "Thesis I & II"
      ]
    },
    {
      schoolName: "St. Mary's University",
      logo: require("./assets/images/stMarysLogo2.png"),
      subHeader: "Bachelor of Science in Computer Science with Minor in Matheematics",
      duration: "August 2020 - December 2024",
      desc: "Recipient of Trustee Scholarship.",
      desc3: "Relevant Coursework:",
      descBullets: [
        "Programming I & II",
        "OOP I & II", 
        "Algorithms", 
        "Computer Architecture", 
        "System Analysis and Design", 
        "Survey of Programming Languages", 
        "Files and Database", 
        "Operating Systems", 
        "Preparation for Security Certification", 
        "Computer Security and Privacy", 
        "Cloud Computing Security", 
        "Game Development", 
        "Calculus I & II", 
        "Statistics", 
        "Applied Linear Algebra", 
        "Discrete Math Structures ",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Research Assistant",
      company: "St. Mary’s University Engineering Department",
      companylogo: require("./assets/images/stMarysLogo.png"),
      date: "January 2025 – December 2025",
      desc: " Teaching Assistant & Lab Manager",
      descBullets: [
        "Prototype Microsoft HoloLens 2 applications in C#/.NET (StereoKit) for UI, 3D interaction, and data‑driven views supporting clinical education/diagnostics.",
        "Collaborating with cross‑disciplinary stakeholders to turn requirements into working software iterated via sprints and demo feedback.",
        "Managing the Human-Centered Design Lab: equipment upkeep, experiment setup, technical troubleshooting, and administrative support for faculty/lab users.",
        "Tutor undergraduate students in Object-Oriented programming and Java development; organized and executed outreach events to engage prospective students and showcase lab capabilities.",
        "Mentorship: Guide a Cornell undergraduate student on an eye‑tracking + LLM analysis workflow; automated metrics extraction and summary tables in Python/Jupyter Notebook."
      ]
    },
    {
      role: "Store Manager",
      company: "Adorn Jewelry",
      companylogo: require("./assets/images/adornJewelryLogo.png"),
      date: "June 2018 – January 2025",
      descBullets: [
        "Led a team of eight; oversaw high-end merchandise transactions; coordinated inventory, scheduling, sales operations, and promotions.",
        "Integrated JewelMATE Retail Software with Point-Of-Sale machine which led to a more efficient checkout experience for the customer. ",
        "Trained up to four employees at a time in sales, service, and customer experience through individual walk-throughs."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};


// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "Selected projects showcasing my work across software engineering.",
  projects: [
    {
      image: require("./assets/images/stereoKitLogo.png"),
      projectName: "Systems Simulation",
      projectDesc: "Mixed reality framework + anatomy prototype built for interactive 3D learning in healthcare.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/bebadinia/Portfolio/tree/main/SystemsSimulation/"
        }
      ]
    },
    {
      image: require("./assets/images/WhatsItWorthLogo.png"),
      projectName: "What's It Worth?",
      projectDesc: "Desktop application for jewelry pricing and inventory tracking with real-time market data integration.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/bebadinia/Portfolio/tree/main/WhatsItWorth/"
        }
      ]
    },
    {
      image: require("./assets/images/rfidChatroomLogo.png"),
      projectName: "RFID Chatroom",
      projectDesc: "Web-based chatroom secured with AES-encrypted messaging and RFID/NFC tag–based access control (scan tag → credentialed login).",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/bebadinia/Portfolio/tree/main/RFIDChatroom/"
        }
      ]
    },
    {
      image: require("./assets/images/multiThreadedChatroomLogo.png"),
      projectName: "Multi-Threaded Chatroom",
      projectDesc: "Multi-client chatroom with a multi-threaded server and Tkinter GUI client for parallel/asynchronous communication.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/bebadinia/Portfolio/tree/main/MultiThreadedChatroom/"
        }
      ]
    },
    {
      image: require("./assets/images/javaPPLogo.png"),
      projectName: "Java++",
      projectDesc: "Designed a custom language and implemented a complete compiler pipeline with documentation.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/bebadinia/Portfolio/tree/main/Java++/"
        }
      ]
    },
    {
      image: require("./assets/images/alansCodingJourneyLogo.png"),
      projectName: "Alan's Coding Journey",
      projectDesc: "Side-scrolling educational game introducing coding concepts through interactive levels and challenges.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/bebadinia/Portfolio/tree/main/AlansCodingJourney/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Distinguished Graduate",
      subtitle:
        "Recognized as a Distinguished Graduate (Fall 2025).",
      image: require("./assets/images/awardLogo.png"),
      imageAlt: "Award Logo",
      footerLink: []
    },
    {
      title: "1st Place — CS Symposium",
      subtitle: "1st Place for CS Symposium Project Presentation & Poster (Fall 2024).",
      image: require("./assets/images/firstPlaceLogo.png"),
      imageAlt: "First Place Logo",
      footerLink: []
    },

    {
      title: "MathWorks MatLab Onramp Certified",
      subtitle: "Completed Certification from MathWorks MatLab Onramp.",
      image: require("./assets/images/matlabLogo.png"),
      imageAlt: "MatLab Logo",
      footerLink: [
        { name: "Certification", url: "/resume_cleaned.pdf", downloadName: "MatLabCertification.pdf" },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = 
{
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

// Contact Section
const contactInfo = 
{
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My email is the best way to reach me.",
  email_address: "ben@ebadinia.net"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer


// Blogs Section
const blogSection = 
{
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = 
{
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section
const podcastSection = 
{
  display: false // Set false to hide this section, defaults to true
};

// Twitter Section
const twitterDetails = 
{
  display: false // Set true to display this section, defaults to false
};


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
