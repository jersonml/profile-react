import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Contact: React.FC = () => {
    return (
        <Box sx={{ maxWidth: 600, margin: 'auto', textAlign: 'center', my: 4 }}>
            <Typography variant="h5" gutterBottom>
                Contáctame
            </Typography>
            <TextField label="Nombre" fullWidth margin="normal" />
            <TextField label="Correo Electrónico" type="email" fullWidth margin="normal" />
            <TextField
                label="Mensaje"
                multiline
                rows={4}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Enviar
            </Button>
        </Box>
    );
};

export default Contact;
