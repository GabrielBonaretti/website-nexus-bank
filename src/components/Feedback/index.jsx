// components
import PeopleFeedback from "../PeopleFeedback"

// font awesome
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// styleds components
import { BackgroundFeedback, DivIcon, TextBrief } from "./style";

const Feedback = ({textBrief, srcImage, name, role}) => {
  return (
    <BackgroundFeedback>
        <DivIcon>
          <FontAwesomeIcon icon={faQuoteLeft} />
        </DivIcon>

        <TextBrief>{textBrief}</TextBrief>

        <PeopleFeedback
          srcImage={srcImage}
          name={name}
          role={role}
        />
    </BackgroundFeedback>
  )
}

export default Feedback