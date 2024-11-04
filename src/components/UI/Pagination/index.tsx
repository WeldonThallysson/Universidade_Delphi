import React from 'react';
import { Pagination, Stack } from '@mui/material';

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Paginations = ({ page, totalPages, onPageChange }: PaginationProps) => {
  const handlePageChange = (_event: React.ChangeEvent<unknown>, newPage: number) => {
    onPageChange(newPage);
  };

  return (
    <Stack spacing={2} alignItems="center" marginTop={2}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        color="primary"
        shape="circular"
      />
    </Stack>
  );
};

 
