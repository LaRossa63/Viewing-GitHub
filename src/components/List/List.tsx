import { FC } from 'react';
import css from './List.module.scss';
import { ListItem, Pagination } from '@/components';
import { MAX_COUNT_ITEM_PAGE } from '@components/List/constants.ts';
import { Box } from '@mui/material';

interface IListProps {
  list: {
    title: string;
    titleLink: string;
    description: string;
  }[];
}

export const List: FC<IListProps> = ({ list }) => {
  const handleChangePagination = (page: number) => {
    console.log('current page', page);
  };

  return (
    <Box display="flex" flexDirection="column" gap="24px">
      <ul className={css.list}>
        {list.slice(0, 4).map(repository => (
          <ListItem
            key={repository.title}
            title={repository.title}
            titleLink={repository.titleLink}
            description={repository.description}
          />
        ))}
      </ul>

      {list.length !== 0 && (
        <Pagination
          countItemPage={MAX_COUNT_ITEM_PAGE}
          count={list.length}
          onChange={handleChangePagination}
        />
      )}
    </Box>
  );
};
