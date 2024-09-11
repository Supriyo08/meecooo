import { Box, Container } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faSquareCaretDown,  } from '@fortawesome/free-solid-svg-icons';
import EventBusyIcon from '@mui/icons-material/EventBusy';

const MobileUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f8f8f8;
    margin-bottom: 20px;
`

const BussServMobMenu = styled.ul`
    display: flex;
    flex-direction: column;
    background: #f8f8f8;
    margin-left: 20px;
`

const SecondList = styled.li`
  list-style: none;
  width: 100%;
  padding: 10px 25px 10px 15px;
  border-bottom: 1px solid #e6e6e6;

  & a {
    text-decoration: none;
    text-transform: uppercase;
    color: #003d6d;
    font-size: 13px;
    position: relative;
  }
`

const OpenList = styled.div`
    text-decoration: none;
    text-transform: uppercase;
    color: #003d6d;
    font-size: 13px;
    position: relative;
`


const Column = styled.div`
flex-direction: column;
width: 100%;
`

const MobileMenu = () => {
    const [isClickedBussines, setIsClickedBussines] = useState(false);
    const [isClickedService, setIsClickedService] = useState(false);
  return (
    <Box>
         <Container>
          <MobileUl id="menu">
            <Column>
              <SecondList><Link to="/">Home</Link></SecondList>
              <SecondList><Link to="/about">About</Link></SecondList>
             
              <SecondList onClick={() => setIsClickedService(!isClickedService)}>
                <OpenList>
                  <Box sx={{ display: "flex", justifyContent: "space-between",alignItems: "center" }}>
                  Service {isClickedService ? <EventBusyIcon /> : <FontAwesomeIcon icon={faSquareCaretDown} style={{fontSize: "20px",marginRight: "4px"}} />} 
                  </Box>
                  {isClickedService && (
                    <Box>
                      <BussServMobMenu>
                      <SecondList><Link to="/consulting-and-studies">(PEB) - Design and Engineering</Link></SecondList>
                      <SecondList><Link to="/analysis-and-conceptual-design">(PEB) - Fabrication</Link></SecondList>
                      <SecondList><Link to="/project-supervision">(PEB) - Installation</Link></SecondList>
                      <SecondList><Link to="/project-management">Civil Construction</Link></SecondList>
                      <SecondList><Link to="/construction">Structural Fabrication and Erection</Link></SecondList>
                      </BussServMobMenu>
                    </Box>
                  )}
                </OpenList>
              </SecondList>
              <SecondList><Link to="/projects">Projects</Link></SecondList>
              <SecondList><Link to="/contact">Contact</Link></SecondList>
            </Column>
          </MobileUl>
        </Container>
    </Box>
  )
}

export default MobileMenu