import { FC } from 'react';
import css from './List.module.scss';
import { ListItem, Pagination } from '@/components';
import { Box } from '@mui/material';
import { MAX_PEAR_PAGE } from '@/constants';
import { IUserRepository } from '@/types';
import { userInfoStore } from '@/store';

interface IListProps {
  list: IUserRepository[];
  countItem: number;
}

export const List: FC<IListProps> = ({ list, countItem }) => {
  const statusUserRepository = userInfoStore.use.statusUserRepository();

  const handleChangePagination = (page: number) => {
    userInfoStore.set.page(page);
  };

  return (
    <Box display="flex" flexDirection="column" gap="24px">
      <ul className={css.list}>
        {list.map(repository => (
          <ListItem
            key={repository.name}
            title={repository.name}
            titleLink={repository.html_url}
            description={repository.description}
          />
        ))}
      </ul>

      {list.length !== 0 && (
        <Pagination
          countItemPage={MAX_PEAR_PAGE}
          count={countItem}
          onChange={handleChangePagination}
          disabled={statusUserRepository === 'loading'}
        />
      )}
    </Box>
  );
};
