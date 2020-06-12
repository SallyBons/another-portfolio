import { action, observable } from "mobx";

import { filterProjectByAttribute } from "../utils/filterProjectByAttribute";
import { updateSelectedArray } from "../utils/updateSelectedArray";

class Store {
  @observable initialCount = 11; //because splice does not take the second number
  @observable filteredProjects = [...this.list];
  @observable displayProjects = [
    ...this.filteredProjects.slice(0, this.initialCount),
  ];
  @observable searchPhrase = "";
  @observable selectedIndustries = [];
  @observable selectedProgrammingLanguages = [];
  @observable selectedDataBases = [];
  @observable selectedPlatforms = [];
  @observable selectedTags = [];

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

  @action resetAll = () => {
    this.selectedIndustries = [];
    this.selectedProgrammingLanguages = [];
    this.selectedDataBases = [];
    this.selectedPlatforms = [];
    this.selectedTags = [];
  };

  @action updateSelectedAttribute = (value, attribute) => {
    switch (attribute) {
      case "industries":
        this.selectedIndustries = updateSelectedArray(
          this.selectedIndustries,
          value
        );
        break;
      case "programming_languages":
        this.selectedProgrammingLanguages = updateSelectedArray(
          this.selectedProgrammingLanguages,
          value
        );
        break;
      case "databases":
        this.selectedDataBases = updateSelectedArray(
          this.selectedDataBases,
          value
        );
        break;
      case "platforms":
        this.selectedPlatforms = updateSelectedArray(
          this.selectedPlatforms,
          value
        );
        break;
      case "tags":
        this.selectedTags = updateSelectedArray(this.selectedTags, value);
        break;

      default:
        break;
    }
    this.filterFunction();
  };

  filterFunction = () => {
    let projects = [...this.list];

    if (this.selectedIndustries.length > 0) {
      projects = filterProjectByAttribute(
        projects,
        this.selectedIndustries,
        "industries"
      );
    }

    if (this.selectedProgrammingLanguages.length > 0) {
      projects = filterProjectByAttribute(
        projects,
        this.selectedProgrammingLanguages,
        "programming_languages"
      );
    }

    if (this.selectedDataBases.length > 0) {
      projects = filterProjectByAttribute(
        projects,
        this.selectedDataBases,
        "databases"
      );
    }

    if (this.selectedPlatforms.length > 0) {
      projects = filterProjectByAttribute(
        projects,
        this.selectedPlatforms,
        "platforms"
      );
    }

    if (this.selectedTags.length > 0) {
      projects = filterProjectByAttribute(projects, this.selectedTags, "tags");
    }

    this.setFilteredProjects(projects);
  };
}

export const initStore = (list) => new Store(list);
