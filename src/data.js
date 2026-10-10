import portal from "./images/portal.jpg";
import flightNetwork from "./images/fn.jpg";
import studyAgenda from "./images/usability.jpg";
import imageHash from "./images/imagehash.png";

export const profile = {
  name: "Anna Fatsevych",
  title: "Software Engineer",
  links: {
    github: "https://github.com/annafatsevych",
    linkedin: "https://www.linkedin.com/in/anna-fatsevych-2096a664/",
    email: "anna.fatsevych@gmail.com",
  },
};

// Newest first. `year` is the label shown on the timeline above the entry.
// An entry has either `points`, or `groups` of points under sub-headings.
export const experience = [
  {
    year: "Present",
    role: "Full Stack Software Engineer",
    company: "TripStack (previously FlightNetwork)",
    stack: "React, Redux, UX, .NET, C#, Go, Kubernetes",
    groups: [
      {
        heading: "Frontend & Project Ownership",
        points: [
          "Delivered many successful features in an agile, fast-paced environment",
          "Took on main projects from the kick-off meeting through to delivery and release",
          "Took ownership of seeking out and implementing new technologies; held Scrum ceremonies and stakeholder meetings",
        ],
      },
      {
        heading: "Backend",
        points: [
          "Developed backend services in .NET and C#, with some work in Go",
          "Helped migrate an application from VMs on Google Cloud Platform to Kubernetes on OpenStack, using Cilium for networking",
        ],
      },
    ],
  },
  {
    year: "2017",
    company: "Centre for Development of Open Technology at Seneca",
    stack: "JavaScript, Python, C++",
    points: [
      "Developed a website to perform an image search by hashing for Creative Commons licensing",
      "Worked in a small team of two developers and delivered the product",
      "Used the Flickr API, Python and PHP, with a JavaScript front end and a C++ backend daemon",
    ],
  },
  {
    year: "2015",
    company: "Delicious Scrap Shop",
    stack: "CSS, HTML, PHP, Adobe (PS, AI)",
    points: [
      "Built an online graphic design business using open-source PHP ZenCart and Blogger",
      "Maintained a list of over 5,000 clients, using marketing tools such as MailChimp and AdWords",
      "Created e-commerce sites for clients",
    ],
  },
];

export const timelineStart = "2007";

export const projects = [
  {
    name: "Customer Portal",
    image: portal,
    stack: "ReactJS, Redux, FusionAuth, Google Cloud Platform",
    description:
      "A ReactJS application that uses an internal API and FusionAuth for authentication. Lets external clients manage configurations and users, view key information, and search records with extensive criteria.",
  },
  {
    name: "FlightNetwork.com",
    image: flightNetwork,
    stack: "ReactJS, Redux, SASS, CSS Modules, Webpack, Node",
    description:
      "Responsive, high-traffic website written in ReactJS, using Optimizely for A/B testing and Lokalise for language support. A large codebase worked on by many developers over several years, requiring optimized performance and minimal downtime. Worked with the UX team on a complete front-end redesign.",
  },
  {
    name: "Study Agenda",
    image: studyAgenda,
    stack: "AngularJS, MongoDB, NodeJS, Express",
    description:
      "A web application designed by students for students, to help manage time spent studying for assignments in each course. Capstone project at Seneca College, built by four developers over a year using Kanban and Git best practices (issues, pull requests and peer reviews). Released on time and showcased as a top pick among peers and external sponsors.",
  },
  {
    name: "pHash Image Search",
    image: imageHash,
    stack: "JavaScript, Python, PHP, C++",
    description:
      "Using the pHash image hashing algorithm, a team of two developers and the project lead designed and built a tool that hashes an uploaded image and checks it against a Creative Commons database to find whether it is licensed, and under which license.",
  },
];
