import { Provider } from "mobx-react";
import Head from "next/head";

import CardSection from "../components/CardSection";
import { initStore } from "../store";

import Manager from "../services/Manager";

const Index = ({ data }) => {
  const store = initStore(data.projects);
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
          key="test"
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
      <CardSection />
    </Provider>
  );
};
Index.getInitialProps = async () => {
  return Manager.getData(`projects`);
};

export default Index;
