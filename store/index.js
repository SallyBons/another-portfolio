import { action, observable } from "mobx";

class Store {
  @observable initialCount = 11; //because splice does not take the second number
  @observable filteredProjects = [...this.list];
  @observable displayProjects = [
    ...this.filteredProjects.slice(0, this.initialCount),
  ];
  @observable searchPhrase = "";
  @observable selectedFilters = [];

  @observable industries = ["Healthcare", "Insurance", "Human Resources"];
  @observable selectedIndustries = [];

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

  @action updateSelectedIndustries = (value) => {
    this.selectedIndustries.includes(value)
      ? (this.selectedIndustries = this.selectedIndustries.filter(
          (el) => el !== value
        ))
      : this.selectedIndustries.push(value);
    this.filterFunction();
  };

  filterFunction = () => {
    let projects = [...this.list];
    let filteredProjects = [];

    if (this.selectedIndustries && this.selectedIndustries.length > 0) {
      projects.forEach((singleProject) => {
        if (singleProject.industries && singleProject.industries.length > 0) {
          singleProject.industries.forEach((singleIndustry) => {
            this.selectedIndustries.forEach((singleSelectedIndustry) => {
              if (singleIndustry === singleSelectedIndustry) {
                filteredProjects.push(singleProject);
              }
            });
          });
        }
      });
    } else {
      filteredProjects = [...projects];
    }

    this.setFilteredProjects(filteredProjects);
  };
}

export const initStore = (list) => new Store(list);
