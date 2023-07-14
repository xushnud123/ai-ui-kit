// icon.stories.tsx

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Icon from "./icon";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {},
} as ComponentMeta<typeof Icon>;

export const Story: ComponentStory<typeof Icon> = (props) => <Icon {...props} />;

Story.args = {
  children: <h1>Hello Icon</h1>,
};

Story.story = {
  name: "Icon",
};
