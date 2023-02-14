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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" dark expand="xs">
        <div className="container">
          <NavbarBrand href="/">Ink'd Era</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Shop
                </DropdownToggle>
                <DropdownMenu right className="bg-dark">
                  <DropdownItem className="bg-dark">
                    <NavItem>
                      <NavLink href="/Men">Men</NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem className="bg-dark">
                    <NavItem>
                      <NavLink href="/Women">Women</NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem className="bg-dark">
                    <NavItem>
                      <NavLink href="/Accessories">Accessories</NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem className="bg-dark">
                    <NavItem>
                      <NavLink href="/BestSellersPage">Best Sellers</NavLink>
                    </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/Contest">Contests</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/Blogs">Blog</NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </div>
        <button className="snipcart-checkout">
          <i class="fas fa-shopping-cart" style={{ color: "white" }}></i>
          <span className="snipcart-total-price ml-1"></span>
        </button>
      </Navbar>
    </div>
  );
};

export default Header;
