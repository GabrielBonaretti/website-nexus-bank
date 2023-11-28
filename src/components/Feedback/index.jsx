// Importing the PeopleFeedback component from the "../PeopleFeedback" module
import PeopleFeedback from "../PeopleFeedback";

// Importing the faQuoteLeft icon from the font-awesome library
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importing styled components for the component's structure
import { BackgroundFeedback, DivIcon, TextBrief } from "./style";

// Definition of the Feedback functional component
const Feedback = ({ textBrief, srcImage, name, role }) => {
  // Rendering the BackgroundFeedback component, representing the overall background for the feedback section
  return (
    <BackgroundFeedback>
      {/* DivIcon: Container for the quote icon */}
      <DivIcon>
        {/* FontAwesomeIcon: Displaying the quote icon */}
        <FontAwesomeIcon icon={faQuoteLeft} />
      </DivIcon>

      {/* TextBrief: Displaying a brief text excerpt of the feedback */}
      <TextBrief>{textBrief}</TextBrief>

      {/* PeopleFeedback: Displaying details about the person providing the feedback (image, name, role) */}
      <PeopleFeedback
        srcImage={srcImage}
        name={name}
        role={role}
      />
    </BackgroundFeedback>
  );
}

// Exporting the Feedback component as the default export
export default Feedback;