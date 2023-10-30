// styled components
import Button from "../../components/Button";
import { DivContainer, DivContent, Title, ContentText, Image } from "./style";

const Container = ({ textTitle, textContent, textButton, imgSrc }) => {
  return (
    <DivContainer>
      <DivContent>
        <Title>{textTitle}</Title>
        <ContentText>{textContent}</ContentText>
        <Button isPrimary={true} text={textButton} />
      </DivContent>
      <Image src={imgSrc} alt="card" />
    </DivContainer>
  );
};

export default Container;
