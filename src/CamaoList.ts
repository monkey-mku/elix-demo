import ListBox from "elix/src/base/ListBox.js";
import { internal, ListBoxMixin } from "elix";
import { fragmentFrom } from 'elix/src/core/htmlLiterals';


/**
 * ListBox component in the Plain reference design system
 *
 * @inherits ListBox
 */
export class CamaoList extends ListBoxMixin(ListBox) {
  [internal.render](changed: ChangedFlags) {
    super[internal.render](changed);
  }

  get [internal.template]() {
    const result = super[internal.template];
    result.content.append(
      fragmentFrom.html`
        <style>
          :host {
            border-color: #aaa;
          }
          :host([focus-visible]:focus-within) {
            outline: none;
          }
          ::slotted(*),
          #slot > * {
            padding: 0.5em;
          }
          ::slotted(:hover),
          #slot > :hover {
            background-color: var(--ca-hover-color, #eee);
          }
          ::slotted([selected]),
          #slot > [selected] {
            background: var(--ca-selected-color, #ccc);
            color: black;
          }
        </style>
      `)
    return result;
  }
}
customElements.define('camao-list', CamaoList);
