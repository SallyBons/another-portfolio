import styled, { css } from "styled-components";
import { customMedia } from "../../styled-components/customMedia";

import { imageBuilder } from "../../utils/imageBuilder";

const CardComponentWrapper = styled.a`
  display: none;
  flex-direction: row;
  max-width: 100%;
  width: 100%;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin: 0 auto 25px;
  cursor: pointer;
  transition: 0.5s ease;
  :hover {
    transform: scale(1.005);
  }
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
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;
const TechnologiesWrapper = styled.div`
  display: flex;
  margin-top: 25px;
`;

const TechnologyItem = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 18px;
    color: var(--grey);
    line-height: 25px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }
`;

const TechnologyIcons = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
`;

const ImageWrapper = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-position: center center;
  background-size: cover;
  min-width: 250px;
  max-width: 250px;
  width: 100%;
  min-height: 400px;
  border-radius: 0 6px 6px 0;
  ${customMedia.lessThan("1200px")`
  min-width: unset;
  max-width: unset;
  width: 100%;
  min-height: 200px;
  border-radius: 6px;
  `}
`;

const CardComponent = (props) => {
  const databases = imageBuilder(props.databases, props.icons);
  const programming_languages = imageBuilder(
    props.programming_languages,
    props.icons
  );
  const technologies = imageBuilder(props.technologies, props.icons);

  return (
    <CardComponentWrapper display={props.display}>
      <TextWrapper>
        <Heading>{props.heading}</Heading>
        <Text>{props.text}</Text>
        {databases.length !== 0 && (
          <TechnologiesWrapper>
            <TechnologyItem>
              <p>Databases</p>
              <TechnologyIcons>
                {databases.map((database) => {
                  if (database !== "") {
                    return <img src={database} alt="oops" />;
                  }
                })}
              </TechnologyIcons>
            </TechnologyItem>
          </TechnologiesWrapper>
        )}
        {programming_languages.length !== 0 && (
          <TechnologiesWrapper>
            <TechnologyItem>
              <p>Programming Languages</p>
              <TechnologyIcons>
                {programming_languages.map((language) => {
                  if (language !== "") {
                    return <img src={language} alt="oops" />;
                  }
                })}
              </TechnologyIcons>
            </TechnologyItem>
          </TechnologiesWrapper>
        )}
        {technologies.length !== 0 && (
          <TechnologiesWrapper>
            <TechnologyItem>
              <p>Technologies</p>
              <TechnologyIcons>
                {technologies.map((technology) => {
                  if (technology !== "") {
                    return <img src={technology} alt="oops" />;
                  }
                })}
              </TechnologyIcons>
            </TechnologyItem>
          </TechnologiesWrapper>
        )}
      </TextWrapper>
      <ImageWrapper imageUrl={props.imageUrl} />
    </CardComponentWrapper>
  );
};

export default CardComponent;
