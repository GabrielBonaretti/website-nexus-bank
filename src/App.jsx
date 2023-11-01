// Styled components
import { DivBackground } from "./AppStyle";

// Layouts
import Container from "./layout/Banner";
import Features from "./layout/Features";
import Blog from "./layout/Blog";
import Header from "./layout/Header";

function App() {
  return (
    <DivBackground>
      <Header />

      <Container
        textTitle="Discover the Perfect Credit Card for You"
        textContent="Discover the power of our secure and rewarding credit cards. Explore our range of credit cards and take control of your finances today."
        textButton="Get Started"
        img1={true}
      />

      <Features />

      <Container
        textTitle="Design your personalized credit card"
        textContent="You have the freedom to personalize the design of your credit card, ensuring a truly unique experience that makes you feel extraordinary"
        textButton="Create new card"
        img2={true}
      />

      <Container
        textTitle="Find the Perfect Credit Card for You"
        textContent="Discover your ideal credit card with ease. Our comprehensive selection caters to every financial need and lifestyle. Whether you seek cashback rewards, travel perks, or building credit, we have the perfect credit card waiting for you. Unleash the possibilities and find the credit card that fits your unique goals and aspirations."
        textButton="Learn More"
        imgSrc="src\assets\images\card3.svg"
        contentLeft={false}
      />

      <Blog />
    </DivBackground>
  );
}

export default App;
