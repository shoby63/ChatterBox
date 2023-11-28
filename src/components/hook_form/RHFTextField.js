import React from 'react';
import PropTypes from "prop-types";
import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

// The prop type definitions should be outside the component.
RHFTextField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RHFTextField({ name, helperText, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={typeof field.value === 'number' && field.value === 0 ? "" : field.value}
          error={!!error}
          helperText={error ? error.message : helperText}
          {...other}
        />
      )}
    />
  );
}
