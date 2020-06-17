import styled from "styled-components";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { customMedia } from "../../styled-components/customMedia";

const TagComponentWrapper = styled.div`
  .accordion__button {
    font-size: 18px;
    color: var(--azati-blue);
    font-weight: 700;
    padding: 15px 25px;
    max-height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .accordion__button:after {
    display: inline-block;
    content: "";
    height: 10px;
    width: 10px;
    margin-top: 3px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(45deg);
  }

  .accordion__button[aria-expanded="true"]::after,
  .accordion__button[aria-selected="true"]::after {
    transform: rotate(225deg);
    margin-top: 9px;
  }
`;

const Divider = styled.div`
  margin: 0px 25px;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
   }
`;

const TagElement = styled.div`
  background-color: var(--white-grey);
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 4px;
  min-height: 30px;
  margin-bottom: 5px;
  margin-right: 5px;
  padding 0 10px;
  cursor: pointer;
  :hover {
    background-color: var(--azati-orange);
    box-shadow: 0 4px 22px 0 rgba(231, 114, 0, 0);
  }
  &.active{
    background-color: var(--azati-orange);
    box-shadow: 0 4px 22px 0 rgba(231, 114, 0, 0);
  }

`;

const TagComponent = ({ TagsArray, updateFunction, attribute, storeArray }) => {
  const tagOnClickHandler = (selectedElement) => {
    updateFunction(selectedElement, attribute);
  };

  return (
    <TagComponentWrapper>
      <Accordion allowZeroExpanded={true}>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Tags</AccordionItemButton>
          </AccordionItemHeading>
          <Divider>
            <AccordionItemPanel>
              <TagsWrapper>
                {TagsArray.map((element, index) => {
                  return (
                    <TagElement
                      key={index}
                      onClick={() => tagOnClickHandler(element)}
                      className={
                        storeArray.length !== 0 && storeArray.includes(element)
                          ? "active"
                          : "non-active"
                      }
                    >
                      {element}
                    </TagElement>
                  );
                })}
              </TagsWrapper>
            </AccordionItemPanel>
          </Divider>
        </AccordionItem>
      </Accordion>
    </TagComponentWrapper>
  );
};

export default TagComponent;
