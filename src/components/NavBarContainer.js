import { Navbar, Nav } from "react-bootstrap"
import {
    FaUserAlt,
    FaRegChartBar,
    FaLinkedin,
    FaGithub,
    FaCode,
    FaPencilRuler
} from "react-icons/fa";

const menuItems =  [
    {
        path:"/",
        name:"About",
        icon:<FaUserAlt/>,
    },
    {
        path:"/dashboard",
        name:"Dashboard",
        icon:<FaRegChartBar/>,
    },
    {
        path: "/projects",
        name:"Projects",
        icon: <FaCode/>,
    },
    {
        path: "/animations",
        name: "Animations",
        icon: <FaPencilRuler/>
    }
]

const NavBarContainer = () => {
    return (
        <Navbar expand="lg" bg="light" className="px-3">
            <Navbar.Brand>Portfolio</Navbar.Brand>
            <Nav className="mr-auto">
                {
                    menuItems.map((item) => (
                        <Nav.Link  href={item.path}>{item.icon} {item.name}</Nav.Link>
                    ))
                }
            </Nav>

            <Nav className="ms-auto">
                <Nav.Link href="https://github.com/sallyman128" target="_blank">
                    <FaGithub />
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/salmaan-ali/" target="_blank">
                    <FaLinkedin />
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavBarContainer