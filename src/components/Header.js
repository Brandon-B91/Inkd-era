import React, { useState } from "react";
import "../styles/main.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" dark expand="xs">
        <div className="container">
          <NavbarBrand href="/">Inkd Era</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Store
                </DropdownToggle>
                <DropdownMenu right className="bg-dark">
                  <DropdownItem className="bg-dark">
                    <NavItem>
                      <NavLink href="/Men">
                        Men
                      </NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem className="bg-dark">
                    <NavItem>
                      <NavLink href="/Women">
                        Women
                      </NavLink>
                    </NavItem>
                  </DropdownItem>
                </DropdownMenu >
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/Contest">Contests</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/">About</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="/Contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
