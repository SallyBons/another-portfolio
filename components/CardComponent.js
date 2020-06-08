import styled, { css } from "styled-components";

const CardComponentWrapper = styled.article`
  display: flex;
  flex-direction: row;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const Heading = styled.h3`
  font-size: 25px;
  color: #5aa3da;
  margin-bottom: 25px;
  font-weight: 700;
`;
const Text = styled.p`
  font-size: 18px;
  color: #6e6e6e;
  line-height: 30px;
`;
const Techologies = styled.div`
  font-size: 18px;
`;

const ImageWrapper = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-position: center center;
  background-size: cover;
  min-width: 200px;
  max-width: 200px;
  width: 100%;
  min-height: 400px;
`;

const CardComponent = ({ heading, text, technologies, imageUrl }) => {
  return (
    <CardComponentWrapper>
      <TextWrapper>
        <Heading>{heading}</Heading>
        <Text>{text}</Text>
        <Techologies>{technologies}</Techologies>
      </TextWrapper>
      <ImageWrapper imageUrl={imageUrl} />
    </CardComponentWrapper>
  );
};

export default CardComponent;
