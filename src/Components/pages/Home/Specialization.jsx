import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react';
import image from "../../../assets/service-01-1.png"
import styled from 'styled-components';

const ImageCenter = styled.div`
    img {
        transition: transform 0.3s ease;
    }

    &:hover img {
        transform: translateY(-10px); /* Adjust the value as needed */
    }
`;

const Specialization = () => {
    return (
        <Box height={{ sm: "100%", lg: "100%" }} sx={{ margin: "100px 0px" }}>
            <Container>
                <Stack direction="column" textAlign="center" mt="150px">
                    <Box component="h5" style={{
                        fontSize: "14px", color: "#999", marginBottom: "9px", textTransform: "uppercase",
                        letterSpacing: "0.3em"
                    }}>What we do</Box>
                    <Box component="h1" style={{ fontSize: "38px", color: "#222", lineHeight: "calc(50/38)" }}>Our specialization</Box>
                </Stack>
                <Grid container spacing={3}
                    sx={{ flexDirection: { xs: "column", md: "row" }, justifyContent: { md: "flex-start", lg: "center" }, alignItems: "flex-start", marginTop: "40px" }}>
                    <Grid item xs={12} md={6} lg={4} >
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <ImageCenter>
                                <img src={image} alt="image" />
                            </ImageCenter>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", marginTop: "20px" }}>
                            <p style={{ position: "absolute", fontSize: "28px", marginTop: "20px",textTransform:"uppercase"}}>Our Mission</p>
                            <span
                                style={{ position: "relative", fontSize: "70px", color: "#e2dada", zIndex: "-1", marginBottom: "30px" }}>
                                01
                            </span>
                        </Box>
                        <Box>
                            <Typography sx={{ textAlign: "justify", lineHeight: "2.3" }}>We are committed to designing and manufacturing high-quality, innovative, and 
sustainable pre-engineered building solutions that cater to the evolving needs 
of our customers. Motto is to deliver exceptional value, unparalleled customer 
service, and expertise in the PEB industry..</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <ImageCenter>
                                <img src={image} alt="image" />
                            </ImageCenter>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", marginTop: "20px" }}>
                            <p style={{ position: "absolute", fontSize: "28px", marginTop: "20px",textTransform:"uppercase"}}>Our Goals.</p>
                            <span
                                style={{ position: "relative", fontSize: "70px", color: "#e2dada", zIndex: "-1", marginBottom: "30px" }}>
                                02
                            </span>
                        </Box>
                        <Box>
                            <Typography sx={{ textAlign: "justify", lineHeight: "2.3" }}><p>- Deliver tailored building solutions that steadily exceed customer outlooks</p>
                            <p>- Cultivate long-term relationships grounded in trust, integrity and transparency</p>
                            <p>- Drive innovation and excellence in all facets of our business</p>
                            <p>- Advocate for sustainable and environmentally responsible practices</p>
                            <p>- Guarantee timely delivery, precision engineering and superior quality</p>
.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <ImageCenter>
                                <img src={image} alt="image" />
                            </ImageCenter>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", marginTop: "20px" }}>
                            <p style={{ position: "absolute", fontSize: "28px", marginTop: "20px",textTransform:"uppercase" }}>Our Vision</p>
                            <span
                                style={{ position: "relative", fontSize: "70px", color: "#e2dada", zIndex: "-1", marginBottom: "30px" }}>
                                03
                            </span>
                        </Box>
                        <Box>
                            <Typography sx={{ textAlign: "justify", lineHeight: "2.3" }}>To be the leading provider of pre-engineered building solutions in the Eastern 
region of India, recognized for our keenness to customer satisfaction, innovation 
and sustainability</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Specialization;