import { Component } from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import FilterComponent from "./FilterComponent";
import { DataSlicer } from "../../services/DataSlicer";

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
  constructor(props) {
    super(props);
    // this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  //   handleLoadMore() {
  //     const { store } = this.props;
  //     store.setDisplayProjects(
  //       DataSlicer(store.filteredProjects, store.initialCount + 10)
  //     );
  //     store.initialCountHandler(store.initialCount + 10);
  //   }

  render() {
    const { store } = this.props;

    const renderList = store.displayProjects;
    const checkBoxesArray = ["JS", "Java", "React", "Vue"];
    return (
      <FilterSectionWrapper>
        <FilterHeading>Filters</FilterHeading>
        <FilterComponent
          heading="Industries"
          checkBoxesArray={checkBoxesArray}
        ></FilterComponent>
      </FilterSectionWrapper>
    );
  }
}

export default FilterSection;
