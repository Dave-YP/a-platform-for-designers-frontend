import type { Meta, StoryObj } from "@storybook/react";
import MyCheckBox from "../components/UI/MyCheckBox/MyCheckBox";
import "../components/UI/MyCheckBox/MyCheckBox.scss";

const meta = {
  title: "UI/MyCheckBox",
  component: MyCheckBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MyCheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    label: "MyCheckBox",
  },
};

export const Disabled: Story = {
  args: {
    ...Checked.args,
    disabled: true,
  },
};