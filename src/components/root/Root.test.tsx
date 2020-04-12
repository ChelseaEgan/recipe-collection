import { mount } from 'enzyme';
import React from 'react';

import AddRecipe from '../addRecipe/addRecipe/AddRecipe';
import Root from './Root';

describe('<Root />', () => {
    let wrapper: any;

    beforeEach(() => {
        wrapper = mount(
            <Root />,
        );
    });

    test('renders app', () => {
        expect(wrapper.find(AddRecipe)).toHaveLength(1);
    });
});
