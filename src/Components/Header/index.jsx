import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo-nobg.png";
import lg1 from "../../assets/logo-nobg.png"; // Make sure to adjust this path as needed
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import "./header.scss";
import MobileMenu from './MobileMenu';

const HeaderContainer = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  position: relative;
  z-index: 999;
`;

const DescriptionSection = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  padding: 24px 80px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    height: 110px;
    width: 160px;
    object-fit: contain;
  }

  .description {
    padding-left: 24px;
    
    p {
      margin: 0;
    }
    
    .title {
      font-size: 1.875rem;
      font-weight: bold;
      color: #4a4a4a;
    }
    
    .subtitle {
      font-size: 1.125rem;
      color: #6a6a6a;
    }
  }

  @media (max-width: 1080px) {
    padding: 24px 10px;
  }
`;

const HeaderStyle = styled.div`
  width: 100%;
  box-shadow: ${({ isScrolled }) => isScrolled ? '0 1px 3px rgba(127, 202, 236, 0.8)' : 'none'};
  background: rgba(255, 255, 255, 0.95);
  position: ${({ isScrolled }) => isScrolled ? 'fixed' : 'static'};
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  & > div {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const BussinesServiceList = styled.ul`
  display: ${({ isHovered }) => isHovered ? 'block' : 'none'};
  position: absolute;
  list-style-type: none;
  padding: 10px;
  margin: 20px 10px;
  color: #f8f8f8;
  z-index: 999;
  min-width: 265px;
  background-color: #003d6d;
  transition: all 0.3s ease;

  & li {
    margin-bottom: 1px;
    padding: 10px;
  }

  & a {
    text-decoration: none;
    color: white;
    padding: 10px;
  }
`;

const UnorderedList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #003d6d;
  padding: 15px 22px;

  &:visited {
    color: #003d6d;
  }

  &:active {
    font-weight: bold;
  }

  &:hover ${BussinesServiceList} {
    display: block;
  }
`;

const MenuButton = styled(IconButton)`
  @media (min-width: 830px) {
    display: none;
  }
`;

const List = styled.li`
  list-style-type: none;
`;

const LogoSize = styled.div`
  & img {
    width: 100px;
    height: 80px;
    object-fit: contain;
  }
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 830);
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 0);
  const [isHoveredBusiness, setIsHoveredBusiness] = useState(false);
  const [isHoveredServices, setIsHoveredServices] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 830);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const mobileStaticMenu = isMobile ? false : isScrolled;

  return (
    <HeaderContainer>
      <DescriptionSection>
        <img src={lg1} alt="Large Logo" />
        <div className="description">
          <p className="title">TECH MEECO INFRASTRUCTURE PVT.LTD</p>
          <p className="subtitle">Building with Purpose, Engineering with Precision.</p>
        </div>
      </DescriptionSection>
      <HeaderStyle isScrolled={mobileStaticMenu}>
        <Container>
          <SpaceBetween>
            <LogoSize className='logo'>
              <img src={logo} alt="Logo" />
            </LogoSize>
            <div>
              {isMobile ? (
                <MenuButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleMobileMenu}
                  sx={{ transition: 'transform 0.3s ease', transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)', color: "gray" }}
                >
                  {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </MenuButton>
              ) : (
                <UnorderedList>
                  <List><StyledLink to="/">Home</StyledLink></List>
                  <List><StyledLink to="/about">About</StyledLink></List>
                  <List><StyledLink to="/Gallery">Gallery</StyledLink></List>
                 
                  
                  <List>
                    <StyledLink
                      onMouseEnter={() => setIsHoveredServices(true)}
                      onMouseLeave={() => setIsHoveredServices(false)}
                    to ="/Ser"> 
                      Services
                      <BussinesServiceList isHovered={isHoveredServices}>
                        <List><Link to="/consulting-and-studies">(PEB) - Design and Engineering</Link></List>
                        <List><Link to="/analysis-and-conceptual-design">(PEB) - Fabrication</Link></List>
                        <List><Link to="/project-supervision">(PEB) - Installation</Link></List>
                        <List><Link to="/project-management">Civil Construction</Link></List>
                        <List><Link to="/construction">Structural Fabrication and Erection</Link></List>
                      </BussinesServiceList>
                    </StyledLink>
                  </List>
                  <List><StyledLink to="/projects">Machinery</StyledLink></List>
                  <List><StyledLink to="/Product">Projects</StyledLink></List>
               
                  <List><StyledLink to="/Career">Career</StyledLink></List>
                  <List><StyledLink to="/contact">Contact</StyledLink></List>
                  <List><StyledLink to="/Blog">Blog</StyledLink></List>
                </UnorderedList>
              )}
            </div>
          </SpaceBetween>
        </Container>
        {isMobileMenuOpen && (
          <MobileMenu />
        )}
      </HeaderStyle>
    </HeaderContainer>
  );
};

export default Header;

