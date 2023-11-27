import { Menu } from ".";

export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {
    state: {
      options: ["logged-in", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "logged-in",
    destinationClassName: {},
  },
};
