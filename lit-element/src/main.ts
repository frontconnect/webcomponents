import { customElement, LitElement, property, html } from 'lit-element';

@customElement('fc-main')
export class Main extends LitElement {
  @property() name = 'Yaprak';

  render(): void {
    return html`
      <p>Main component of ${this.name}</p>
   `;
  }

}
