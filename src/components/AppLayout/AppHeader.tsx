import styled from '@emotion/styled';
import { Flex, Group, Header } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import DebounceInput from 'components/DebounceInput';

import { useAppMode } from './AppMode';

const AppHeader: React.FC<Props> = ({ onSearch }) => {
  const { isMiniMode } = useAppMode();

  return (
    <Header height={60}
      p="xs">
      <Group align="center"
        position="apart">
        <Flex align="center">
          <Navbrand to="/">
            Mantine {' '}
            {!isMiniMode && <span>Dashboard</span>}
          </Navbrand>
        </Flex>
        <Group>
          {onSearch && <DebounceInput icon={<IconSearch />}
            onChange={onSearch}
            value=""
          />}
        </Group>
      </Group>
    </Header>
  );
};

export default AppHeader;

const Navbrand = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

interface Props {
  onSearch?: (keyword: string | number) => void;
}
