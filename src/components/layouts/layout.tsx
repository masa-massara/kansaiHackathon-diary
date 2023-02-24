import { AppShell, Header, Navbar } from '@mantine/core';
import type { FC } from 'react';

import { AppHeader } from './Header';

type Props = {
  children: React.ReactNode;
};

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} p="xs">
            {/* Navbar content */}
          </Navbar>
        }
        header={
          <Header height={60} p="xs">
            {<AppHeader />}
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {children}
      </AppShell>
    </>
  );
};
