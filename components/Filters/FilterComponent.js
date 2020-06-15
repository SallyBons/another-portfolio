import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FilterComponentWrapper = styled.div`
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
    border-bottom: 2px solid currentColor; // Styles for accordion arrow icon
    border-right: 2px solid currentColor;
    transform: rotate(45deg);
  }

  .accordion__button[aria-expanded="true"]::after,
  .accordion__button[aria-selected="true"]::after {
    transform: rotate(225deg); // styles for accordion arrow icon is up or down
    margin-top: 9px;
  }
`;

const Divider = styled.div`
  border-bottom: 1px solid var(--white-grey); //grey border between checkboxes groups
  margin: 0px 25px;
`;

const CheckBoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
    cursor: pointer;
      input {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 15px;
      height: 15px;
      margin-right: 10px;
      cursor: pointer;
      label {
        cursor: pointer;
        }
      }
    &.non-active {
      input {
        border: 1px solid var(--white-grey);
        border-radius: 2px;
      } 
    }
      &.active{
        label {
          cursor: pointer;
          color: var(--azati-orange)
        }
        input {
        :checked {
            border: 1px solid var(--azati-orange);
            border-radius: 2px;
            position: relative;
          }
          :checked ::after {
            content: '';
            position: absolute;
            width: 1.2ex;
            height: 0.4ex;
            background: rgba(0, 0, 0, 0);
            top: calc(50% - 0.2ex - 1.5px);
            left: calc(50% - 0.6ex);
            border: 1px solid var(--azati-orange); // Styles for checkbox marks
            border-top: none;
            border-right: none;
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            transform: rotate(-45deg);
         }
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
  const checkBoxHandler = (event) => {
    updateFunction(event.target.value, attribute);
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
