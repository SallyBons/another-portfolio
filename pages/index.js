import { Provider } from "mobx-react";
import Head from "next/head";

import CardSection from "../components/Cards/CardSection";
import FilterSection from "../components/Filters/FilterSection";
import { initStore } from "../store"; // import store

import { MainPageWrapper } from "../styled-components/MainPage"; // import styles for main page

import Manager from "../services/Manager";

const Index = ({ icons, projectData }) => {
  const store = initStore(projectData.data.projects); // initialize store

  const iconsObject = icons.icons;

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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800&display=swap"
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
        <FilterSection />
        <CardSection icons={iconsObject} />
      </MainPageWrapper>
    </Provider>
  );
};
Index.getInitialProps = async () => {
  const res = await fetch(process.env.REACT_APP_API_LOGOS_PATH_BACK); //get icons from database
  const icons = await res.json();
  const projectData = await Manager.getData(`projects`); //get project from database
  return { icons, projectData };
};

export default Index;
