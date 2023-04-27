import { ActionIcon, Button, Table } from '@mantine/core';
import { IconArrowDown, IconArrowUp } from '@tabler/icons-react';
import { flexRender } from '@tanstack/react-table';
import classNames from 'classnames';
import { memo } from 'react';

import { useTable } from './ProTable';
import { StyledFlex, StyledTh } from './Styled';
import TbodySkeleton from './TbodySkeleton';
import { type ProTableContentProps } from './typings';

function ProTableContent<T> ({
  clickableColumnId,
  isLoading,
  onRowClick,
  selectableColumnId
}: ProTableContentProps<T>) {
  const { columnsCount, table } = useTable();

  if (!table) {
    return null;
  }

  return (
    <Table
      highlightOnHover
      sx={{ minWidth: 800 }}
      verticalSpacing="sm"
      withBorder
      withColumnBorders
    >
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <StyledTh
                className={classNames({
                  '--checkbox': header.id === selectableColumnId
                })}
                colSpan={header.colSpan}
                key={header.id}
              >
                {header.isPlaceholder
                  ? null
                  : (
                    <StyledFlex
                      align="center"
                      {...{
                        className: classNames({
                          '--clickable': header.column.getCanSort()
                        }),
                        onClick: header.column.getToggleSortingHandler()
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: (
                          <ActionIcon size="sm"
                            variant="transparent">
                            <IconArrowUp />
                          </ActionIcon>
                        ),
                        desc: (
                          <ActionIcon size="sm"
                            variant="transparent">
                            <IconArrowDown />
                          </ActionIcon>
                        )
                      }[header.column.getIsSorted() as string] ?? null}
                    </StyledFlex>)}
              </StyledTh>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {isLoading && <TbodySkeleton columnSize={columnsCount} />}
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => {
              const cellRawContent = flexRender(
                cell.column.columnDef.cell,
                cell.getContext()
              );

              return (
                <td key={cell.id}>
                  {cell.column.id === clickableColumnId && onRowClick
                    ? (<Button compact
                      onClick={onRowClick.bind(null, row.original)}
                      variant="subtle"
                    >
                      {cellRawContent}
                    </Button>)
                    : cellRawContent
                  }
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default memo(ProTableContent);
