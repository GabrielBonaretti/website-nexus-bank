// styled components
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

const Footer = () => {
  return (
    <DivFooter>
      <DivContent>
        <DivPartOne>
          <DivLogo>
            <img src="../../src/assets/images/teste.svg" alt="logo" />

            <TextLogo>
              Discover the power of our secure and rewarding credit cards
            </TextLogo>
          </DivLogo>

          <DivColumns>
            <FooterColumn
              title="About us"
              option1="Investors"
              option2="Features"
              option3="Book a demo"
              option4="Security"
            />

            <FooterColumn
              title="Products"
              option1="Credits Cards"
              option2="Gift Cards"
              option3="Savings accounts"
              option4="NFT"
            />

            <FooterColumn
              title="Useful Links"
              option1="Free rewards"
              option2="Documentation"
              option3="Affiliate program"
              option4="Get started"
            />

            <FooterColumn
              title="Social"
              option1="Changelog"
              option2="License"
              option3="Site Maps"
              option4="News"
            />
          </DivColumns>
        </DivPartOne>
        <DivPartTwo>
          <TextCopy>&copy; 2023 Gabriel Bonaretti da Silva All Rights Reserved</TextCopy>
          <TextCopy>This page uses cookies. See cookies details here </TextCopy>
        </DivPartTwo>
      </DivContent>
    </DivFooter>
  );
};

export default Footer;
