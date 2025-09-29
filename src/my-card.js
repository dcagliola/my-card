import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  static get properties() {
    return {
      img: { type: String },
      link: { type: String },
      bgColor: { type: String },
      fancy: { type: Boolean, reflect: true },
      title: {type: String },
      buttonTitle: { type: String, attribute: 'button_title' }
    };
  }

  constructor() {
    super();
    this.img = "#";
    this.title = "Default Title";
    this.link = "https://hax.psu.edu/";
    this.bgColor = "lightgray";
    this.fancy = false;
    this.buttonTitle = "Details";
    this.defaultBody = "Default body text";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .card {
        background-color: var(--bg-color, lightgray);
        width: 250px;
        border-radius: 8px;
        padding: 1rem;
        box-sizing: border-box;
        margin: 8px;
      }

      :host([fancy]) .card {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }

      .heading {
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 0.5rem;
      }

      .image-box {
        width: 200px;
        height: 200px;
        border: 2px solid black;
        margin: 0 auto 1rem auto;
        overflow: hidden;
      }

      .image-box img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
      }

      .body {
        font-size: 1rem;
        text-align: center;
        margin-bottom: 1rem;
      }

      .btn {
        display: block;
        margin: 0 auto;
        background-color: black;
        color: white;
        font-size: 1rem;
        border-radius: 6px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
      }

      .btn:focus,
      .btn:hover {
        background-color: gray;
      }

      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }
  
      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }
    `;
  }
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }
  render() {
    return html`
      <div class="card" style="--bg-color:${this.bgColor}">
        <div class="heading">
          <slot name="title">${this.title}</slot>
        </div>
        <div class="image-box">
          <img src="${this.img}" alt="Card image">
        </div>
        <div>
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <p><slot name="body">"${this.defaultBody}"</slot></p>
            <a href="${this.link}" target="_blank" class="btn">
            <slot name="button">${this.buttonTitle}</slot></a>
          </details>
        </div>
      </div>`;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
