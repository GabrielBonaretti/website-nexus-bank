// Importing styled components for the Features component
import { DivExemples, DivFeatures, Title } from "./style";

// Importing FontAwesome icons for features
import { faShield, faChartPie, faChartSimple } from "@fortawesome/free-solid-svg-icons";

// Importing the FeatureExample component
import FeatureExample from "../../components/FeatureExample";

// Functional component for displaying features
const Features = () => {
  // Rendering a styled div container for the features section
  return (
    <DivFeatures>
      {/* Displaying a title for the features section */}
      <Title>What do we offer?</Title>

      {/* Creating a div container for feature examples */}
      <DivExemples>
        {/* Displaying a FeatureExample component with a specific title, text, and icon */}
        <FeatureExample
          title="Security Guarantee"
          text="Your data and funds will be securely protected."
          icon={faShield}
        />

        {/* Displaying a FeatureExample component with a specific title, text, and icon */}
        <FeatureExample
          title="Investing"
          text="Your data and funds will be securely protected."
          icon={faChartPie}
        />

        {/* Displaying a FeatureExample component with a specific title, text, and icon */}
        <FeatureExample
          title="Multiple Method"
          text="Your data and funds will be securely protected."
          icon={faChartSimple}
        />
      </DivExemples>
    </DivFeatures>
  );
};

// Exporting the Features component for use in other parts of the application
export default Features;
