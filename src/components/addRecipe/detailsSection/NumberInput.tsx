import { TextField } from '@material-ui/core';
import React from 'react';

type Props = {
    label: string;
    isRequired: boolean;
    id: string;
    value: number|null;
    onChange: (id: string, value: number) => void;
};

const NumberInput = ({ label, isRequired, id, onChange, value }: Props) => (
    <TextField
        required = {isRequired}
        type='number'
        label={label}
        variant='outlined'
        id={id}
        value={value}
        onChange={e => onChange(id, +e.currentTarget.value)}
    />
);

export default NumberInput;
