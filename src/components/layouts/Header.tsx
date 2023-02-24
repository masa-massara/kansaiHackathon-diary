import { Anchor, Box, Text } from '@mantine/core';
import type { FC } from 'react';
// import React from 'react';

export const AppHeader: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'gray',
      }}
    >
      <Box>アイコン</Box>
      <Text size="xs">ここはヘッダーです</Text>
      <Text size="xl">ここにサイドバーも作ろう</Text>
      <Anchor href="/contact">
        <Text size="xl">コンタクトページに遷移する</Text>
      </Anchor>
    </Box>
  );
};
