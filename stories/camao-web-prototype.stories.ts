import { html, TemplateResult } from 'lit-html';
import '../src/camao-web-prototype.js';

export default {
  title: 'CamaoWebPrototype',
  component: 'camao-web-prototype',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <camao-web-prototype style="--camao-web-prototype-background-color: ${backgroundColor}" .title=${title}></camao-web-prototype>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
