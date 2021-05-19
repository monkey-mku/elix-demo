import { html, TemplateResult } from 'lit-html';
import '../src/CamaoList.js';

export default {
  title: 'CamaoList',
  component: 'camao-list',
  argTypes: {
    orientation: {
      control: {
        type: "radio",
        options: ["horizontal", "vertical"]
      }
    },
    hoverColor: { control: "color" },
    selectedindexchange: { action: "selectedindexchange" },
    currentindexchange: { action: "currentindexchange" }
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  // argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  items: string[];
  orientation: "horizontal" | "vertical";
  selectedIndex: number;
  hoverColor: string,
  selectedindexchange: (e: any) => void;
  currentindexchange: (e: any) => void;
}

const Template: Story<ArgTypes> = (args: ArgTypes) => html`
  <camao-list orientation="${args.orientation}" @selectedindexchange="${args.selectedindexchange}" @currentindexchange="${args.currentindexchange}">
    ${args.items.map((item) =>
      html`<div>${item}</div>`)}
  </camao-list>
  <style>
    :root {
      --ca-hover-color: ${args.hoverColor};
    }
  </style>
`;

export const Example = Template.bind({});
Example.args = {
  items: ["works 1", "item 2"],
  orientation: "vertical",
  hoverColor: "red",
  selectedindexchange: (e) => {
    console.log(e);
  }
};
