import styled from "styled-components";

const ChosenFilters = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Filter = styled.div`
  background-color: #f4f4f4;
  color: black;
  font-size: 14px;
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 16px;
  min-height: 30px;
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 5px 7px 5px 10px;
  span {
    margin-right: 5px;
    line-height: 0px;
  }
  button {
    width: 20px;
    height: 20px;
    background-color: #dbdbdb;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    font-size: 25px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
  }
`;

const ChosenFiltersComponent = (props) => {
  const buttonOnClickHandler = (value) => {
    props.updateFunction(value, props.attribute);
  };
  return (
    <ChosenFilters>
      {props.chosenFiltersArray.map((item, index) => {
        return (
          <Filter key={index}>
            <span>{item}</span>{" "}
            <button onClick={() => buttonOnClickHandler(item)}>+</button>
          </Filter>
        );
      })}
    </ChosenFilters>
  );
};
export default ChosenFiltersComponent;
