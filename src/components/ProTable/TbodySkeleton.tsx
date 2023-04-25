import { Skeleton } from '@mantine/core';

export default function TbodySkeleton ({ columnSize, rowSize = 10 }: Props) {
  const rows: JSX.Element[] = [];

  for (let i = 0; i < rowSize; i++) {
    const columns: JSX.Element[] = [];

    for (let i = 0; i < columnSize; i++) {
      columns.push(
        <td>
          <Skeleton height={20} />
        </td>
      );
    }

    rows.push(<tr>{columns}</tr>);
  }

  return <>{rows}</>;
}

interface Props {
  columnSize: number;
  rowSize?: number;
}
