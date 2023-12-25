import React from 'react'
import TopBar from './components/TopBar'
import Career from './components/Career'
import DataScience from './components/DataScience'
import CyberSecurity from './components/CyberSecurity'
import FullStackDevelopment from './components/FullStackDevelopment'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import All from './components/All'

function App() {
  let course=[{
    type:"FullStack Development",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
    title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
    text:"When you’re hiring a full-stack developer, what are the most important things you look for?",
    footer:"15 November 2023 ",
    link:"https://www.guvi.in/blog/assessing-soft-skills-in-full-stack-developers/"
  },
  {
    type:"FullStack Development",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
    title:"Top Differences: Full Stack Developer vs Software Engineer 2024",
    text:"A Full Stack Developer is a tech all-rounder. They work on both the front and back parts of websites or apps. A Software Engineer focuses on building software. They work on specific bits of the software and make sure everything fits together well. They know a lot about programming, how to make things work, and design software.",
    footer:"15 November 2023  ",
    link:"https://www.guvi.in/blog/full-stack-developer-vs-software-engineer/"
  },
  {
    type:"FullStack Development",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
    title:"Horizontal vs Vertical Scaling for Efficient System Design",
    text:"In the world of system design, envision a digital skyscraper – a multifaceted structure built to withstand the demands of the modern world. Just as an architect crafts blueprints to ensure a skyscraper’s stability, a well-thought-out system design guarantees your digital applications can thrive amid the ever-evolving landscape.",
    footer:"10 November 2023 ",
    link:"https://www.guvi.in/blog/horizontal-vs-vertical-scaling/"
  },
  {
    type:"FullStack Development",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
    title:"Best Books to Learn Full-Stack Development",
    text:"Are you interested in becoming a full-stack developer but not sure where to start? In this blog, we’ll introduce you to a list of books to learn full-stack development.",
    footer:"9 November 2023 ",
    link:"https://www.guvi.in/blog/best-books-to-learn-full-stack-development/"
  },
  {
    type:"FullStack Development",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
    title:"Top 10 Product-Based Companies for Full-Stack Developers [2024]",
    text:"In the dynamic landscape of technology, full-stack developers are the architects of the digital world, bridging the gap between front-end and back-end development. In 2024 and the upcoming years, the demand for versatile full-stack developers is at an all-time high, and product-based companies are looking for individuals who can navigate the complexities of both ends of the development spectrum.",
    footer:"8 November 2023 ",
    link:"https://www.guvi.in/blog/product-based-companies-for-full-stack-developers/"
  },{
    type:"FullStack Development",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
    title:"7 Best Full-Stack Development Online Courses [2024]",
    text:"Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand and scope for full-stack developers are constantly on the rise. Are you an aspiring web developer striving to enhance your web development skills and become a full-stack web developer?",
    footer:"31 August 2023 ",
    link:"https://www.guvi.in/blog/best-full-stack-development-online-courses/"
  },
  {
    type:"DataScience",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
    title:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
    text:"Are you someone who’s not interested in coding, but wants to get placed in tech through Data Science, and earn a handsome salary? Worry Not! Tech companies have various opportunities open for you even if you’ve no experience in coding. Data Science has evolved to become one of the most sought-after fields in the tech industry.",
    footer:"28 November 2023",
    link:"https://www.guvi.in/blog/top-non-coding-jobs-in-data-science/"
  },
  {
    type:"DataScience",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-768x384.webp",
    title:"Data scientists are the creators behind transforming the raw course into edible course insights",
    text:"Data scientists are the creators behind transforming the raw course into edible course insights.",
    footer:"15 November 2023",
    link:"https://www.guvi.in/blog/certification-impact-on-hiring-data-scientists/"
  },
  {
    type:"DataScience",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
    title:"Top Product-Based Companies for Data Science Freshers",
    text:"In today’s course-driven world, Data Science has emerged as a crucial field, with companies harnessing the power of course to gain valuable insights and make informed decisions.",
    footer:"10 November 2023",
    link:"https://www.guvi.in/blog/product-based-companies-for-data-science-freshers/"
  },
  {
    type:"DataScience",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
    title:"What is the Difference between Data Science and course Engineering?",
    text:"India has been making some serious waves in the world of course. Just like the rest of the world, we’re seeing a massive jump in the demand for Data Science and course engineering roles. And this isn’t just a passing trend. ",
    footer:"8 November 2023",
    link:"https://www.guvi.in/blog/difference-between-data-science-and-data-engineering/"
  },
  {
    type:"DataScience",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Data-Science-Tools-1-768x402.png",
    title:"Top 10 Data Science Tools in 2024",
    text:"Data Science is an in-demand profession and will continue growing in the coming years.",
    footer:"1 November 2023",
    link:"https://www.guvi.in/blog/data-science-tools/"
  },
  {
    type:"DataScience",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
    title:"Best Data Science Books to Learn in 2024",
    text:"Today, we’re going to talk about something really cool: Data Science. It’s all about using course to make smart decisions and create amazing things",
    footer:"1 November 2023",
    link:"https://www.guvi.in/blog/data-science-books-to-learn/"
  },
  {
    type:"CyberSecurity",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
    title:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
    text:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills are a prerequisite for success.",
    footer:"4 December 2023",
    link:"https://www.guvi.in/blog/top-non-coding-jobs-in-cybersecurity/"
  },
  {
    type:"CyberSecurity",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
    title:"What Is Hacking? Types of Hacking & More",
    text:"Have you ever wondered what hacking is all about? It’s a big deal in today’s tech-heavy world, and it can be both fascinating and scary.",
    footer:"25 September 2023",
    link:"https://www.guvi.in/blog/what-is-hacking/"
  },
  {
    type:"CyberSecurity",
    image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-768x432.png",
    title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    text:"Cybersecurity & Ethical hacking and have been key in making sure that your course online is secure, users are authenticated & your course and privacy concerns are all kept safe.",
    footer:"25 September 2023",
    link:"https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/"
  },
  {
    type:"CyberSecurity",
    image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
    title:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    text:"Look around today, you will witness that we are more reliant on technology and devices than ever before.",
    footer:"December 20, 2022",
    link:"https://www.guvi.in/blog/what-is-cybersecurity/"
  },
  {
    type:"CyberSecurity",
    image:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-768x432.png",
    title:"8 Different Types of Cybersecurity and Threats Involved",
    text:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from cyberattacks, course theft, breaches, unauthorized access, etc.",
    footer:"November 9, 2022",
    link:"https://www.guvi.in/blog/types-of-cybersecurity/"
  },
  {
    type:"CyberSecurity",
    image:"https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
    title:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
    text:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
    footer:"22 June 2022 ",
    link:"https://www.guvi.in/blog/coding-for-cybersecurity/"
  },
  {
    type:"Career",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.jpg",
    title:"UI/UX Designer Job Description and Roles & Responsibilities",
    text:"UI UX is the abbreviated word that’s been rocking the trend over the years, especially in the past decade.",
    footer:"December 13, 2023",
    link:"https://www.guvi.in/blog/ui-ux-designer-roles-and-responsibilities-and-job-description/"
  },
  {
    type:"Career",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
    title:"Top 5 IT Jobs for Economics Students",
    text:"In today’s digital age, the intersection of economics and technology offers exciting career opportunities for students with a background in economics.",
    footer:"4 December 2023 ",
    link:"https://www.guvi.in/blog/top-it-jobs-for-economics-students/"
  },
  {
    type:"Career",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
    title:"Top IT Jobs for Commerce Students: A Lucrative Career Path",
    text:"With the rapid advancement of technology, the demand for IT professionals has soared in recent years.",
    footer:"2 December 2023 ",
    link:"https://www.guvi.in/blog/top-it-jobs-for-commerce-students/"
  },
  {
    type:"Career",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
    title:"Automation Test Engineer Resume: 10 Important Things To Consider",
    text:"The world is moving towards automating the testing of products in order to increase work efficiency. Those who control the automation process will have a long career journey. In order to do that, all you need to have is a professional automation test engineer resume.",
    footer:"1 December 2023",
    link:"https://www.guvi.in/blog/automation-test-engineer-resume-tips/"
  },
  {
    type:"Career",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-2048x1072.webp",
    title:"9 Best Product-Based Companies for Project Management",
    text:"The world is moving towards modernization leading to an increase in the popularity of civil engineering.",
    footer:"1 December 2023",
    link:"https://www.guvi.in/blog/civil-engineer-resume-guide/"
  },
  {
    type:"Career",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image-2048x1072.webp",
    title:"9 Best Product-Based Companies for Project Management",
    text:"In today’s tech-driven world, the demand for project managers is higher than before. The workload of every other company is exponential and they need project managers to maintain them effectively. ",
    footer:"December 1, 2023",
    link:"https://www.guvi.in/blog/product-based-companies-for-project-management/"
  },

]

  return <>
  <BrowserRouter>
  <TopBar/>
  <Routes>
    <Route path='/All' element={<All course={course}/>}/>
    <Route path='/FullStack_Development' element={<FullStackDevelopment course={course}/>}/>
    <Route path='/Data_Science' element={<DataScience course={course}/>}/>
    <Route path='/Cyber_Security' element={<CyberSecurity course={course}/>}/>
    <Route path='/Career' element={<Career course={course}/>}/>
    <Route path='*' element={<Navigate to='/All'/>}/>

  </Routes>
  </BrowserRouter>
  
  </>
}

export default App