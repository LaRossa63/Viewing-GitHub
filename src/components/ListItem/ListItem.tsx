import { FC } from 'react';
import css from './ListItem.module.scss';
import { Link } from '@/hoc';
import { Typography } from '@mui/material';

interface IListItem {
  title: string;
  titleLink: string;
  description: string;
}

export const ListItem: FC<IListItem> = ({ title, titleLink, description }) => {
  return (
    <li className={css.item}>
      <Link href={titleLink}>
        <Typography variant="h3">{title}</Typography>
      </Link>

      <Typography variant="body1">{description || '-'}</Typography>
    </li>
  );
};
