import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";

import Loader from "../Loader";
import loaderNotes from "../notes/Loader.md";

/**
 * Defines a default loader of a reasonable size.
 */
export const loader = {
  size: 1
};

storiesOf("Simple/Loader", module)
  .addDecorator(withKnobs)
  .add("Default", () => <Loader size={number("size", loader.size)} />, {
    notes: { markdown: loaderNotes }
  });
