// Styled components
import { DivBackground } from './AppStyle';
import Container from './layout/Container';

// Layouts
import Header from './layout/Header';

function App() {

  return (
    <DivBackground>
      <Header/>

      <Container
        textTitle="Discover the Perfect Credit Card for You"
        textContent= "Discover the power of our secure and rewarding credit cards. Explore our range of credit cards and take control of your finances today."
        textButton="Get Started"
        imgSrc="src\assets\images\card.svg"
      />
    </DivBackground>
  )
}

export default App
