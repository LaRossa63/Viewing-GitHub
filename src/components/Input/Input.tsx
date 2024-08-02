import { Input as MuiInput, InputProps } from '@mui/material';
import { FC } from 'react';
import classNames from 'classnames';
import css from './Input.module.scss';

interface IInputProps extends InputProps {}

export const Input: FC<IInputProps> = ({ className, sx, ...props }) => {
  return (
    <MuiInput
      className={classNames(css.input, className)}
      {...props}
      sx={{
        ...sx,

        '&.MuiInputBase-root': {
          padding: '8px 14px',
          borderBottom: 'transparent !important',
          borderRadius: '8px',
        },
        '&.MuiInputBase-root:before': {
          borderBottom: 'transparent !important',
        },

        '&.MuiInputBase-root:after': {
          borderBottom: 'transparent !important',
        },

        '& .MuiInput-input': {
          marginLeft: '8px',
          fontSize: '14px',
        },
      }}
    />
  );
};
