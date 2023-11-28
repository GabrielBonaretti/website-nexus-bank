// Styled component for the landing page background
import { DivBackground } from "./style";

// Importing layout components
import Container from "../../layout/Banner";
import Features from "../../layout/Features";
import Blog from "../../layout/Blog";
import Header from "../../layout/Header";
import Faq from "../../layout/Faq";
import Footer from "../../layout/Footer";

// Landing page component definition
const LandingPage = () => {
  return (
    // Background styled component
    <DivBackground>
      {/* Header component for the landing page */}
      <Header />

      {/* Banner container with introductory content */}
      <Container
        textTitle="Discover the Perfect Credit Card for You"
        textContent="Discover the power of our secure and rewarding credit cards. Explore our range of credit cards and take control of your finances today."
        textButton="Get Started"
        img1={true}
      />

      {/* Features section component */}
      <Features />

      {/* Container for personalized credit card design */}
      <Container
        textTitle="Design your personalized credit card"
        textContent="You have the freedom to personalize the design of your credit card, ensuring a truly unique experience that makes you feel extraordinary"
        textButton="Create new card"
        img2={true}
      />

      {/* Container for credit card selection information */}
      <Container
        textTitle="Find the Perfect Credit Card for You"
        textContent="Discover your ideal credit card with ease. Our comprehensive selection caters to every financial need and lifestyle. Whether you seek cashback rewards, travel perks, or building credit, we have the perfect credit card waiting for you. Unleash the possibilities and find the credit card that fits your unique goals and aspirations."
        textButton="Learn More"
        img3={true}
      />

      {/* Blog section component */}
      <Blog />

      {/* FAQ section component */}
      <Faq />

      {/* Container for managing finances with a mobile app */}
      <Container
        textTitle="Easy Way to manage your finances"
        textContent="Easy to use mobile app that supports both Android and iOS."
        textButton="Get it on Google Play"
        img4={true}
      />

      {/* Footer component for the landing page */}
      <Footer />
    </DivBackground>
  );
};

// Exporting the LandingPage component
export default LandingPage;
