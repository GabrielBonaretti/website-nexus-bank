// Styled components
import { NavStyled, Link } from "./style"

const Navbar = () => {
  return (
    <NavStyled>
        <Link href="#">Why Us</Link>
        <Link href="#">Services</Link>
        <Link href="#">Our Process</Link>
        <Link href="#">Payments</Link>
        <Link href="#">FAQs</Link>
    </NavStyled>
  )
}

export default Navbar