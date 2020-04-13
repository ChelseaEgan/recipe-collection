import { Container, createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AddRecipe from '../addRecipe/addRecipe/AddRecipe';
import { ErrorBoundary } from '../ErrorBoundary';
import ListRecipes from '../listRecipes/listRecipes/ListRecipes';

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
    <Container maxWidth='md'>
        <ThemeProvider theme={myTheme}>
            <ErrorBoundary>
                <Switch>
                    <Route path='/add-recipe' component={AddRecipe} />
                    <Route component={ListRecipes} />
                </Switch>
            </ErrorBoundary>
        </ThemeProvider>
    </Container>
);

export default Root;
