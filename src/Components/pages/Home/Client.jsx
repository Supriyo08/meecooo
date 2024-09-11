import { Box, Container, Grid } from '@mui/material'
import React from 'react';
import logo from "../../../assets/About1.jpg"
import styled from 'styled-components';
import "./Client.scss";



const ClientImage = styled.div`
    position: relative;
    width: 100%;
    height: 100%;


    &::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 0;
        left: 0;
    }

`

const Client = () => {
    return (
        <Box mt={5} >
            <Container maxWidth="lg">
                <Grid container
                    spacing={3}
                    sx={{ flexDirection: { xs: "column", lg: "row" }, display: "flex", justifyContent: { md: "flex-start", lg: "center" }, alignItems: "center" }}>
                    <Grid item xs={12} lg={6} sx={{ wordBreak: "break-word", height: "100%" }}>
                        <Box xs={{ fontSize: "12px" }}></Box>
                        <Box component="h1">TechMeeco Infrastructure Pvt.Ltd</Box>
                        <Box mt={2} textAlign="justify">
                        We are concentrates in delivering made-to-order pre-engineered building (PEB) 
solutions, offering end-to-end services in design, fabrication and installation. We 
focus on providing high-quality, efficient and customer-centric solutions for 
industrial, commercial and institutional applications. Our PEB structures are 
created and manufactured in a factory before being assembled on-site, ensuring 
faster construction, reduced costs and customizable designs to meet specific 
project needs. PEBs are lightweight, durable and versatile, making them an ideal 
choice for various construction projects. Our commitment to innovation, safety 
and environmental protection ensures that we deliver reliable, economical steel 
structures with the highest standards of professionalism
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ height: "100%" }}>
                        <ClientImage>
                            <Box >
                                <img src={logo} alt="logo" style={{ width: "100%", height: "100%" }} />
                            </Box>

                            <Box sx={{ maxWidth: "100%", maxHeight: "100%" }}>
                                <span className='line active'></span>
                                <span className='line-2 line-bottom'></span>
                            </Box>
                            <Box sx={{position: "absolute",display: "flex",flexDirection: "column",zIndex: "2",
                                top: "40%",left: {xs: "30%",sm:"40%",md:"40%"},color: "white",textAlign: "center"}}>
                                <span className='text'>15</span>
                                <span className='text'>years of experience</span>
                            </Box>
                        </ClientImage>
                        {/* </Box> */}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Client;