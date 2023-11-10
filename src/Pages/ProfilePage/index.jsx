// styled components
import { DivBackground } from "../LandingPage/style"

// layout
import Header from "../../layout/Header"
import Footer from "../../layout/Footer"
import ContentProfile from "../../layout/ContentProfile"

const ProfilePage = () => {
    return (
        <DivBackground>
            <Header
                navbar={false}
                pageProfile={true}
            />

            <ContentProfile/>

            <Footer />
        </DivBackground>
    )
}

export default ProfilePage