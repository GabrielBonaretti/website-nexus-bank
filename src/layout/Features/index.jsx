// importing styled components
import { DivExemples, DivFeatures, Title } from "./style";

// font awesome
import { faShield, faChartPie, faChartSimple } from "@fortawesome/free-solid-svg-icons";

// components
import FeatureExample from "../../components/FeatureExample";

const Features = () => {
  return (
    <DivFeatures>
      <Title>What do we offer?</Title>

      <DivExemples>
        <FeatureExample
          title="Security Guarantee"
          text="Your data and funds will be securely protected."
          icon={faShield}
        />

        <FeatureExample
          title="Investing"
          text="Your data and funds will be securely protected."
          icon={faChartPie}
        />

        <FeatureExample
          title="Multiple Method"
          text="Your data and funds will be securely protected."
          icon={faChartSimple}
        />
      </DivExemples>
    </DivFeatures>
  );
};

export default Features;
