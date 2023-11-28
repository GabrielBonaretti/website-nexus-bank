// Importing styled components for the Navbar
import { NavStyled, Link } from "./style";

// Functional component for the navigation bar
const Navbar = ({ menuHamburger = false }) => {
  // Rendering a styled navigation bar with links
  return (
    <NavStyled $menuHamburger={menuHamburger}>
      {/* Displaying navigation links with specific text */}
      <Link href="#">Why Us</Link>
      <Link href="#">Services</Link>
      <Link href="#">Our Process</Link>
      <Link href="#">Payments</Link>
      <Link href="#">FAQs</Link>
    </NavStyled>
  );
};

// Exporting the Navbar component for use in other parts of the application
export default Navbar;
