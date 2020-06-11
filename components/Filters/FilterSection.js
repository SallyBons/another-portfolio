import { Component } from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import FilterComponent from "./FilterComponent";
import { getAllCategories } from "../../services/getAllCategories";

const FilterSectionWrapper = styled.div`
  max-width: 300px;
  margin-top: 25px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
`;

const FilterHeading = styled.div`
  background-color: #008ad2;
  color: #fff;
  border-radius: 6px 6px 0 0;
  display: flex;
  align-items: center;
  padding: 15px;
  font-size: 25px;
  font-weight: 500;
`;

@inject("store")
@observer
class FilterSection extends Component {
  render() {
    const { store } = this.props;
    const industries = getAllCategories(store.list, "industries");
    const programingLanguages = getAllCategories(
      store.list,
      "programming_languages"
    );
    const dataBases = getAllCategories(store.list, "databases");
    const platforms = getAllCategories(store.list, "platforms");

    const updateSelectedIndustries = store.updateSelectedIndustries;

    return (
      <FilterSectionWrapper>
        <FilterHeading>Filters</FilterHeading>
        <FilterComponent
          heading="Industries"
          checkBoxesArray={Array.from(industries)}
          updateFunction={updateSelectedIndustries}
        />
        <FilterComponent
          heading="Build With"
          checkBoxesArray={Array.from(programingLanguages)}
          updateFunction={updateSelectedIndustries}
        />
        <FilterComponent
          heading="Data Bases"
          checkBoxesArray={Array.from(dataBases)}
          updateFunction={updateSelectedIndustries}
        />
        <FilterComponent
          heading="Platforms"
          checkBoxesArray={Array.from(platforms)}
          updateFunction={updateSelectedIndustries}
        />
      </FilterSectionWrapper>
    );
  }
}

export default FilterSection;
