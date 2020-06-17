import styled from "styled-components";
import React from "react";
import { customMedia } from "../styled-components/customMedia";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  max-width: 350px;
  justify-content: space-between;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 0 25px;
  ${customMedia.lessThan("1200px")`
  max-width: unset;
  `}
`;

const SearchInput = styled.input`
  border: none;
  color: var(--white-grey);
  font-family: var(----font-bold);
  font-size: 16px;
  outline: none;
  padding: 10px 15px 10px 0;
  max-width: 400px;
  line-height: 30px;
  width: 100%;
  ::placeholder {
    color: var(--white-grey);
    font-size: 16px;
    font-family: var(----font-bold);
    line-height: 30px;
    vertical-align: middle;
  }
`;

const Image = styled.div`
  background-image: url(/img/search.svg);
  background-position: center center;
  background-size: 20px, auto, cover; // search icon
  background-repeat: no-repeat;
  max-width: 20px;
  width: 100%;
`;

const InputComponent = (props) => {
  return (
    <InputWrapper>
      <SearchInput {...props} />
      <Image />
    </InputWrapper>
  );
};

export default InputComponent;
