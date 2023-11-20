import { GroupCards } from ".";

export default {
  title: "Components/GroupCards",
  component: GroupCards,
  argTypes: {
    featured: {
      options: ["activities", "destinations", "culture"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    featured: "activities",
  },
};
