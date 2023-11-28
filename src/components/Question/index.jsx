// Importing styled components for the Question component
import {
  ButtonStyled,
  ContentQuestion,
  DivQuestion,
  DivTitleQuestion,
  TitleQuestion,
} from "./style";

// Importing FontAwesomeIcon and icons for plus and minus
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

// Importing React's useEffect and useState hooks
import { useEffect, useState } from "react";

// Functional component for a question with toggleable content
const Question = ({ title, content }) => {
  // State to manage the visibility of content and animation height
  const [hiddenContent, setHiddenContent] = useState(true);
  const [heightAnimation, setHeightAnimation] = useState("50px");

  // Function to set the animation height based on window width
  const verifyHeight = () => {
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

  // Effect to update height on window width change
  useEffect(() => {
    verifyHeight();
  }, [window.innerWidth]);

  // Rendering a div container for the question
  return (
    <DivQuestion>
      {/* Creating a div container for the question title and toggle button */}
      <DivTitleQuestion>
        {/* Displaying the question title */}
        <TitleQuestion>{title}</TitleQuestion>
        
        {/* Rendering a button to toggle content visibility */}
        <ButtonStyled onClick={() => setHiddenContent(!hiddenContent)}>
          {/* Displaying a plus or minus icon based on content visibility */}
          {hiddenContent ? (
            <FontAwesomeIcon icon={faPlus} size="2xl" />
          ) : (
            <FontAwesomeIcon icon={faMinus} size="2xl" />
          )}
        </ButtonStyled>
      </DivTitleQuestion>

      {/* Displaying the question content with dynamic height and visibility */}
      <ContentQuestion $size={heightAnimation} $hidden={hiddenContent}>
        {content}
      </ContentQuestion>
    </DivQuestion>
  );
};

// Exporting the Question component for use in other parts of the application
export default Question;
