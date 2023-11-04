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
import { useState } from "react";

const Question = ({ title, content }) => {
  const [hiddenContent, setHiddenContent] = useState(true);

  return (
    <DivQuestion>
      <DivTitleQuestion>
        <TitleQuestion>
          {title}
        </TitleQuestion>
        <ButtonStyled onClick={e => setHiddenContent(!hiddenContent)}>
          {hiddenContent ? (
            <FontAwesomeIcon icon={faPlus} size="2xl"/>
          ) : (
            <FontAwesomeIcon icon={faMinus} size="2xl"/>
          )}
        </ButtonStyled>
      </DivTitleQuestion>

      <ContentQuestion $hidden={hiddenContent} >
        {content}
      </ContentQuestion>
    </DivQuestion>
  );
};

export default Question;
