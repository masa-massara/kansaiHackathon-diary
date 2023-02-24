import { Button } from '@mantine/core';

import { AppLayout } from '@/components/layouts/layout';

// rootのページ
const Index = () => {
  return (
    <AppLayout>
      <h2 className="text-2xl font-bold">
        Boilerplate code for your Nextjs project with Tailwind CSS
      </h2>
      <Button color="red" className="font-mono">
        Hello world
      </Button>
    </AppLayout>
  );
};

export default Index;
