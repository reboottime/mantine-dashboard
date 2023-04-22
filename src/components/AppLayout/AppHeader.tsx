import styled from '@emotion/styled';
import { Flex, Group, Header, Transition } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import DebounceInput from 'components/DebounceInput';

import { useAppMode } from './AppMode';

const AppHeader: React.FC<Props> = ({ onSearch }) => {
  const { isMiniMode } = useAppMode();

  return (
    <Header display="flex"
      height={60}
      p="xs">
      <Group align="center"
        position="apart">
        <Flex align="center">
          <Navbrand to="/">
            Mantine{' '}
            {!isMiniMode && (
              <Transition
                duration={300}
                mounted={!isMiniMode}
                timingFunction="ease"
                transition="scale-x"
              >
                {(styles) => <span style={styles}>Dashboard</span>}
              </Transition>
            )}
          </Navbrand>
        </Flex>
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
