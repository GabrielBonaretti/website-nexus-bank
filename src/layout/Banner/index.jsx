// styled components
import Button from "../../components/Button";
import { DivContainer, DivContent, Title, ContentText, Image } from "./style";

const Container = ({ textTitle, textContent, textButton, imgSrc, contentLeft = true }) => {
  return (
    <DivContainer>
      {!contentLeft && (
        <Image src={imgSrc} alt="card" />  
      )}
      <DivContent>
        
        <Title>{textTitle}</Title>
        <ContentText>{textContent}</ContentText>
        <Button isPrimary={true} text={textButton} />
      </DivContent>
      {contentLeft && (
        <Image src={imgSrc} alt="card" />  
      )}
    </DivContainer>
  );
};

export default Container;
