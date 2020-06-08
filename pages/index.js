import styled from "styled-components";
import React from "react";
import Head from "next/head";
import Manager from "../services/Manager";

import CardComponent from "../components/CardComponent";

const HomepageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Index = ({ data }) => {
  const projects = data.projects;
  console.log(projects);

  return (
    <div>
      <Head>
        <title>Test</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&display=swap"
          rel="stylesheet"
          key="test"
        />
        <link
          rel="stylesheet"
          href="https://static.azati.ai/web-site/css/reset.css"
        />
      </Head>
      <HomepageWrapper>
        {projects &&
          projects.map((card, index) => {
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
      </HomepageWrapper>
    </div>
  );
};

Index.getInitialProps = async () => {
  return Manager.getData(`projects/${3}`);
};

export default Index;
