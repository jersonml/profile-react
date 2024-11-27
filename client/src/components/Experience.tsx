import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const experiences = [
    {
        title: 'Desarrollador Frontend',
        company: 'Empresa ABC',
        date: 'Enero 2022 - Actualidad',
        description: 'Desarrollo de interfaces de usuario utilizando React y Material-UI.',
    },
    {
        title: 'Ingeniero de Software',
        company: 'Empresa XYZ',
        date: 'Marzo 2020 - Diciembre 2021',
        description: 'Implementación de aplicaciones web utilizando TypeScript y Node.js.',
    },
];

const Experience: React.FC = () => {
    return (
        <Grid container spacing={2}>
            {experiences.map((exp, index) => (
                <Grid item xs={12} sm={6} key={index}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{exp.title}</Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {exp.company}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {exp.date}
                            </Typography>
                            <Typography variant="body2">{exp.description}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Experience;
