class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.whoAmI = 'Lady Gaga';
    console.log('constructor');
  }

  // called when the element is connected to the page
  connectedCallback() {
    console.log('connected callback');
    const template = document.querySelector('template');
    const clone = document.importNode(template.content, true);
    this.appendChild(clone);

    console.log(this.querySelector('h1'));
  }

}

customElements.define('my-component', MyComponent);
