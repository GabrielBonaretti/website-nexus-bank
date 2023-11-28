// Importing styled components for the PeopleFeedback component
import { Div, DivContent, ProfilePic, Name, Role } from "./style";

// Functional component for displaying people feedback
const PeopleFeedback = ({ srcImage, name, role }) => {
  // Rendering a div container for a person's feedback
  return (
    <Div>
      {/* Displaying a profile picture with a specified source and alt text */}
      <ProfilePic src={srcImage} alt="profile pic" />
      
      {/* Creating a div container for the content related to the person's feedback */}
      <DivContent>
        {/* Displaying the person's name */}
        <Name>{name}</Name>
        
        {/* Displaying the person's role or position */}
        <Role>{role}</Role>
      </DivContent>
    </Div>
  );
};

// Exporting the PeopleFeedback component for use in other parts of the application
export default PeopleFeedback;
