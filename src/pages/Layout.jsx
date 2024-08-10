/* eslint-disable react/prop-types */
/* eslint-disable no-unreachable */
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

const Layout = ({children}) => {
    return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
    )
}

export default Layout