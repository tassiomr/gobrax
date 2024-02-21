import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table as MUITable,
} from '@mui/material';
import { ReactNode } from 'react';

type TableProps = {
  data: Array<any>;
  headers: Array<string>;
  renderCell: (data: any) => ReactNode;
  ariaLabel: string;
};

export default function Table({
  data,
  headers,
  renderCell,
  ariaLabel,
}: TableProps) {
  return (
    <TableContainer component={Paper}>
      <MUITable sx={{ minWidth: 650 }} aria-label={ariaLabel}>
        <TableHead>
          <TableRow>
            {headers.map((header) => {
              return (
                <TableCell
                  key={header}
                  sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
                  align="center"
                >
                  {header}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>{data.map(renderCell)}</TableBody>
      </MUITable>
    </TableContainer>
  );
}
