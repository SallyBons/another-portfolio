import { action, observable } from "mobx";

class Store {
  @observable initialCount = 11; //because splice does not take the second number
  @observable filteredProjects = [...this.list];
  @observable displayProjects = [
    ...this.filteredProjects.slice(0, this.initialCount),
  ];
  @observable searchPhrase = "";

  constructor(list) {
    this.list = list; // This var contains all 40+ projects
  }

  @action setDisplayProjects = (projects) => {
    this.displayProjects = [...projects];
  };

  @action setFilteredProjects = (projects) => {
    this.filteredProjects = [...projects];
    this.displayProjects = [
      ...this.filteredProjects.slice(0, this.initialCount),
    ];
  };

  @action setSearchPhrase = (text) => {
    this.searchPhrase = text;
  };

  @action initialCountHandler = (newCount) => {
    this.initialCount = newCount;
  };
}

export const initStore = (list) => new Store(list);
