// Importing React's useEffect and useState hooks
import { useEffect, useState } from "react";

// Importing the Button component
import Button from "../../components/Button";

// Importing styled components for the Container component
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
} from "./style";

// Functional component for a container with dynamic content and animations
const Container = ({
  textTitle,
  textContent,
  textButton,
  img1 = false,
  img2 = false,
  img3 = false,
  img4 = false,
}) => {
  // State to manage the animation trigger
  const [animation, setAnimation] = useState(false);

  // Effect to trigger animation based on scroll position
  useEffect(() => {
    addEventListener("scroll", () => {
      // Checking scroll position to determine animation state
      if (window.scrollY >= 325) {
        setAnimation(true);
      } else {
        setAnimation(false);
      }
    });
  });

  // Rendering a styled container div with dynamic content
  return (
    <DivContainer>
      {/* Displaying an image if img3 prop is true */}
      {img3 && <Image $animation src="src\assets\images\card2.svg" alt="card" />}

      {/* Creating a div container for content */}
      <DivContent>
        {/* Displaying a title with dynamic text */}
        <Title>{textTitle}</Title>
        
        {/* Displaying content text with dynamic text */}
        <ContentText>{textContent}</ContentText>
        
        {/* Displaying a primary button with dynamic text */}
        <Button isPrimary={true} text={textButton} />
      </DivContent>

      {/* Displaying an image if img1 prop is true */}
      {img1 && <Image $animation src="src\assets\images\card3.svg" alt="card" />}

      {/* Displaying cards in a div container if img2 prop and animation state are true */}
      {img2 && animation && (
        <DivCards>
          <CardGold src="src\assets\images\card3.svg" alt="card34" />
          <CardBlack src="src\assets\images\card2.svg" alt="card35" />
          <CardWhite src="src\assets\images\card1.svg" alt="card36" />
        </DivCards>
      )}

      {/* Displaying an image if img4 prop and animation state are true */}
      {img4 && animation && <Image src="src\assets\images\Phone.svg" alt="card" />}
    </DivContainer>
  );
};

// Exporting the Container component for use in other parts of the application
export default Container;
