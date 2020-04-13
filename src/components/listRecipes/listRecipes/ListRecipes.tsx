import { Grid, ListItem, ListItemText, ListSubheader, Divider } from '@material-ui/core';
import firebase from 'firebase';
import { Component } from 'react';
import React from 'react';
import RecipeListItem from '../recipeListItem/RecipeListItem';
import './listRecipes.scss';

function ListHeader () {
    return (
        <ListSubheader id='list-header' color='primary'>
            <Grid
                container
                direction='row'
                justify='flex-end'
                alignItems='center'
            >
                <Grid item xs={10}>
                    <ListItemText
                        primary='RECIPES'
                        id='recipe-heading'
                        className='recipe-list-heading'
                    />
                </Grid>
                <Grid item xs={2}>
                    <ListItemText
                        primary='MEAL'
                        id='meal-heading'
                        className='recipe-list-heading'
                    />
                </Grid>
            </Grid>
        </ListSubheader>
    );
}

type RecipeType = {
    meal: string,
    name: string,
};

interface ListRecipesState {
    recipes: RecipeType[];
}

export default class ListRecipes extends Component <{}, ListRecipesState> {
    constructor (props: {}) {
        super(props);
        this.state = {
            recipes: [],
        };
        this.getRecipes();
    }

    public render () {
        return (
            <Grid
                container
                direction='column'
                justify='flex-start'
                alignItems='center'
            >
                <Grid item>
                    <header>
                        <h1>All Recipes</h1>
                    </header>
                </Grid>
                <Grid item style={{width: '100%' }}>
                    <ListHeader />
                    {this.state.recipes.map((recipe, index) =>
                        <RecipeListItem
                            name={recipe.name}
                            meal={recipe.meal}
                            evenItem={index % 2 === 0}
                        />,
                    )}
                </Grid>
            </Grid>
        );
    }

    private getRecipes () {
        firebase.database().ref('recipes').orderByChild('title').once('value')
            .then(snapshot => {
                const recipes: RecipeType[] = [];

                snapshot.forEach(childSnapshot => {
                    const recipe = {
                        meal: childSnapshot.val() && childSnapshot.val().meal,
                        name: childSnapshot.val() && childSnapshot.val().title,
                    };
                    recipes.push(recipe);
                });

                this.setState({ recipes });
            });
    }
}
