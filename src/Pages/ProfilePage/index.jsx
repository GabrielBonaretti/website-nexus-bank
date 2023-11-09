// styled components
import { DivBackground } from "../LandingPage/style"

// layout
import Header from "../../layout/Header"
import Footer from "../../layout/Footer"

const ProfilePage = () => {
    return (
        <DivBackground>
            <Header navbar={false} />
            
            <Footer />
        </DivBackground>
    )
}

export default ProfilePage