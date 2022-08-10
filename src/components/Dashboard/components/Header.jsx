import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  UncontrolledDropdown,
} from "reactstrap";

export default function Header() {
  return (
    <>
      <header className='topbar navbarbg' data-navbarbg='skin6'>
        <Navbar className='top-navbar' dark expand='md'>
          <div className='navbar-header' id='logobg' data-logobg='skin6'>
            <NavbarBrand href='/'>
              <b className='logo-icon'>
                <img
                  src=''
                  style={{ width: "90px" }}
                  alt='homepage'
                  className='dark-logo'
                />
              </b>
            </NavbarBrand>

            <Link to='/'>
              <button className='btn btn-danger btn-logout'>
                <i
                  style={{
                    fontFamily: "Monserrat, sans-serif",
                    fontSize: "14px",
                  }}
                  className='fa fa-sign-out-alt'
                >
                  Chiqish
                </i>
              </button>
            </Link>

            <button className='btn-link nav-toggler d-block d-md-none'>
              <Button>
                <i className='ti-menu ti-close' />
              </Button>
            </button>
          </div>
          <Collapse className='navbarbg' navbar data-navbarbg='skin6'>
            <Nav className='ml-auto float-right' navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className='pro-pic'>
                  <img
                    src=''
                    alt='user'
                    className='rounded-circle'
                    width='50'
                  />
                  <span
                    style={{
                      position: "relative",
                      color: "#000",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginLeft: "10px",
                    }}
                  >
                    UserName
                  </span>
                </DropdownToggle>
                <DropdownMenu right className='user-dd'>
                  <DropdownItem>
                    <Link to='/settingPage'>
                      <i className='ti-user mr-1 ml-1' /> Mening sahifam
                    </Link>
                  </DropdownItem>

                  {/* <DropdownItem  />
                                <DropdownItem>
                                    <i className="ti-settings mr-1 ml-1" /> Account Settings
                                </DropdownItem>
                                <DropdownItem divider /> */}

                  <DropdownItem href='/'>
                    <i className='fa fa-power-off mr-1 ml-1' /> Chiqish
                  </DropdownItem>
                  <DropdownItem divider />
                  {/* <Button
                                    color="success"
                                    className="btn-rounded ml-3 mb-2 mt-2"
                                >
                                    View Profile
                                </Button> */}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    </>
  );
}
