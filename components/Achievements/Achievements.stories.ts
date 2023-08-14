import type { Meta, StoryObj } from '@storybook/react';
import { Achievements } from './Achievements';

const meta = {
  title: 'Example/Achievements',
  component: Achievements,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Achievements>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

