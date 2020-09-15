export interface ProjectInfoObject {
  title: string;
  summary: string;
  tools: string;
  link?: string;
  github?: string;
  image: string;
  imageL?: string;
  imageR?: string;
  index: number;
}

export const projects: Array<ProjectInfoObject> = [
  {
    title: "Discovery App",
    summary:
      "It's an app built for learning purposes and introducing my self with web development. Project progress was guided by senior Front-end developer so with this project I absorbed tools and techniques like BEM, Git, Redux, Sass and etc. witch are need for modern Front-End developer.",
    tools: "TypeScript, React, Redux, Sass",
    github: "https://github.com/cesn4/discovery-app-learning",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ai.appspot.com/o/project-images%2Fdiscovery-1-min.png?alt=media&token=e433fd13-07b3-4f90-b993-73bebac60372",
    imageL:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ai.appspot.com/o/project-images%2Fdiscovery-2-min.png?alt=media&token=5abe908b-23d9-4bd8-94a5-45c1046f25b8",
    imageR:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ai.appspot.com/o/project-images%2Fdiscovery-3-min.png?alt=media&token=21da0a4d-0cae-474a-ad5d-30df74d0ed6f",
    index: 0,
  },
  {
    title: "Portfolio",
    summary:
      "Another practice of creating a little bit different Arcade-AI portfolio application. Project polished knowlage from discovery-app, and increased proficiency of React Hook control and NPM packages",
    tools: "TypeScript, React, Redux, Sass",
    link: "https://mc49.me/",
    github: "https://github.com/cesn4/portfolio-V3",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ai.appspot.com/o/project-images%2Fportfolio-1-min.png?alt=media&token=71d4c442-588e-40dd-8b12-0e2843e8438c",
    imageL:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ai.appspot.com/o/project-images%2Fportfolio-2-min.png?alt=media&token=29c6977c-549a-4095-b27a-8f36988460c7",
    imageR:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ai.appspot.com/o/project-images%2Fportfolio-3-min.png?alt=media&token=e46f4f72-91ff-4793-a57f-3686223edce3",
    index: 1,
  },
  {
    title: "Hantera Shop",
    summary:
      "Project combined from two applications - Shop it's self and CMS. Both created from scratch with React framework and connected with Google FireBase server services.",
    tools: "TypeScript, React, Redux, FireBase, Node.js",
    link: "In progress...",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ai.appspot.com/o/project-images%2Fhantera-front-1-min.png?alt=media&token=7e6d3851-9153-4051-99da-7ff98e2c9d9b",
    imageL:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ai.appspot.com/o/project-images%2Fhantera-front-2-min.png?alt=media&token=28c9662a-3a1c-4348-84e3-27727a945aca",
    imageR:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ai.appspot.com/o/project-images%2Fhantera-front-3-min.png?alt=media&token=ad25b6fe-e55c-4ec7-bd11-3ffc55d8416d",
    index: 2,
  },
  {
    title: "Board Score",
    summary:
      "Spare time start-up activity witch is based on learning and creating an mobile application with Dart programing language, Flutter framework and Firebase servers.",
    tools: "Dart, Flutter, Firebase",
    link: "In progress...",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ai.appspot.com/o/project-images%2Fscore-1-min.png?alt=media&token=1d61846b-5964-4570-8915-cf3053e0bc90",
    index: 3,
  },
  {
    title: "Gary Boundaries",
    summary:
      "An Contributaion for project author with help creating a web application for content. Project built with Gatsby framework and GrathQL query language.",
    tools: "Typescript, Gatsby, GraphQL, Redux, Sanity",
    link: "https://pilkojizona.lrt.lt/chapter/intro",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ai.appspot.com/o/project-images%2Fzone-1-min.png?alt=media&token=f8bba9fc-53ad-49f7-ab52-a70a5e7fcc12",
    imageL:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ai.appspot.com/o/project-images%2Fzone-2-min.png?alt=media&token=56e8c5f9-ffdb-4955-b88c-27eb36a5fdc1",
    imageR:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ai.appspot.com/o/project-images%2Fzone-3-min.png?alt=media&token=4a9390c5-501f-4204-a9dc-6874fcbfadf0",
    index: 4,
  },
  {
    title: "Hantera CMS",
    summary:
      "Project combined from two applications - Shop it's self and CMS. Both created from scratch with React framework and connected with Google FireBase server services.",
    tools: "TypeScript, React, Redux, FireBase, Node.js",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ai.appspot.com/o/project-images%2Fhantera-back-2-min.png?alt=media&token=77e98c1e-b513-4cfa-b115-0130ad54805a",
    imageL:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ai.appspot.com/o/project-images%2Fhantera-back-1-min.png?alt=media&token=1b02fbde-4da6-4d74-bc38-8af685db5965",
    imageR:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ai.appspot.com/o/project-images%2Fhantera-back-3-min.png?alt=media&token=f08a1c42-8a76-4ec4-9e7c-56dac259d28c",
    index: 5,
  },
];

export enum Projects {
  discoveryApp = "Discovery App",
  portfolio = "Portfolio",
  hantera = "Hantera Shop",
  boardScore = "Board Score",
  grayBoundaries = "Gary Boundaries",
}
