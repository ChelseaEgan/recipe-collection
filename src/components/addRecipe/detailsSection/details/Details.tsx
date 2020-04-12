import { Grid } from '@material-ui/core';
import { Component } from 'react';
import React from 'react';
import MealPicker from '../MealPicker';
import NumberInput from '../NumberInput';
import TextInput from '../TextInput';
import './details.scss';

interface Props {
    handleChange: (id: string, value: string|number) => void;
    meal: string;
    recipeTime: string;
    recipeTitle: string;
    servings: number;
}

export default class Details extends Component<Props, {}> {
    private readonly gridItemStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
    };

    private readonly timeStyle = {
        margin: '0 10px',
    };

    public render () {
        const { handleChange, meal, recipeTime, recipeTitle, servings } = this.props;

        return (
            <Grid
                container
                spacing={3}
                direction='row'
                alignItems='flex-start'
                justify='flex-end'
                id='test-grid'
            >
                <Grid item xs={12}>
                    <TextInput
                        label='Recipe Title'
                        isFullWidth={true}
                        isRequired={true}
                        id='recipeTitle'
                        value={recipeTitle}
                        onChange={handleChange}
                        style={{}}
                    />
                </Grid>
                <Grid item xs={12} style={this.gridItemStyle}>
                    <MealPicker
                        value={meal}
                        onChange={handleChange}
                    />
                    <TextInput
                        label='Time'
                        isFullWidth={false}
                        isRequired={false}
                        id='recipeTime'
                        value={recipeTime}
                        onChange={handleChange}
                        style={this.timeStyle}
                    />
                    <NumberInput
                        label='Servings'
                        isRequired={false}
                        id='servings'
                        value={servings}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
        );
    }
}
