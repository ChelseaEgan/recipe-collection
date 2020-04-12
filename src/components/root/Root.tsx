import { Container, createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AddRecipe from '../addRecipe/addRecipe/AddRecipe';
import { ErrorBoundary } from '../ErrorBoundary';

const myTheme = createMuiTheme({
    palette: {
        primary: {
            contrastText: '#000000',
            dark: '#c63f17',
            light: '#ffa270',
            main: '#ff7043',
        },
        secondary: {
            contrastText: '#000000',
            dark: '#8d8d8d',
            light: '#efefef',
            main: '#bdbdbd',
        },
    },
});

const Root = () => (
    <Router>
        <ThemeProvider theme={myTheme}>
            <ErrorBoundary>
                <Container maxWidth='md'>
                    <Route path='/' component={AddRecipe} />
                </Container>
            </ErrorBoundary>
        </ThemeProvider>
    </Router>
);

export default Root;
