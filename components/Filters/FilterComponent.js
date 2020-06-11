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

const FilterComponentWrapper = styled.div`
  .accordion__button {
    font-size: 18px;
    color: var(--azati-blue);
    font-weight: 700;
    padding: 15px;
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
    margin-bottom: 5px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(45deg);
  }

  .accordion__button[aria-expanded="true"]::after,
  .accordion__button[aria-selected="true"]::after {
    transform: rotate(225deg);
    margin-bottom: -5px;
  }
`;

const Divider = styled.div`
  border-bottom: 2px solid var(--white-grey);
  margin: 0px 15px;
`;

const CheckBoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
    input {
      width: 15px;
      height: 15px;
      margin-right: 10px;
      :checked {
        border: 2px solid black;
      }
    }
  }
`;

const FilterComponent = ({ heading, checkBoxesArray, updateFunction }) => {
  let selectedItems = [];

  let [localState, modifyState] = useState(() => {
    let localState = {};
    checkBoxesArray.forEach((el) => (localState[el] = false));
    return localState;
  });

  const toogleState = (value) => {
    let newState = {
      ...localState,
    };

    !localState[value] ? (newState[value] = true) : (newState[value] = false);

    modifyState(newState);
  };

  const checkBoxHandler = (event) => {
    !selectedItems.includes(event.target.value)
      ? selectedItems.push(event.target.value)
      : (selectedItems = selectedItems.filter(
          (el) => el !== event.target.value
        ));

    updateFunction(event.target.value);
    toogleState(event.target.value);
  };

  return (
    <FilterComponentWrapper>
      <Accordion allowZeroExpanded={true}>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>{heading}</AccordionItemButton>
          </AccordionItemHeading>
          <Divider>
            <AccordionItemPanel>
              <CheckBoxesWrapper>
                {checkBoxesArray.map((element, index) => {
                  return (
                    <div
                      key={index}
                      className={localState[element] ? "active" : "non-active"}
                    >
                      <input
                        type="checkbox"
                        name={element}
                        id={`${index}-${element}`}
                        onChange={(event) => checkBoxHandler(event)}
                        value={element}
                      />
                      <label htmlFor={`${index}-${element}`}>{element}</label>
                    </div>
                  );
                })}
              </CheckBoxesWrapper>
            </AccordionItemPanel>
          </Divider>
        </AccordionItem>
      </Accordion>
    </FilterComponentWrapper>
  );
};

export default FilterComponent;
