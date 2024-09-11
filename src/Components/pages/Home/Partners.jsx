import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import IRCON from "../../../assets/WhatsApp Image 2024-08-22 at 15.18.57_dceff454.505a166b780b82a9f7ab.jpg";
import ministria from "../../../assets/c6.4fc7d306e42bbacc8ee7.png";
import Komuna from "../../../assets/WhatsApp Image 2024-08-22 at 15.20.47_feaf2f3d.ce8a67bbce77940f09f7.jpg";
import czechRepublic from "../../../assets/WhatsApp Image 2024-08-22 at 15.21.20_b748b4d9.4ec60b1a0b23749c0ff7.jpg";
import a from "../../../assets/c1.7cb603ddbf0b28726e57.png";
import b from "../../../assets/c2.47a18bdc72333f6d54d1.png";
import c from "../../../assets/c3.e9e548d52c5da0ec413a.png";
import d from "../../../assets/c5.886756ab6068dd169197.png";

import styled from 'styled-components';

const images = [
    {
        id:1,
        image:IRCON
    },{
        id:2,
        image:ministria
    },{
        id:3,
        image:Komuna
    },{
        id:4,
        image:czechRepublic
    },

    {
        id:5,
        image:a
    },

    {
        id:6,
        image:b
    },

    {
        id:7,
        image:c
    },

    {
        id:8,
        image:d
    },

]

const StyleImages = styled.div`
    img {
        filter: grayscale(100%);
    }

    & :hover img{
        filter:grayscale(0%);
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
    }`;

const Partners = () => {
    return (
        <Box mb="100px">
            <Container>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
                    <h5 style={{ textDecoration: "uppercase", fontSize: "11px", color: "#999", fontWeight: "400" }}>Awesome Partner</h5>
                    <h2 style={{ fontWeight: "400", fontSize: "38px", lineHeight: "calc(50/38)" }}>Our Clients</h2>
                </Box>
                <Grid container spacing={2} sx={{ display: "flex",justifyContent:"flex-start",alignItems:"center",textAlign:"center"}}>
                    {images.map((items) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={items.id}>
                            <StyleImages>
                                <Link>
                                    <img src={items.image} alt={items.image}/>
                                </Link>
                            </StyleImages>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>

    )
}

export default Partners