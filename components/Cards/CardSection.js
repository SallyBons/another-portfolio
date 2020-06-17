import { Component } from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import CardComponent from "./CardComponent";
import { SHOW_MORE_PROJECTS_COUNT } from "../../constants";

const ButtonWrapper = styled.div`
  display: flex;
`;

const LoadMoreButton = styled.button`
  max-width: 320px;
  margin: 0 auto 30px;
`;

const BackToTopButton = styled.a`
  max-width: 320px;
  margin: 0 auto 30px;
`;

const CardSectionWrapper = styled.div`
  max-width: 900px;
  width: 100%;
`;

const NotFoundText = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 0px;
  text-align: center;
  h3 {
    color: #c8c8c8;
    padding-bottom: 10px;
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
    this.handleLoadMore = this.handleLoadMore.bind(this); // bind handler as action to props. Without that component will not see this handler and will throw an error
  }

  handleLoadMore() {
    const { store } = this.props;
    store.initialCountHandler(store.initialCount + SHOW_MORE_PROJECTS_COUNT); // update store variable responsible for counter of show cards
  }

  render() {
    const { store, icons } = this.props;

    return (
      <CardSectionWrapper id="card-section">
        {store.filteredProjects.length !== 0 ? (
          store.filteredProjects.map((card, index) => {
            if (card?.title && card?.description) {
              return (
                <CardComponent
                  key={index}
                  heading={card?.title}
                  text={card?.description}
                  programming_languages={card?.programming_languages}
                  databases={card?.databases}
                  technologies={card?.technologies}
                  imageUrl={card?.image}
                  display={index < store.initialCount}
                  icons={icons}
                />
              );
            }
          })
        ) : (
          <NotFoundText>
            <h3>Nothing Found</h3>
            {store.searchPhrase && <h3>for "{store.searchPhrase}"</h3>}
            <p>
              Please look through&nbsp;
              <a href="https://azati.ai/portfolio/all">
                the complete list of case studies
              </a>
            </p>
          </NotFoundText>
        )}
        {store.filteredProjects.length > store.initialCount ? (
          // if there are no projects in render-list, button is hidden
          <ButtonWrapper>
            <LoadMoreButton className="af-button" onClick={this.handleLoadMore}>
              Load more
            </LoadMoreButton>
          </ButtonWrapper>
        ) : (
          <ButtonWrapper>
            <BackToTopButton
              className="af-button"
              onClick={this.handleBackToTop}
              href="#card-section"
            >
              Back to Top
            </BackToTopButton>
          </ButtonWrapper>
        )}
      </CardSectionWrapper>
    );
  }
}

export default CardSection;
