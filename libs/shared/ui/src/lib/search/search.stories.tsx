import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './search';


const meta: Meta<typeof Search> = {
  component: Search,
  title: 'Search',
};
export default meta;
type Story = StoryObj<typeof Search>;

export const Primary:Story = {
  args: {
    placeHolder: 'Cari Idiom'
  },
  name: 'Search'
};
