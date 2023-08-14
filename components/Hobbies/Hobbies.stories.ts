import type { Meta, StoryObj } from '@storybook/react';

import { Hobbies } from './Hobbies';

const meta = {
  title: 'Example/Hobbies',
  component: Hobbies,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Hobbies>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

