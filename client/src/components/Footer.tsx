import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
            <Typography variant="body2">
                © 2024 Mi Portafolio. Todos los derechos reservados.
            </Typography>
        </Box>
    );
};

export default Footer;
