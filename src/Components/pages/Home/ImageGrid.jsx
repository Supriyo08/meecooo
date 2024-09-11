import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Phantom4 from "../../../assets/PTW.jpg";
import WohnDesign from "../../../assets/CNC.jpg";
import SpotTec from "../../../assets/33.jpg";
import styled, { keyframes } from 'styled-components';

const growBorder = keyframes`
  0% {
    width: 0;
    height: 0;  
  }
  100% {
    width: 40%;
    height: 50%;
  }
`;

const ImageHover = styled.div`
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        height: auto;
        transition: transform 0.3s ease;
    }

    &:hover img {
        transform: scale(1.2);
        object-fit: cover;
    }

    &:hover::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        top: 0;
        left: 0;
        position: absolute;
    }

    .line {
        animation: none;
    }
    .line.active,
    .line.line-bottom {
        visibility: hidden;
        position: absolute;
        z-index: 2;
        width: 40%;
        height: 60%;
        margin: 10px;
    }

    &:hover .line.active,
    &:hover .line.line-bottom {
        opacity: 1;
        visibility: visible;
        animation: ${growBorder} 0.5s ease forwards;
    }

    .line.active {
        border-top: 1px solid white;
        border-left: 1px solid white;
        top: 20px;
        left: 20px;
    }

    .line-bottom {
        border-bottom: 1px solid white;
        border-right: 1px solid white;
        bottom: 20px;
        right: 20px;
    }

    .info {
        display: none;
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-align: center;
    }

    &:hover .info {
        display: flex;
        flex-direction: column;
    }
`;

const ImageGrid = () => {
    return (
        <Box mb="100px">
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: '40px' }}>
                <h2 style={{ textAlign: 'center' }}>Our Core Machines</h2>
            </Box>
            <Container>
                <Grid container spacing={3} sx={{ flexDirection: { xs: "column", md: "row" }, display: "flex", justifyContent: { md: "flex-start", lg: "center" }, alignItems: "center" }}>
                    <Grid item xs={12} lg={4} md={6}>
                        <Link to="/projects/wohndesign">
                            <ImageHover>
                                <Box sx={{ position: "relative" }}>
                                    <img src={WohnDesign} alt="PTW Machine" width={350} />
                                </Box>
                                <span className='line active'></span>
                                <span className='line line-bottom'></span>
                                <Box className='info'>
                                    <span className='line' style={{ fontSize: "30px" }}>PTW Machine</span>
                                </Box>
                            </ImageHover>
                        </Link>
                    </Grid>
                    <Grid item xs={12} lg={4} md={6}>
                        <Link to="/projects/edma-gmbh">
                            <ImageHover>
                                <Box sx={{ position: "relative" }}>
                                    <img src={Phantom4} alt="C/Z Roll Forming Machine" width={350} />
                                </Box>
                                <span className='line active'></span>
                                <span className='line line-bottom'></span>
                                <Box className='info'>
                                    <span className='line' style={{ fontSize: "30px" }}>C/Z Roll Forming Machine</span>
                                </Box>
                            </ImageHover>
                        </Link>
                    </Grid>
                    <Grid item xs={12} lg={4} md={6}>
                        <Link to="/projects/spot-tex">
                            <ImageHover>
                                <Box sx={{ position: "relative" }}>
                                    <img src={SpotTec} alt="SpotTec" width={350} />
                                </Box>
                                <span className='line active'></span>
                                <span className='line line-bottom'></span>
                                <Box className='info'>
                                    <span className='line' style={{ fontSize: "30px" }}> <br /> CNC Machine</span>
                                </Box>
                            </ImageHover>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ImageGrid;
