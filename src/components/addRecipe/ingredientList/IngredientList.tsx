import { Button, Grid, TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import React, { Component } from 'react';
import './ingredientList.scss';

interface IngredientProps {
    index: number;
    text: string;
    onBlur: ((e: React.FocusEvent<HTMLInputElement>) => void);
}

const ingredientStyles = {
    width: '100%',
};

function Ingredient (props: IngredientProps) {
    return (
        <div className='ingredient'>
            <Grid container spacing={1} alignItems='flex-end'>
                <Grid item xs={1}>
                    <KeyboardArrowRightOutlinedIcon />
                </Grid>
                <Grid item xs={11}>
                    <TextField
                        id='input-with-icon-grid'
                        defaultValue={props.text}
                        name={props.index.toString()}
                        onBlur={props.onBlur}
                        style={ingredientStyles}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

interface IngredientsProps {
    ingredients: string;
    updateIngredients: (ingredients: string) => void;
}

interface IngredientsState {
    indexedIngredients: string[];
    numIngredients: number;
}

export default class Ingredients extends Component<IngredientsProps, IngredientsState> {
    constructor (props: IngredientsProps) {
        super(props);
        const splitIngredients = props.ingredients.split('\n').filter(String);
        this.state = {
            indexedIngredients: splitIngredients,
            numIngredients: 1,
        };

        this.buildIngredients = this.buildIngredients.bind(this);
        this.newIngredient = this.newIngredient.bind(this);
    }

    public render () {
        return (
            <div id='ingredients-list'>
                <h2>INGREDIENTS</h2>
                {this.buildIngredients(this.state.indexedIngredients)}
                <div id='button-container'>
                    <Button onClick={e => this.setState({ numIngredients: this.state.numIngredients + 1 })}>
                        <Grid container spacing={1}>
                            <Grid item>
                                <AddCircleIcon />
                            </Grid>
                            <Grid item>
                                Add Ingredient
                            </Grid>
                        </Grid>
                    </Button>
                </div>
            </div>
        );
    }

    private buildIngredients (ingredientsText: string[]) {
        const ingredients = [];
        for (let i = 0; i < this.state.numIngredients; i++) {

            ingredients.push(
                <Ingredient key={i.toString()} index={i} text={ingredientsText[i]} onBlur={this.newIngredient} />,
            );
        }
        return ingredients;
    }

    private newIngredient (e: React.FocusEvent<HTMLInputElement>) {
        const { indexedIngredients } = this.state;

        indexedIngredients[parseInt(e.currentTarget.name, 10)] = e.currentTarget.value;
        const joinedList = indexedIngredients.join('\n');
        this.props.updateIngredients(joinedList);
    }
}
