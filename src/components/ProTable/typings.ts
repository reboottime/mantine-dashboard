import { type ColumnDef, type Table } from '@tanstack/react-table';

import type TableAddons from './TableAddons';

export interface ProTableContentProps <T = RowData> {
  clickableColumnId?: string;
  isLoading: boolean;
  onRowClick?: (row: T) => void;
  selectableColumnId?: string;
}

export type RowData = Record<string, unknown> & { id: string };

export interface ProTableProps<T> extends ProTableContentProps<T> {
  columns: Array<ColumnDef<T>>;
  data?: T[];
  getRowId?: (row: T) => string;
  tableAddons?: React.ReactElement<typeof TableAddons>;
}

export interface TableContextValue<T = any & RowData> {
  columnsCount: number;
  onSearch: (search: string) => void;
  search: string;
  selectedRow: T | null;
  table: Table<T> | null;
}
