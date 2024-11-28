import React from 'react';
import { Chip, Box, Typography } from '@mui/material';

const skills = ['React', 'TypeScript', 'Material-UI', 'Node.js', 'CSS', 'Vite'];

const Skills: React.FC = () => {
    return (
        <Box sx={{ textAlign: 'center', my: 4 }}>
            <Typography variant="h5" gutterBottom>
                Habilidades Técnicas
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                {skills.map((skill, index) => (
                    <Chip key={index} label={skill} color="primary" />
                ))}
            </Box>
        </Box>
    );
};

export default Skills;
