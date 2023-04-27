import styled from '@emotion/styled';
import { Group, Header } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import DebounceInput from 'components/DebounceInput';

import { useAppLayoutMode } from './LayoutContainer';

const AppHeader: React.FC<Props> = ({ onSearch }) => {
  const { isMiniMode } = useAppLayoutMode();

  return (
    <Header display="flex"
      height={60}
      p="xs">
      <Group align="center"
        position="apart">
        <Navbrand
          style={{
            transitionProperty: 'width',
            transitionDuration: '0.3s',
            transitionDelay: '.2s',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            width: isMiniMode
              ? 62
              : 198
          }}
          to="/"
        >
        Mantine Dashboard
        </Navbrand>
        <Group>
          {onSearch && (
            <DebounceInput icon={<IconSearch />}
              onChange={onSearch}
              value="" />
          )}
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
