import styled from "styled-components";

const ChosenFilters = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Filter = styled.div`
background-color: #F4F4F4;
color:black;
font-size: 14px;
display: flex;
align-items: center;
width: fit-content;
border-radius: 16px;
min-height: 30px;
margin-bottom: 5px;
margin-right: 5px;
padding 5px 10px;
span{
    margin-right: 5px;
}
button{
    width: 20px;
    height: 20px;
    background-color: #DBDBDB;
    color: white;
    border-radius: 50%;
    cursor: pointer;
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
            <button onClick={() => buttonOnClickHandler(item)}>X</button>
          </Filter>
        );
      })}
    </ChosenFilters>
  );
};
export default ChosenFiltersComponent;
