import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper, Icon } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useTheme } from '../../../hooks/useTheme/useTheme';

interface Column {
  id: string;
  label: string;
  align?: 'left' | 'right' | 'center';
}

interface RowData {
  [key: string]: any;
  actions?: Array<{
    label: string;
    icon: React.ReactNode;
    onClick: (row: RowData) => void;
  }>;
}

interface DynamicTableProps {
  columns: Column[];
  itemsRow: RowData[];
}

const Tables: React.FC<DynamicTableProps> = ({ columns, itemsRow }) => {
  const { theme } = useTheme()
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} align={column.align || 'left'}>
                {column.label}
              </TableCell>
            ))}
            {itemsRow.some((row) => row.actions) && <TableCell align="center">Ações</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {itemsRow.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align || 'left'}>
                  {row[column.id]}
                </TableCell>
              ))}
              {row.actions && (
                <TableCell align="center">
                  {row.actions.map((action, actionIndex) => (
                    <IconButton
                      key={actionIndex}
                      onClick={() => action.onClick(row)}
                      aria-label={action.label}
                      color="primary"
                    >
                      <Icon fontSize='medium' sx={{color: theme.colors.blacksoft}}> {action.icon}</Icon>
                    </IconButton>
                  ))}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
