import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Box } from '@mui/material';

// Konfiguro ikonën e paracaktuar të marker-it
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const GoogleMap = () => {
    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "50px auto", width: "100%", height: { sm: "450px", xs: "300px" } }}>
                <MapContainer center={[25.061, 22.157]} zoom={13} style={{ height: "100%", width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/edit#map=15/23.55511/87.26868">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[25.061, 22.157]}>
                        <Popup>
                            Kjo është Tirana.
                        </Popup>
                    </Marker>
                </MapContainer>
            </Box>
        </Box>


    );
}

export default GoogleMap;