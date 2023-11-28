// Importing styled components
import { DivBackground } from "../LandingPage/style";

// Importing layout components
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import ContentProfile from "../../layout/ContentProfile";

// ProfilePage component definition
const ProfilePage = () => {
  return (
    // Background styled component
    <DivBackground>
      {/* Header component without navbar and for profile page */}
      <Header navbar={false} pageProfile={true} />

      {/* ContentProfile layout component */}
      <ContentProfile />

      {/* Footer component */}
      <Footer />
    </DivBackground>
  );
};

// Exporting the ProfilePage component
export default ProfilePage;
