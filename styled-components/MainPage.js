import styled from "styled-components"; //need this styles for main page. Can't write it at index.js because of conflict between connected css styles and styled components (SSR conflict)

export const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 66%;
  width: 100%;
`;

export const NavigationSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  padding: 0 25px;
`;
