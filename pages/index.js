import { Provider } from "mobx-react";
import Head from "next/head";

import CardSection from "../components/CardSection";
import InputComponent from "../components/InputComponent";
import { initStore } from "../store";

import Manager from "../services/Manager";

const Index = ({ data }) => {
  const store = initStore(data.projects);

  const inputOnChangeHandler = (event) => {
    store.setFilteredProjects(
      store.list.filter((element) =>
        cardHasKeyword(event.target.value, element)
      )
    );
    store.setSearchPhrase(event.target.value);
  };

  const findAllKeys = () => {
    let keys = [];
    store.list.forEach((element) => {
      keys.push(...Object.keys(element));
    });
    return new Set(keys);
  };

  const keysForSearch = findAllKeys();

  const cardHasKeyword = (keyword, project) => {
    return [...keysForSearch].some((fieldToSearch) => {
      return Array.isArray(project[fieldToSearch])
        ? project[fieldToSearch].some(
            (el) => el.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
          )
        : project[fieldToSearch]
            .toLowerCase()
            .indexOf(keyword.toLowerCase()) !== -1;
    });
  };
  console.log(store.list);

  return (
    <Provider store={store}>
      <Head>
        <title>Test</title>
        <link
          rel="stylesheet"
          href="https://static.azati.ai/framework/v1/css/variables.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&display=swap"
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
      <InputComponent
        placeholder="Technologies"
        type="text"
        onInput={(event) => inputOnChangeHandler(event)}
      />
      <CardSection />
    </Provider>
  );
};
Index.getInitialProps = async () => {
  return Manager.getData(`projects`);
};

export default Index;
