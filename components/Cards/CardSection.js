import { Component } from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import CardComponent from "./CardComponent";
import { dataSlicer } from "../../utils/dataSlicer";

const LoadMoreButtonWrapper = styled.div`
  display: flex;
`;

const LoadMoreButton = styled.button`
  max-width: 320px;
  margin: 0 auto 30px;
`;

const CardSectionWrapper = styled.div`
  max-width: 900px;
  margin-top: 75px;
`;

const NotFoundText = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 0px;
  text-align: center;
  h3 {
    color: #c8c8c8;
  }
  p {
    font-size: 16px;
    color: #c8c8c8;
    a {
      text-decoration: underline;
      color: #c8c8c8;
      :hover {
        color: #9e9e9e;
      }
    }
  }
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
      dataSlicer(store.filteredProjects, store.initialCount + 10)
    );
    store.initialCountHandler(store.initialCount + 10);
  }

  render() {
    const { store } = this.props;

    const renderList = store.displayProjects;
    return (
      <CardSectionWrapper>
        {renderList.length !== 0 ? (
          renderList.map((card, index) => {
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
          })
        ) : (
          <NotFoundText>
            <h3>Nothing Found</h3> <h3>for "{store.searchPhrase}"</h3>
            <p>
              Please look through&nbsp;
              <a href="https://azati.ai/portfolio/all">
                the complete list of case studies
              </a>
            </p>
          </NotFoundText>
        )}
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
