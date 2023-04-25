import {
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  type RowSelectionState,
  type SortingState,
  useReactTable
} from '@tanstack/react-table';
import { createContext, useContext, useMemo, useState } from 'react';

import ProTableContent from './ProTableContent';
import { type ProTableProps, type TableContextValue } from './typings';

export default function PropTable<T> ({
  columns,
  data,
  getRowId = defaultGetRowId,
  onRowClick,
  tableAddons,
  ...tableContentProps
}: ProTableProps<T>) {
  const [globalFilter, setGlobalFilter] = useState('');
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [sorting, setSorting] = useState<SortingState>([]);

  const tableData = useMemo(() => data ?? [], [data]);

  const selectedRow = useMemo(
    () => tableData.find((item) => rowSelection[getRowId(item)]),
    [tableData, rowSelection, getRowId]
  );

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      globalFilter,
      rowSelection,
      sorting
    },
    enableMultiRowSelection: false,
    enableRowSelection: true,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getRowId,
    getSortedRowModel: getSortedRowModel()
  });

  const value = useMemo(
    () => ({
      columnsCount: columns.length,
      onSearch: setGlobalFilter,
      search: globalFilter,
      selectedRow,
      table
    }),
    [columns, globalFilter, selectedRow, setGlobalFilter, table]
  );

  return (
    <tableContext.Provider value={value}>
      {tableAddons}
      <ProTableContent {...tableContentProps} />
    </tableContext.Provider>
  );
}

export const useTable = () => {
  return useContext(tableContext);
};

const defaultGetRowId = (row: any) => row.id;

const tableContext = createContext<TableContextValue>({
  columnsCount: 0,
  onSearch: (_search: string) => {},
  search: '',
  selectedRow: null,
  table: null
});
