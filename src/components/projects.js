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
      minimal down time. Worked with the UX team on completely redesigning the front.`,
    image: project2,
    techStack: `ReactJS, Redux, SASS, CSS Modules, Webpack, Node`

  },
  {
    name: "Study Agenda",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project3,
  },
  {
    name: "Project 4",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project4,
  },

];