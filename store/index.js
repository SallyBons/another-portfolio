import { action, observable } from "mobx";

class Store {
  @observable initialCount = 11; //because splice does not take the second number
  @observable filteredProjects = [...this.list];
  @observable displayProjects = [
    ...this.filteredProjects.slice(0, this.initialCount),
  ];

  constructor(list) {
    this.list = list; // This var contains all 40+ projects
  }

  @action setDisplayProjects = (projects) => {
    this.displayProjects = [...projects];
  };

  @action initialCountHandler = (newCount) => {
    this.initialCount = newCount;
  };
}

export const initStore = (list) => new Store(list);
