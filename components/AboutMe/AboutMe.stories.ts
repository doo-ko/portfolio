import type { Meta, StoryObj } from '@storybook/react';
import { AboutMe } from './AboutMe';

const meta = {
  title: 'Example/AboutMe',
  component: AboutMe,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AboutMe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

