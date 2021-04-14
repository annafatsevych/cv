import project1 from "../images/portal.png";
import project2 from "../images/fn.png";
import project3 from "../images/usability.png";
import project4 from "../images/imagehash.png";

export const projects = [
  {
    name: "Customer Portal",
    description: `A ReactJS Application that uses internal API, as well as FusionAuth 
      for authentication, and displays viable information as well as manages configurations.
      Allows external clients to manage various configurations, users as well as search records
      with an extensive criteria.`,
    image: project1,
    techStack: `ReactJS, Redux, FusionAuth, Hosted on Google Cloud Platform`
  },
  {
    name: "FlightNetwork.com",
    description: `Responsive website written in ReactJS that utilizes AB testing with Optimizely, Lokalise for language support.
      Quite a large code-base worked on many developers over a couple of years.\
      High traffic site that required optimized performance as well as
      minimal down time. Worked with the UX team on completely redesigning the front-end.`,
    image: project2,
    techStack: `ReactJS, Redux, SASS, CSS Modules, Webpack, Node`

  },
  {
    name: "Study Agenda",
    description: `An web aapplication for students designed by studends that would aid in managing their time spent studying on particular assignments in a given course.  Capstone project at Seneca College that involved four developers and was built over a year time period.  Using Kanban, with tasks and respective board, along with best practices with Git (issues, pull requests and peer reviews), this project was completed and released on time and with quality.  It was showcased as top picks among peers as well as external sponsors.`,
    image: project3,
    techStack: `AngularJS, MongoB, NodeJS, Express`

  },
  {
    name: "pHash Image Search",
    description: `Using pHash image hashing algorithm, a team of two developers (including myself) and the project lead designed and built a tool for uploading an image, then hashing it, and verifying against Creative Commons database if the image is licensed, and if licensed - under which license.`,
    image: project4,
    techStack: `JavaScript, Python, PHP, C++`

  },

];