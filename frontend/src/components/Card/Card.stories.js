import { Card } from ".";

export default {
    title: "Components/Card",
    component: Card,
    argTypes: {
        state: {
            options: ["active", "default"],
            control: { type: "select"},
        },
    },
};

export const Default = {
    args: {
        state: "active",
    },
};