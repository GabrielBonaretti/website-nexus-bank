// styled components
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import {
  DivContainer,
  DivContent,
  Title,
  ContentText,
  Image,
  CardBlack,
  CardHalfBlack,
  CardWhite,
  DivCards,
} from "./style";

const Container = ({
  textTitle,
  textContent,
  textButton,
  contentLeft = true,
  img1 = false,
  img2 = false,
}) => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    addEventListener("scroll", (e) => {
      console.log(window.scrollY);
      if (window.scrollY >= 550) {
        setAnimation(true);
      } else {
        setAnimation(false);
      }
    });
  });

  return (
    <DivContainer>
      {!contentLeft && <Image src="src\assets\images\card.svg" alt="card" />}

      <DivContent>
        <Title>{textTitle}</Title>
        <ContentText>{textContent}</ContentText>
        <Button isPrimary={true} text={textButton} />
      </DivContent>

      {contentLeft && img1 && (
        <Image src="src\assets\images\card.svg" alt="card" />
      )}

      {contentLeft && img2 && animation && (
        <DivCards>
          <CardHalfBlack src="src\assets\images\Card 34.svg" alt="card34" />
          <CardBlack src="src\assets\images\Card 35.svg" alt="card35" />
          <CardWhite src="src\assets\images\Card 36.svg" alt="card36" />
        </DivCards>
      )}
    </DivContainer>
  );
};

export default Container;
