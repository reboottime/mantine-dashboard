import {
  Button,
  Divider,
  Navbar,
  NavLink,
  ScrollArea,
  Transition
} from '@mantine/core';
import { IconChevronsLeft, IconChevronsRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { useAppMode } from './AppMode';
import { sidebarMenus } from './navConfig';

const AppNavbar = () => {
  const { isMiniMode, setIsMiniMode } = useAppMode();

  return (
    <Navbar
      p="xs"
      style={{
        transitionProperty: 'width',
        transitionDuration: '0.3s',
        transitionDelay: '.2s'
      }}
      width={{
        base: isMiniMode
          ? 68
          : 198
      }}
    >
      <Navbar.Section component={ScrollArea}
        grow
        mt="xl">
        {sidebarMenus.map(({ label, ...menu }) => (
          <NavLink
            {...{
              ...menu,
              label: (
                <Transition
                  duration={300}
                  mounted={!isMiniMode}
                  timingFunction="ease"
                  transition="scale-x">
                  {(styles) => <div style={styles}>{label}</div>}
                </Transition>
              )
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
