import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router';


const Header = () => {
    const { user, logOut, setIsLoading } = useAuth();
    const history = useHistory();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                history.push('./home')
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div>
            <Navbar ollapseOnSelect expand="lg" bg="primary" variant="dark" className="d-flex" fixed="top" >
                <Container >
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://i.ibb.co/YhK61Fn/36275105-travel-icon-removebg-preview.png"
                            width="50"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        <span className="fw-bold">Travelador</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-2">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/myBooking">My Booking</Nav.Link>
                            <Nav.Link as={Link} to="/manageBookings">Manage Bookings</Nav.Link>
                            <Nav.Link as={Link} to="/addOffer">Add New Offer</Nav.Link>
                        </Nav>
                        <Navbar.Text className="me-2">
                            Signed in as: <a href="#login">{user.displayName}</a>
                        </Navbar.Text>

                        <Navbar.Text>
                            {
                                user.email ? <button onClick={handleLogOut} className=" btn btn-light">Logout <i class="fas fa-sign-out-alt"></i></button> :
                                    <Nav.Link as={Link} to="/login" ><i class="fas fa-sign-in-alt"></i> Login</Nav.Link>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Header;