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
  border-bottom: 1px solid var(--white-grey);
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
    &.non-active {
      input {
        width: 15px;
        height: 15px;
        margin-right: 10px;
        // :checked {
        //   -webkit-appearance: none;
        //   -moz-appearance: none;
        //   appearance: none;
        //   border: 1px solid #767676;
        //   border-radius: 2px;
        // }
      }
    }
      &.active{
        input{
          width: 15px;
        height: 15px;
        margin-right: 10px;
          // :checked {
          //   border: 1px solid var(--azati-orange);
          //   border-radius: 2px;
          //  }
        }
      }
      
    }
  }
`;

const FilterComponent = ({
  heading,
  checkBoxesArray,
  updateFunction,
  attribute,
  storeArray,
}) => {
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
    updateFunction(event.target.value, attribute);
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
                  console.log(storeArray);
                  return (
                    <div
                      key={index}
                      className={
                        storeArray.length !== 0 && storeArray.includes(element)
                          ? "active"
                          : "non-active"
                      }
                    >
                      <input
                        type="checkbox"
                        name={element}
                        id={`${index}-${element}`}
                        onChange={(event) => checkBoxHandler(event)}
                        value={element}
                        checked={
                          storeArray.length !== 0 &&
                          storeArray.includes(element)
                            ? true
                            : false
                        }
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
