import { Grid, ListItem, ListItemText } from '@material-ui/core';
import { Component } from 'react';
import React from 'react';
import './recipeListItem.scss';

interface RecipeListItemProps {
    evenItem: boolean;
    meal: string;
    name: string;
}

export default class RecipeListItem extends Component <RecipeListItemProps, {}> {
    public render () {
        return (
            <ListItem
                button
                component='a'
                href='#'
                divider={true}
                className={`list-item ${this.props.evenItem ? 'even' : ''}`}
            >
                <Grid
                    container
                    direction='row'
                    justify='flex-end'
                    alignItems='center'
                >
                    <Grid item xs={10}>
                        <ListItemText primary={this.props.name} className='list-item-name' />
                    </Grid>
                    <Grid item xs={2}>
                        <ListItemText secondary={this.props.meal} className='list-item-meal' />
                    </Grid>
                </Grid>
            </ListItem>
        );
    }
}
