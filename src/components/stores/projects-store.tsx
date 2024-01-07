import { makeAutoObservable } from "mobx";

class ProjectsStore {
  projects = [
    {
      title: "project title 1",
      techDescription: "Tech descr",
      description: "project description 1",
      preLoadImgPath: "https://fakeimg.pl/720",
      afterLoadImgPath: "waxmoney",
      linkToProject: "1",
      id: "1",
    },
    {
      title: "project title 2",
      techDescription: "Tech descr 2",
      description: "project description 2",
      preLoadImgPath: "https://fakeimg.pl/720",
      afterLoadImgPath: "waxmoney",
      linkToProject: "2",
      id: "2",
    },
    {
      title: "project title 3",
      techDescription: "Tech descr 3",
      description: "project description 3",
      preLoadImgPath: "https://fakeimg.pl/720",
      afterLoadImgPath: "waxmoney",
      linkToProject: "3",
      id: "3",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export let newProjectsStore = new ProjectsStore();
