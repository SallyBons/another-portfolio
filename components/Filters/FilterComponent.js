import styled from "styled-components";
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
  }

  .accordion__button:after {
    display: inline-block;
    content: "";
    height: 10px;
    width: 10px;
    margin-left: 160px;
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

const CheckBoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
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

const FilterComponent = ({ heading, checkBoxesArray }) => {
  const selectedItems = [];

  return (
    <FilterComponentWrapper>
      <Accordion allowZeroExpanded={true}>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>{heading}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <CheckBoxesWrapper>
              {checkBoxesArray.map((element, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      selectedItems.includes(element) ? "active" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      name={element}
                      id={`${index}-${element}`}
                    ></input>
                    <label for={`${index}-${element}`}>{element}</label>
                  </div>
                );
              })}
            </CheckBoxesWrapper>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </FilterComponentWrapper>
  );
};

export default FilterComponent;
