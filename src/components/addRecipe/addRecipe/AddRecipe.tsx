import { Button, Grid } from '@material-ui/core';
import JoditEditor from 'jodit-react';
import { Component } from 'react';
import React from 'react';
import firebase from '../../../firebase';
import Details from '../detailsSection/details/Details';
import Ingredients from '../ingredientList/IngredientList';
import './addRecipe.scss';

interface State {
    ingredients: string;
    meal: string;
    recipeTitle: string;
    servings: number;
    recipeTime: string;
    content: string;
}

export default class AddRecipe extends Component<{}, State> {
    constructor (props: {}) {
        super(props);
        this.state = {
            content: '',
            ingredients: '',
            meal: '',
            recipeTime: '',
            recipeTitle: '',
            servings: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                        <h1>Add Recipe</h1>
                    </header>
                </Grid>
                <form onSubmit={this.handleSubmit}>
                    <Grid item>
                        <Details
                            handleChange={this.handleChange}
                            meal={this.state.meal}
                            recipeTime={this.state.recipeTime}
                            recipeTitle={this.state.recipeTitle}
                            servings={this.state.servings}
                        />
                    </Grid>
                    <Grid item>
                        <Ingredients
                            ingredients={this.state.ingredients}
                            updateIngredients={ingredients => this.setState({ingredients})}
                        />
                    </Grid>
                    <Grid item>
                        <h2>RECIPE</h2>
                        {/* Documentation: https://xdsoft.net/jodit/doc/ */}
                        <JoditEditor
                            value={this.state.content}
                            config={{readonly: false, tabIndex: 0}}
                            onBlur={newContent => this.setState({ content: newContent })}
                        />
                    </Grid>
                    <Grid item id='submit-grid'>
                        <Button
                            type='submit'
                            variant='outlined'
                        >
                            Submit
                        </Button>
                    </Grid>
                </form>
            </Grid>
        );
    }

    public handleChange (key: string, value: string|number) {
        this.setState({
            [key]: value,
        } as Pick<State, keyof State>);
    }

    public handleSubmit (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const recipesRef = firebase.database().ref('recipes');
        const recipe = {
            content: this.state.content,
            ingredients: this.state.ingredients,
            meal: this.state.meal,
            servings: this.state.servings,
            time: this.state.recipeTime,
            title: this.state.recipeTitle,
        };
        recipesRef.push(recipe);
        this.setState({
            content: '',
            ingredients: '',
            meal: '',
            recipeTime: '',
            recipeTitle: '',
            servings: 0,
        });
    }
}
