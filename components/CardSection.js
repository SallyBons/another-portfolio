import { Component } from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import CardComponent from "./CardComponent";
import { DataSlicer } from "../services/DataSlicer";

const LoadMoreButtonWrapper = styled.div`
  display: flex;
`;

const LoadMoreButton = styled.button`
  max-width: 320px;
  margin: 0 auto 30px;
`;

const CardSectionWrapper = styled.div`
  max-width: 900px;
`;

@inject("store")
@observer
class CardSection extends Component {
  constructor(props) {
    super(props);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  handleLoadMore() {
    const { store } = this.props;
    store.setDisplayProjects(
      DataSlicer(store.filteredProjects, store.initialCount + 10)
    );
    store.initialCountHandler(store.initialCount + 10);
  }

  render() {
    const { store } = this.props;

    const renderList = store.displayProjects;
    return (
      <CardSectionWrapper>
        {renderList.map((card, index) => {
          if (card.title && card.description) {
            return (
              <CardComponent
                key={index}
                heading={card.title}
                text={card.description}
                technologies={card?.technologies}
                imageUrl={card?.image}
              />
            );
          }
        })}
        {store.filteredProjects.length !== store.displayProjects.length && (
          <LoadMoreButtonWrapper>
            <LoadMoreButton className="af-button" onClick={this.handleLoadMore}>
              Load more
            </LoadMoreButton>
          </LoadMoreButtonWrapper>
        )}
      </CardSectionWrapper>
    );
  }
}

export default CardSection;
