import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const tabList = ['AboutMe', 'Achievements', 'Skills', 'Hobbies'];
const activeTab = 'AboutMe';
function setActiveTab(tab: string): void { console.log('click' + {tab})};

export const Default: Story = {
  args: { tabList, activeTab, setActiveTab },
};

