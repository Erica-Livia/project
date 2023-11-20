import { Tab } from ".";

export default {
  title: "Components/Tab",
  component: Tab,
  argTypes: {
    option: {
      options: ["activity", "destination", "culture"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    option: "activity",
    className: {},
    frame: "https://c.animaapp.com/mudMg3Nq/img/frame-11.svg",
  },
};
