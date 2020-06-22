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
  width: 100%;
  p {
    font-size: 20px;
    color: #6f6f6f;
    line-height: 25px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    padding-bottom: 10px;
    width: 100%;
  }
`;

const TechnologyIcons = styled.div`
  border-top: 1px solid var(--grey);
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  img {
    min-width: 50px;
    min-height: 50px;
  }
`;

const TooltipWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  :hover {
    div {
      display: flex;
    }
  }
`;

const Tooltip = styled.div`
  // TODO: Think about dynamic tooltip width
  min-width: 110px;
  box-sizing: content-box;
  text-align: center;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: grey;
  display: none;
  position: absolute;
  top: -35px;
  border: 1px solid grey;
  border-radius: 4px;
  background-color: #fff;
  padding: 5px 10px;
  z-index: 999;
  ::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: grey transparent transparent transparent;
  }
`;

const ImageWrapper = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-position: center center;
  background-size: cover;
  min-width: 250px;
  max-width: 250px;
  width: 100%;
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
    <CardComponentWrapper display={props.display} href={props.link}>
      <TextWrapper>
        <Heading>{props.heading}</Heading>
        <Text>{props.text}</Text>
        {(databases.length !== 0 ||
          programming_languages.length !== 0 ||
          technologies.length !== 0) && (
          <TechnologiesWrapper>
            <TechnologyItem>
              <p>Technologies</p>
              <TechnologyIcons>
                {databases.map((database, index) => {
                  return (
                    <TooltipWrapper key={index}>
                      <img src={database.url} alt="technology-icon" />
                      <Tooltip>
                        <div>{database.name}</div>
                      </Tooltip>
                    </TooltipWrapper>
                  );
                })}
                {programming_languages.map((language, index) => {
                  return (
                    <TooltipWrapper key={index}>
                      <img src={language.url} alt="technology-icon" />
                      <Tooltip>
                        <div>{language.name}</div>
                      </Tooltip>
                    </TooltipWrapper>
                  );
                })}
                {technologies.map((technology, index) => {
                  return (
                    <TooltipWrapper key={index}>
                      <img src={technology.url} alt="technology-icon" />
                      <Tooltip>
                        <div>{technology.name}</div>
                      </Tooltip>
                    </TooltipWrapper>
                  );
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
