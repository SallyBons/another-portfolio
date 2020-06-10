import styled from "styled-components"; //need this styles for main page. Can't write it at index.js because of conflict between connected css styles and styled components (SSR conflict)

export const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const NavigationSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  padding: 0 25px;
`;
