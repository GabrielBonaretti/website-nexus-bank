import { Div, DivContent, ProfilePic, Name, Role } from "./style";

const PeopleFeedback = ({ srcImage, name, role}) => {
  return (
    <Div>
      <ProfilePic src={srcImage} alt="profile pic" />
      <DivContent>
        <Name>{name}</Name>
        <Role>{role}</Role>
      </DivContent>
    </Div>
  );
};

export default PeopleFeedback;
