import axios from "axios";
import React,{useState,useEffect} from "react";
import { Navbar, Nav, Container, Image, Dropdown,DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { orderPlaced } from "../actions/cartAction";
import { logoutUser } from "../actions/userAction";

const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const [token, settoken] = useState("")
  const [user, setuser] = useState(null)
  const { currentUser } = userState
  useEffect(() => {
    const tok = localStorage.getItem('token')
    const getUser = async()=>{
      axios.defaults.headers.common['Authorization'] = `Bearer ${tok}`;
      const res = await axios.post("http://localhost:8080/api/auth/validate");
      setuser(res.data)
    }
    if(tok && tok.length>1) getUser()
    settoken(tok)
  }, [])
  
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Image
              src="images/logo.png"
              alt="logo"
              style={{ height: "50px", width: "150px"}}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {
                (user) ? (
                  <LinkContainer to="/">
                    <DropdownButton id="dropdown-basic-button" title={user.firstName}>
                      <Dropdown.Item onClick={()=> {dispatch(orderPlaced())}}>Order</Dropdown.Item>
                      <Dropdown.Item onClick={()=> {dispatch(logoutUser())}}>Logout</Dropdown.Item>
                    </DropdownButton>
                  </LinkContainer>
                  
                ) : (
                  <>
                    {" "}
                    <LinkContainer to="/login">
                      <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/register">
                      <Nav.Link>Register</Nav.Link>
                    </LinkContainer>{" "}
                  </>
                )}
              <LinkContainer to="/cart">
                <Nav.Link>Cart</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
