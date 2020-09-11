export interface ProjectInfoObject {
  title: string;
  summary: string;
  tools: string;
  link: string;
  image: string;
  imageL: string;
  imageR: string;
  index: number;
}

export const projects: Array<ProjectInfoObject> = [
  {
    title: "Discovery App",
    summary:
      "It's an app built for learning purposes and introducing my self with web development. Project progress was guided by senior Front-end developer so with this project I absorbed tools and techniques like BEM, Git, Redux, Sass and etc. witch are need for modern Front-End developer.",
    tools: "TypeScript, React, Redux, Sass",
    link: "https://github.com/cesn4/discovery-app-learning/tree/dev",
    image: "https://picsum.photos/200/300/?blur",
    imageL: "https://picsum.photos/seed/picsum/200/300",
    imageR: "https://picsum.photos/id/237/200/300",
    index: 0,
  },
  {
    title: "Portfolio",
    summary:
      "Another practice of creating a little bit different Arcade-AI portfolio application. Project polished knowlage from discovery-app, and increased proficiency of React Hook control and NPM packages",
    tools: "TypeScript, React, Redux, Sass",
    link: "https://github.com/cesn4/portfolio-V2",
    image: "https://picsum.photos/200/300/?blur",
    imageL: "https://picsum.photos/seed/picsum/200/300",
    imageR: "https://picsum.photos/id/237/200/300",
    index: 1,
  },
  {
    title: "Hantera Shop",
    summary:
      "Project combined from two applications - Shop it's self and CMS. Both created from scratch with React framework and connected with Google FireBase server services.",
    tools: "TypeScript, React, Redux, FireBase, Node.js",
    link: "In progress...",
    image: "https://picsum.photos/200/300/?blur",
    imageL: "https://picsum.photos/seed/picsum/200/300",
    imageR: "https://picsum.photos/id/237/200/300",
    index: 2,
  },
  {
    title: "Board Score",
    summary:
      "Spare time start-up activity witch is based on learning and creating an mobile application with Dart programing language, Flutter framework and Firebase servers.",
    tools: "Dart, Flutter, Firebase",
    link: "In progress...",
    image: "https://picsum.photos/200/300/?blur",
    imageL: "https://picsum.photos/seed/picsum/200/300",
    imageR: "https://picsum.photos/id/237/200/300",
    index: 3,
  },
  {
    title: "Gary Boundaries",
    summary:
      "An Contributaion for project author with help creating a web application for content. Project built with Gatsby framework and GrathQL query language.",
    tools: "Typescript, Gatsby, GraphQL, Redux, Sanity",
    link: "In progress...",
    image: "https://picsum.photos/200/300/?blur",
    imageL: "https://picsum.photos/seed/picsum/200/300",
    imageR: "https://picsum.photos/id/237/200/300",
    index: 4,
  },
];

export enum Projects {
  discoveryApp = "Discovery App",
  portfolio = "Portfolio",
  hantera = "Hantera Shop",
  boardScore = "Board Score",
  grayBoundaries = "Gary Boundaries",
}
