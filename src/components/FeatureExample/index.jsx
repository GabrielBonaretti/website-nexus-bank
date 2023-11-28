// Importing styled components for the component's structure
import {
  IconBackground,
  FeaturesExampleDiv,
  Title,
  DivContent,
  Text,
} from "./style";

// Importing FontAwesomeIcon from the font-awesome library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Definition of the FeatureExample functional component
const FeatureExample = ({ title, text, icon }) => {
  // Rendering the FeaturesExampleDiv component, which represents a container for a feature example
  return (
    <FeaturesExampleDiv>
      {/* IconBackground: Background for the FontAwesomeIcon */}
      <IconBackground>
        {/* FontAwesomeIcon: Displaying the specified icon */}
        <FontAwesomeIcon icon={icon} />
      </IconBackground>

      {/* DivContent: Container for the title and text of the feature */}
      <DivContent>
        {/* Title: Displaying the title of the feature */}
        <Title>{title}</Title>
        
        {/* Text: Displaying the text content of the feature */}
        <Text>{text}</Text>
      </DivContent>
    </FeaturesExampleDiv>
  );
};

// Exporting the FeatureExample component as the default export
export default FeatureExample;
