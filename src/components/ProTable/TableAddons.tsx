import { Button, Flex, Group } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import DebounceInput from 'components/DebounceInput';

import { useTable } from './ProTable';

export default function TableAddons ({ children }: Props) {
  const { search, onSearch, selectedRow } = useTable();

  const tableAddons = children?.({ selectedRow });

  return (
    <Flex display="flex"
      justify="space-between"
      mb="1rem">
      <Group>
        {tableAddons?.rowAddAction}
        {tableAddons && selectedRow && <Button.Group>{tableAddons.selectedRowActions}</Button.Group>}
      </Group>
      <DebounceInput
        icon={<IconSearch size="1rem" />}
        onChange={(value) => {
          onSearch((value ?? '').toString());
        }}
        placeholder="Search all columns..."
        value={search ?? ''}
      />
    </Flex>
  );
}

interface Props {
  children?: (selectedRow: NonNullable<any>) => {
    rowAddAction?: React.ReactElement;
    selectedRowActions: React.ReactElement;
  };
}
