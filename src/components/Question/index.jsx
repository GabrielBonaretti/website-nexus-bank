// styled components
import {
  ButtonStyled,
  ContentQuestion,
  DivQuestion,
  DivTitleQuestion,
  TitleQuestion,
} from "./style";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

// react
import { useEffect, useState } from "react";

const Question = ({ title, content }) => {
  const [hiddenContent, setHiddenContent] = useState(true);
  const [heightAnimation, setHeightAnimation] = useState("50px");

  const verifyHeight = (e) => {
    if (window.innerWidth > 1060) {
      setHeightAnimation("50px");
    } else if (window.innerWidth > 775) {
      setHeightAnimation("75px");
    } else if (window.innerWidth > 550) {
      setHeightAnimation("100px");
    } else if (window.innerWidth > 480) {
      setHeightAnimation("125px");
    } else if (window.innerWidth > 380) {
      setHeightAnimation("150px");
    } else if (window.innerWidth > 320) {
      setHeightAnimation("175px");
    } else {
      setHeightAnimation("200px");
    }
  };

  useEffect(() => {
    // verifyHeight()
    verifyHeight();
  }, [window.innerWidth]);

  return (
    <DivQuestion>
      <DivTitleQuestion>
        <TitleQuestion>{title}</TitleQuestion>
        <ButtonStyled onClick={(e) => setHiddenContent(!hiddenContent)}>
          {hiddenContent ? (
            <FontAwesomeIcon icon={faPlus} size="2xl" />
          ) : (
            <FontAwesomeIcon icon={faMinus} size="2xl" />
          )}
        </ButtonStyled>
      </DivTitleQuestion>

      <ContentQuestion $size={heightAnimation} $hidden={hiddenContent}>
        {content}
      </ContentQuestion>
    </DivQuestion>
  );
};

export default Question;
