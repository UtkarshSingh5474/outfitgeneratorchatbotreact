import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ImageAvatars from './Avatar';
import { padding } from '@mui/system';

function Header() {
    return (
        <>
            <div className="main" style={{marginTop:"30px", marginLeft:"10vw"}}>

                <Navbar bg="primary" data-bs-theme="dark"
                    style={{ borderRadius: '5px 5px 5px 5px !important', width: "80vw" }}
                    >
                    <ImageAvatars/>
                    <div className="line" style={{borderLeft:"6px solid white", height:"40px",marginLeft:"20px"}}></div>
                    <Container>

                        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                        <Nav className="me-auto">
                            <Nav.Link href="#home">UserInfo</Nav.Link>
                            <Nav.Link href="#features">Past Orders</Nav.Link>
                            <Nav.Link href="#pricing">Social Media Trends</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default Header;