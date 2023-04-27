import {
  Button,
  Divider,
  Navbar,
  NavLink,
  ScrollArea
} from '@mantine/core';
import { IconChevronsLeft, IconChevronsRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { useAppLayoutMode } from './LayoutContainer';
import { StyledNavbar } from './Styled';
import { sidebarMenus } from './navConfig';

const AppNavbar = () => {
  const { isMiniMode, setIsMiniMode } = useAppLayoutMode();

  return (
    <StyledNavbar
      p="xs"
      width={{
        base: isMiniMode
          ? 68
          : 198
      }}
    >
      <Navbar.Section component={ScrollArea}
        grow
        mt="xl">
        <ScrollArea>
          {sidebarMenus.map(({ label, subMenus, ...menu }) => (
            <NavLink
              {...{
                ...menu,
                label
              }}
              component={Link}
              key={label}
              onClick={setIsMiniMode.bind(null, false)}
              to={menu.path}
            >
              {!!subMenus?.length &&
              !isMiniMode &&
              subMenus?.map((subMenu) => (
                <NavLink
                  {...subMenu}
                  component={Link}
                  key={subMenu.label}
                  to={subMenu.path}
                />
              ))}
            </NavLink>
          ))}
        </ScrollArea>
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
    </StyledNavbar>
  );
};

export default AppNavbar;
