import styled, { css } from "styled-components";
import { customMedia } from "../../styled-components/customMedia";

const CardComponentWrapper = styled.article`
  display: none;
  flex-direction: row;
  max-width: 100%;
  width: 100%;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin: 0 auto 25px;
  ${(props) =>
    props.display &&
    css`
      display: flex;
    `}
  ${customMedia.lessThan("1200px")`
  flex-direction:column-reverse;
  `}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  ${customMedia.lessThan("552px")`
  padding: 15px;
  `}
`;

const Heading = styled.h3`
  font-size: 25px;
  color: var(--azati-blue);
  margin-bottom: 15px;
  font-weight: 700;
  line-height: 30px;
`;
const Text = styled.p`
  font-size: 18px;
  color: var(--grey);
  line-height: 25px;
`;
const Techologies = styled.div`
  font-size: 18px;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-position: center center;
  background-size: cover;
  min-width: 200px;
  max-width: 200px;
  width: 100%;
  min-height: 400px;
  ${customMedia.lessThan("1200px")`
  min-width: unset;
  max-width: unset;
  width: 100%;
  min-height: 200px;
  `}
`;

const CardComponent = ({ heading, text, technologies, imageUrl, display }) => {
  return (
    <CardComponentWrapper display={display}>
      <TextWrapper>
        <Heading>{heading}</Heading>
        <Text>{text}</Text>
        {/* <Techologies>
          {
            console.log(technologies)
            // technologies.forEach((technology) => {
            //   <p>{technology}</p>;
            // })
          }
        </Techologies> */}
      </TextWrapper>
      <ImageWrapper imageUrl={imageUrl} />
    </CardComponentWrapper>
  );
};

export default CardComponent;
