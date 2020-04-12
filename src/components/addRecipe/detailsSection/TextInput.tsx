import { TextField } from '@material-ui/core';
import React from 'react';

type Props = {
    label: string;
    isFullWidth: boolean;
    isRequired: boolean;
    id: string;
    value: string;
    style: {};
    onChange: (id: string, value: string) => void;
};

const TextInput = ({ label, isFullWidth, isRequired, id, onChange, value, style }: Props) => (
    <TextField
        fullWidth={isFullWidth}
        required={isRequired}
        label={label}
        variant='outlined'
        id={id}
        value={value}
        onChange={e => onChange(id, e.currentTarget.value)}
        style={style}
    />
);

export default TextInput;
