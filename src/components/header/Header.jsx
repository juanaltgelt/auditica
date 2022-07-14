import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link} from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Logotitle } from "../../assets/logo-title.svg";
import { ReactComponent as VerBar } from "../../assets/v-bar.svg";
import { ReactComponent as HorBar } from "../../assets/h-bar.svg";
import { ReactComponent as Loginlogo } from "../../assets/login.svg";
import MediaQuery from "react-responsive";
import "./Header.css";
import Authcontext from "../../context/AuthProvider";
import { useContext } from "react";
import authService from "../../services/auth.service";

function Header() {
  const { auth, setAuth } = useContext(Authcontext);

  const logOut = () => {
    authService.logout();
    setAuth("");
  };
  return (
    <Navbar className="header p-3" expand="lg">
      <Container className="container">
        <div>
          <Link to="/">
            <Logo className="me-2 mt-0" />
            <Logotitle />
          </Link>
        </div>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-dark"
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <div className="nav-bar d-flex align-items-center flex-column flex-lg-row">
            <Link className="link" to="/">
              {" "}
              Support
            </Link>
            <MediaQuery query="(min-device-width: 991px)">
              <VerBar className="mx-1" />
            </MediaQuery>
            <MediaQuery query="(max-device-width: 991px)">
              <HorBar />
            </MediaQuery>

            {auth ? (
              <Link className="link" to="/" onClick={logOut}>
                {" "}
                Log out
              </Link>
            ) : (
              <>
                <Link className="link" to="/signup">
                  {" "}
                  Sign up
                </Link>
                <Loginlogo />
                <Link className="link" to="/login">
                  {" "}
                  Log in
                </Link>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
