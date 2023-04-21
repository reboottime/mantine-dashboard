import {
  AppShell,
  type ColorScheme,
  MantineProvider
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { Notifications } from '@mantine/notifications';
import { Outlet } from 'react-router-dom';

import AppHeader from './AppHeader';
import AppMode from './AppMode';
import AppNavbar from './AppNavbar';

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
      <AppMode>
        <AppShell
          header={<AppHeader />}
          navbar={<AppNavbar/>}
          padding="md"
          styles={({ colorScheme, colors }) => ({
            main: {
              backgroundColor: (colorScheme === 'dark')
                ? colors.dark[8]
                : colors.indigo[0]
            }
          })}
        >
          <Outlet />
        </AppShell>
      </AppMode>
    </MantineProvider>
  );
};
