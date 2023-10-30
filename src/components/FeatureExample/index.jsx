// importing components styleds
import {
  IconBackground,
  FeaturesExampleDiv,
  Title,
  DivContent,
  Text,
} from "./style";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureExample = ({ title, text, icon }) => {
  return (
    <FeaturesExampleDiv>
      <IconBackground>
        <FontAwesomeIcon icon={icon} />
      </IconBackground>

      <DivContent>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </DivContent>
    </FeaturesExampleDiv>
  );
};

export default FeatureExample;
