// styled components
import Button from "../../components/Button";
import { DivContainer, DivContent, Title, ContentText } from "./style";

const Container = () => {
  return (
    <DivContainer>
      <DivContent>
        <Title>Discover the Perfect Credit Card for You</Title>
        <ContentText>
          Discover the power of our secure and rewarding credit cards. Explore
          our range of credit cards and take control of your finances today.
        </ContentText>
        <Button isPrimary={true} text="Get Started" />
      </DivContent>
      <img src="src\assets\images\card.svg" alt="card" />
    </DivContainer>
  );
};

export default Container;
