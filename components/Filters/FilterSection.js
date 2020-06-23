import { Component } from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import { Accordion } from "react-accessible-accordion";
import FilterComponent from "./FilterComponent";
import InputComponent from "../InputComponent";
import TagComponent from "./TagComponent";
import { getAllCategories } from "../../utils/getAllCategories";
import { cardHasKeyword, findAllKeys } from "../../utils/searchInputFunctions";
import ChosenFiltersComponent from "../ChosenFiltersComponent";

import { customMedia } from "../../styled-components/customMedia";

const NavigationSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  padding: 0 25px;
  box-sizing: border-box;
  position: sticky;
  top: 20px;
  height: 100%;
  ${customMedia.lessThan("992px")`
  max-width: 1200px;
  padding: 0;
  position: initial;
  `}
`;

const FilterSectionWrapper = styled.div`
  max-width: 350px;
  margin-top: 25px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 6px 6px;
  ${customMedia.lessThan("1200px")`
  margin-bottom: 25px;
  max-width: unset;
  `}
`;

const FilterHeading = styled.div`
  background-color: #008ad2;
  color: #fff;
  border-radius: 6px 6px 0 0;
  display: flex;
  align-items: center;
  padding: 15px 25px;
  font-size: 25px;
  font-weight: 500;
`;

const ResetFilterButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

const ResetFiltersButton = styled.button`
  max-width: initial;
  width: 100%;
`;

const ChosenFiltersComponentWrapper = styled.div`
  margin-top: 25px;
`;

@inject("store")
@observer
class FilterSection extends Component {
  constructor(props) {
    super(props);
    this.handleResetAllFilters = this.handleResetAllFilters.bind(this); //bind this handler to the props
  }

  handleResetAllFilters() {
    const { store } = this.props;
    store.setFilteredProjects(store.list);
    store.resetAllFilters();
    store.resetSearchPhrase();
  }

  inputOnChangeHandler = (event) => {
    const { store } = this.props;
    store.setFilteredProjects(
      store.list.filter(
        (element) =>
          cardHasKeyword(findAllKeys(store.list), event.target.value, element) // handler for search input
      )
    );
    store.setSearchPhrase(event.target.value); // put search counter in the store for not-found block
  };

  render() {
    const { store } = this.props;
    const industries = getAllCategories(store.list, "industries"); // get all industries from store by category
    const programingLanguages = getAllCategories(
      store.list,
      "programming_languages"
    );
    const dataBases = getAllCategories(store.list, "databases");
    const platforms = getAllCategories(store.list, "platforms");
    const tags = getAllCategories(store.list, "tags");

    const updateSelectedAttribute = store.updateSelectedAttribute; //  store update function

    return (
      <NavigationSection>
        <InputComponent
          placeholder="Search..."
          type="text"
          onInput={(event) => this.inputOnChangeHandler(event)}
          value={store.searchPhrase}
        />
        <FilterSectionWrapper>
          <FilterHeading>Filters</FilterHeading>
          <Accordion allowZeroExpanded={true}>
            <FilterComponent
              heading="Industries"
              checkBoxesArray={Array.from(industries)} // converting Set to Array
              updateFunction={updateSelectedAttribute}
              attribute={"industries"}
              storeArray={[...store.selectedIndustries]} // need that construction to provide context to the child. In other way this component will not to react on store's changes and will not be re-rendered.
            />
            <FilterComponent
              heading="Build With"
              checkBoxesArray={Array.from(programingLanguages)}
              updateFunction={updateSelectedAttribute}
              attribute={"programming_languages"}
              storeArray={[...store.selectedProgrammingLanguages]}
            />
            <FilterComponent
              heading="Databases"
              checkBoxesArray={Array.from(dataBases)}
              updateFunction={updateSelectedAttribute}
              attribute={"databases"}
              storeArray={[...store.selectedDataBases]}
            />
            <FilterComponent
              heading="Platforms"
              checkBoxesArray={Array.from(platforms)}
              updateFunction={updateSelectedAttribute}
              attribute={"platforms"}
              storeArray={[...store.selectedPlatforms]}
            />
            <TagComponent
              TagsArray={Array.from(tags)}
              updateFunction={updateSelectedAttribute}
              attribute={"tags"}
              storeArray={[...store.selectedTags]}
            />
          </Accordion>
          <ResetFilterButtonWrapper>
            <ResetFiltersButton
              className="af-button"
              onClick={this.handleResetAllFilters}
            >
              Reset all filters
            </ResetFiltersButton>
          </ResetFilterButtonWrapper>
        </FilterSectionWrapper>
        <ChosenFiltersComponentWrapper>
          <ChosenFiltersComponent
            chosenFiltersArray={store.selectedIndustries}
            updateFunction={updateSelectedAttribute}
            attribute={"industries"}
          />
          <ChosenFiltersComponent
            chosenFiltersArray={store.selectedProgrammingLanguages}
            updateFunction={updateSelectedAttribute}
            attribute={"programming_languages"}
          />
          <ChosenFiltersComponent
            chosenFiltersArray={store.selectedDataBases}
            updateFunction={updateSelectedAttribute}
            attribute={"databases"}
          />
          <ChosenFiltersComponent
            chosenFiltersArray={store.selectedPlatforms}
            updateFunction={updateSelectedAttribute}
            attribute={"platforms"}
          />
        </ChosenFiltersComponentWrapper>
      </NavigationSection>
    );
  }
}

export default FilterSection;
