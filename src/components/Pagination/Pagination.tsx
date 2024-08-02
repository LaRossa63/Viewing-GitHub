import { ChangeEvent, FC, useMemo, useState } from 'react';
import { Box, Pagination as MuiPagination, Typography } from '@mui/material';

interface IPaginationProps {
  countItemPage: number;
  count: number;
  onChange: (page: number) => void;
}

export const Pagination: FC<IPaginationProps> = ({
  countItemPage,
  count,
  onChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const countPage = useMemo(() => {
    if (!count) {
      return 0;
    }

    return Math.ceil(count / countItemPage);
  }, [count, countItemPage]);

  const [startCount, endCount] = useMemo(() => {
    const behindItem = (currentPage - 1) * countItemPage + 1;
    let end = behindItem + countItemPage;

    if (currentPage === 1) {
      return [1, countItemPage];
    }

    if (end > count) {
      end = count;
    }

    return [behindItem, end];
  }, [count, countItemPage, currentPage]);

  const handleChangePagination = (
    event: ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
    onChange(value);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      gap="16px"
    >
      <Typography variant="body2" color="#808080">
        {startCount}-{endCount} of {count} items
      </Typography>

      <MuiPagination count={countPage} onChange={handleChangePagination} />
    </Box>
  );
};
