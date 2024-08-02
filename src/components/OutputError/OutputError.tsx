import { FC, ReactNode } from 'react';
import css from './OutputError.module.scss';
import { Typography } from '@mui/material';

interface IOutputErrorProps {
  icon?: ReactNode;
  text: string;
}

export const OutputError: FC<IOutputErrorProps> = ({ icon, text }) => {
  return (
    <div className={css.container}>
      {icon}

      <Typography variant="h3" color="#808080">
        {text}
      </Typography>
    </div>
  );
};
