import styled from "styled-components"; //need this styles for main page. Can't write it at index.js because of conflict between connected css styles and styled components (SSR conflict)
import { customMedia } from "./customMedia";

export const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  max-width: 1440px;
  padding: 25px 15px;
  width: 100%;
  box-sizing: border-box;
  ${customMedia.lessThan("1200px")`
  flex-direction:column;
  `}
`;

export const NavigationSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  padding: 0 25px;
  box-sizing: border-box;
  ${customMedia.lessThan("1200px")`
  max-width: 1200px;
  padding: 0;
  `}
`;
