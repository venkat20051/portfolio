import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  C,
  Cplus,
  Java,
  Python,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Java Development',
    icon: ux,
  },
  {
    title: 'Application Developer',
    icon: prototyping,
  },
];

const technologies = [
  // {
  //   name: 'HTML 5',
  //   icon: html,
  // },
  // {
  //   name: 'CSS 3',
  //   icon: css,
  // },
  // {
  //   name: 'JavaScript',
  //   icon: javascript,
  // },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
  // {
  //   name: 'React JS',
  //   icon: reactjs,
  // },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  // {
  //   name: 'git',
  //   icon: git,
  // },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },

  {
    name: 'C',
    icon: C,
  },
  {
    name: 'C++',
    icon: Cplus,
  },
  {
    name: 'Python',
    icon: Python,
  },
  {
    name: 'Java',
    icon: Java,
  }
];

const skills = [
  { name: "HTML", percentage: 100 },
  { name: "CSS", percentage: 100 },
  { name: "JavaScript", percentage: 100 },
  { name: "React", percentage: 100 },
  { name: "MongoDB", percentage: 100 },
  {name:"React Native",percentage:100},
];

const programmingLanguages = [
  { name: "C", image: "https://www.ingenioempresa.com/wp-content/uploads/2022/09/C-Language.png" },
  { name: "C++", image: "https://www.freeiconspng.com/uploads/c--logo-icon-0.png" },
  { name: "Java", image: "https://th.bing.com/th/id/OIP.jzI0f-YL6nO4LwLDGvZHfgHaHa?w=512&h=512&rs=1&pid=ImgDetMain" },
  { name: "Python", image: "https://th.bing.com/th/id/OIP.asy5P05Rv7-zEkUsMC1ehQAAAA?w=280&h=280&rs=1&pid=ImgDetMain" },
  { name: "JavaScript", image: "https://thumbs.dreamstime.com/b/javascript-logo-javascript-logo-white-background-vector-format-available-136765881.jpg" },
];

const certifications = [
  { title: "IT Pearson Java ", image: "https://images.credly.com/size/680x680/images/2210b6fe-0eda-415a-8aba-6c1400566728/ITS-Badges_Java_1200px.png",
     description: "A globally recognized certification validating core Java programming skills, object-oriented principles, and application development expertise."
   },
  { title: "RedHat System Administration", image: "https://images.credly.com/images/572de0ba-2c59-4816-a59d-b0e1687e45ee/image.png",
    description: "A certification proving proficiency in Linux system administration, including managing users, configuring networking, and handling security policies."
   },
  { title: "CCNA Introduction to Networks", image: "https://images.credly.com/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png",
    description: "Covers fundamental networking concepts, IP addressing, routing, and switching, providing a strong foundation for network administration."
   },
];


const experiences = [
  {
    title: 'Bachelor of Technology',
    company_name: 'Aditya Enginnering College',
    icon: coverhunt,
    iconBg: '#333333',
    date: '2022 - 2026',
  },
  {
    title: 'Intermediate',
    company_name: 'Narayana Junior College',
    icon: microverse,
    iconBg: '#333333',
    date: '2020 - 2022',
  },
  {
    title: 'SSC',
    company_name: 'Little Buds School',
    icon: kelhel,
    iconBg: '#333333',
    date: 'PassOut:2020',
  },
  // {
  //   title: 'Full Stack Developer',
  //   company_name: 'Diversity Cyber Council',
  //   icon: dcc,
  //   iconBg: '#333333',
  //   date: 'Sep 2022 - Present',
  // },
];

const projects = [
  {
    id: 'project-1',
    name: 'NotifyNation',
    description: 'A Government Job Application Website to apply and get Sources to Crack the job.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      }
    ],
    image: komikult,
    repo: 'https://github.com/venkat20051/NotifyNation',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Sports Mania',
    description:
      'A Sports Web Application to know more about a particular sport and to learn any Sport.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/venkat20051/Sports-Mania',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Data Base Management',
    description: 'A simple Java Application where user can interact with Mysql and view the databases and content in the database',
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient',
      },
      // {
      //   name: 'supabase',
      //   color: 'green-text-gradient',
      // },
      // {
      //   name: 'css',
      //   color: 'pink-text-gradient',
      // },
    ],
    image: math,
    repo: 'https://github.com/venkat20051/Databases_Management',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects,skills,programmingLanguages,certifications};
