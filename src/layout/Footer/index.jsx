// Importing the FooterColumn component and styled components for the Footer component
import FooterColumn from "../../components/FooterColumn";
import {
  DivColumns,
  DivContent,
  DivFooter,
  DivLogo,
  DivPartOne,
  DivPartTwo,
  TextCopy,
  TextLogo,
} from "./style";

// Functional component for the website footer
const Footer = () => {
  // Rendering a styled div container for the footer
  return (
    <DivFooter>
      {/* Creating a div container for the footer content */}
      <DivContent>
        {/* Creating a div container for the first part of the footer */}
        <DivPartOne>
          {/* Creating a div container for the logo and text */}
          <DivLogo>
            {/* Displaying the logo image */}
            <img src="../../src/assets/images/teste.svg" alt="logo" />

            {/* Displaying text associated with the logo */}
            <TextLogo>
              Discover the power of our secure and rewarding credit cards
            </TextLogo>
          </DivLogo>

          {/* Creating a div container for multiple FooterColumn components */}
          <DivColumns>
            {/* Displaying a FooterColumn component with specific title and options */}
            <FooterColumn
              title="About us"
              option1="Investors"
              option2="Features"
              option3="Book a demo"
              option4="Security"
            />

            {/* Displaying a FooterColumn component with specific title and options */}
            <FooterColumn
              title="Products"
              option1="Credits Cards"
              option2="Gift Cards"
              option3="Savings accounts"
              option4="NFT"
            />

            {/* Displaying a FooterColumn component with specific title and options */}
            <FooterColumn
              title="Useful Links"
              option1="Free rewards"
              option2="Documentation"
              option3="Affiliate program"
              option4="Get started"
            />

            {/* Displaying a FooterColumn component with specific title and options */}
            <FooterColumn
              title="Social"
              option1="Changelog"
              option2="License"
              option3="Site Maps"
              option4="News"
            />
          </DivColumns>
        </DivPartOne>

        {/* Creating a div container for the second part of the footer */}
        <DivPartTwo>
          {/* Displaying copyright and rights reserved text */}
          <TextCopy>&copy; 2023 Gabriel Bonaretti da Silva All Rights Reserved</TextCopy>

          {/* Displaying information about the use of cookies */}
          <TextCopy>This page uses cookies. See cookies details here </TextCopy>
        </DivPartTwo>
      </DivContent>
    </DivFooter>
  );
};


export default Footer;
