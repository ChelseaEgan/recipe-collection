import { MenuItem, TextField } from '@material-ui/core';
import React from 'react';

const mealTypes = [
    'Appetizer',
    'Breakfast',
    'Dessert',
    'Dinner',
    'Drink',
    'Side',
    'Snack',
    'Other',
];

type Props = {
    value: string;
    onChange: (id: string, value: string) => void;
};

const MealPicker = ({ value, onChange }: Props) => (
    <TextField
        select
        label='Meal'
        id='mealPicker'
        variant='outlined'
        value={value}
        onChange={e => onChange('meal', mealTypes[+e.currentTarget.value])}
    >
        {mealTypes.map(option => (
            <MenuItem key={option} value={option}>
                {option}
            </MenuItem>
        ))}
    </TextField>
);

export default MealPicker;
