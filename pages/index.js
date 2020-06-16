import { Provider } from "mobx-react";
import Head from "next/head";

import CardSection from "../components/Cards/CardSection";
import InputComponent from "../components/InputComponent";
import FilterSection from "../components/Filters/FilterSection";
import { initStore } from "../store"; // import store

import {
  MainPageWrapper,
  NavigationSection,
} from "../styled-components/MainPage"; // import styles for main page

import Manager from "../services/Manager";
import { cardHasKeyword } from "../utils/searchFunctions";
import { findAllKeys } from "../utils/findAllKeysForSearch";

const Index = ({ data }) => {
  const store = initStore(data.projects); // initialize store

  const inputOnChangeHandler = (event) => {
    store.setFilteredProjects(
      store.list.filter(
        (element) =>
          cardHasKeyword(findAllKeys(store.list), event.target.value, element) // handler for search input
      )
    );
    store.setSearchPhrase(event.target.value); // put search counter in the store for not-found block
  };

  return (
    <Provider store={store}>
      <Head>
        <title>Portfolio</title>
        <link
          rel="stylesheet"
          href="https://static.azati.ai/framework/v1/css/variables.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://static.azati.ai/web-site/css/reset.css"
        />
        <link
          rel="stylesheet"
          href="https://static.azati.ai/framework/v1/css/af-buttons.css"
        />
      </Head>
      <MainPageWrapper>
        <NavigationSection>
          <InputComponent
            placeholder="Technologies"
            type="text"
            onInput={(event) => inputOnChangeHandler(event)}
          />
          <FilterSection></FilterSection>
        </NavigationSection>
        <CardSection />
      </MainPageWrapper>
    </Provider>
  );
};
Index.getInitialProps = async () => {
  return Manager.getData(`projects`); //get project from database
};

export default Index;
