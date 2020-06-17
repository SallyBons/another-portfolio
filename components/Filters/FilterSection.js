import { Component } from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import { Accordion } from "react-accessible-accordion";
import FilterComponent from "./FilterComponent";
import TagComponent from "./TagComponent";
import { getAllCategories } from "../../utils/getAllCategories";

import { customMedia } from "../../styled-components/customMedia";

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
    store.resetAll();
  }

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
    );
  }
}

export default FilterSection;
