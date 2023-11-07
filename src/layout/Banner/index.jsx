// react
import { useEffect, useState } from "react";

// comoponents
import Button from "../../components/Button";

// styled components
import {
  DivContainer,
  DivContent,
  Title,
  ContentText,
  Image,
  CardBlack,
  CardGold,
  CardWhite,
  DivCards,
  Image2,
} from "./style";

const Container = ({
  textTitle,
  textContent,
  textButton,
  img1 = false,
  img2 = false,
  img3 = false,
  img4 = false,
}) => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    addEventListener("scroll", (e) => {
      if (window.scrollY >= 500) {
        setAnimation(true);
      } else {
        setAnimation(false);
      }
    });
  });

  return (
    <DivContainer>
      {img3 && <Image src="src\assets\images\card2.svg" alt="card" />}

      <DivContent>
        <Title>{textTitle}</Title>
        <ContentText>{textContent}</ContentText>
        <Button isPrimary={true} text={textButton} />
      </DivContent>

      {img1 && <Image src="src\assets\images\card3.svg" alt="card" />}

      {img2 && animation && (
        <DivCards>
          <CardGold src="src\assets\images\card3.svg" alt="card34" />
          <CardBlack src="src\assets\images\card2.svg" alt="card35" />
          <CardWhite src="src\assets\images\card1.svg" alt="card36" />
        </DivCards>
      )}

      {img4 && animation && (
        <img src="src\assets\images\Phone.svg" alt="card" />
      )}
    </DivContainer>
  );
};

export default Container;
