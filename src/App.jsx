// Styled components
import { DivBackground } from './AppStyle';
import Container from './layout/Container';

// Layouts
import Header from './layout/Header';

function App() {

  return (
    <DivBackground>
      <Header/>

      <Container/>
    </DivBackground>
  )
}

export default App
