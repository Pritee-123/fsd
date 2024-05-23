// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const CompanyName = styled.h1`
  font-size: 1.5rem;
  margin-left: 1rem;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/">
        <Logo src="/path/to/your-logo.png" alt="Company Logo" />
        <CompanyName>Company Name</CompanyName>
      </Link>
      {/* Add other navigation links here */}
    </NavbarContainer>
  );
};

export default Navbar;
