import { LitElement, html, css } from "lit-element";
import Cookies from "js-cookie";

export class BaseTableRow extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }

      .grid__row {
        display: grid;
        grid-auto-flow: row;
        grid-template-columns: 1fr;
        border-bottom: 1px solid var(--bg-color);
        overflow: hidden;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
        height: 40px
      }
      .grid__row__info {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 1fr;
        height: 40px;
      }
      .grid__row__form {
        display: grid;
        justify-items: end;
        grid-auto-flow: column;
        grid-template-columns: 1fr;
        height: 40px;
      }
      .grid__row:hover {
        color: var(--hover-color);
        border-bottom: 1px solid var(--hover-color);
      }
      .grid__cell {
        padding: 10px;
        align-self: center;
      }
      [open] {
        height: 80px;
      }
    `;
  }

  constructor() {
    super();
    this.open = false;
  }

  static get properties() {
    return {
      open: {
        type: Boolean,
      },
    };
  }

}

customElements.define("base-table-row", BaseTableRow);