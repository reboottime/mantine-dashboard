import { Button, Divider, Navbar, NavLink, ScrollArea } from '@mantine/core';
import { IconChevronsLeft, IconChevronsRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { useAppMode } from './AppMode';
import { sidebarMenus } from './navConfig';

const AppNavbar = () => {
  const { isMiniMode, setIsMiniMode } = useAppMode();

  const navWidth = isMiniMode
    ? 74
    : 'auto';

  return (
    <Navbar p="xs"
      width={{ base: navWidth }}>
      <Navbar.Section component={ScrollArea}
        grow
        mt="xl">
        {sidebarMenus.map(({ label, ...menu }) => (
          <NavLink
            {...{
              ...menu,
              label: isMiniMode
                ? undefined
                : label
            }}
            component={Link}
            key={label}
            onClick={setIsMiniMode.bind(null, false)}
            to={menu.path}
          >
            {!!menu.subMenus?.length &&
              !isMiniMode &&
              menu.subMenus.map((subMenu) => (
                <NavLink
                  {...subMenu}
                  component={Link}
                  key={subMenu.label}
                  to={subMenu.path}
                />
              ))}
          </NavLink>
        ))}
      </Navbar.Section>
      <Navbar.Section>
        <Divider />
        <Button
          onClick={() => {
            setIsMiniMode(!isMiniMode);
          }}
          variant="transparent"
        >
          {isMiniMode
            ? <IconChevronsRight />
            : <IconChevronsLeft />}
        </Button>
      </Navbar.Section>
    </Navbar>
  );
};

export default AppNavbar;
