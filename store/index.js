import { action, observable } from "mobx";

import { PROJECTS_INITIAL_COUNT } from "../constants";

import { filterProjectByAttribute } from "../utils/filterProjectByAttribute";
import { updateSelectedArray } from "../utils/updateSelectedArray";

class Store {
  @observable initialCount = PROJECTS_INITIAL_COUNT;
  @observable filteredProjects = [...this.list];
  @observable searchPhrase = "";
  @observable selectedIndustries = [];
  @observable selectedProgrammingLanguages = [];
  @observable selectedDataBases = [];
  @observable selectedPlatforms = [];
  @observable selectedTags = [];

  constructor(list) {
    this.list = list; // This var contains all 40+ projects
  }

  @action setFilteredProjects = (projects) => {
    this.filteredProjects = [...projects];
  };

  @action setSearchPhrase = (text) => {
    this.resetAllFilters(); //reset filters when type
    this.searchPhrase = text;
  };

  @action initialCountHandler = (newCount) => {
    this.initialCount = newCount;
  };

  @action resetAllFilters = () => {
    this.selectedIndustries = [];
    this.selectedProgrammingLanguages = [];
    this.selectedDataBases = [];
    this.selectedPlatforms = [];
    this.selectedTags = [];
  };

  @action resetSearchPhrase = () => {
    this.searchPhrase = "";
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

    if (
      this.selectedIndustries.length > 0 ||
      this.selectedProgrammingLanguages.length > 0 ||
      this.selectedDataBases.length > 0 ||
      this.selectedPlatforms.length > 0 ||
      this.selectedTags.length > 0
    ) {
      this.searchPhrase = "";
    }

    this.setFilteredProjects(projects);
    this.initialCountHandler(PROJECTS_INITIAL_COUNT);
  };
}

export const initStore = (list) => new Store(list);
