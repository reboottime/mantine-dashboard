import { type ColorScheme, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { Notifications } from '@mantine/notifications';
import { Outlet } from 'react-router-dom';

import LayoutContainer from './LayoutContainer';
import LayoutNavbar from './LayoutNavbar';
import { StyledMain } from './Styled';

export const AppLayout = () => {
  const [colorScheme] = useLocalStorage<ColorScheme>({
    key: 'app-color-scheme',
    defaultValue: 'light'
  });

  return (
    <MantineProvider theme={{ colorScheme }}
      withGlobalStyles
      withNormalizeCSS>
      <Notifications limit={5}
        position="top-right" />
      <LayoutContainer>
        <LayoutNavbar />
        <StyledMain>
          <Outlet />
        </StyledMain>
      </LayoutContainer>
    </MantineProvider>
  );
};
