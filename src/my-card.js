import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "In Loving Memory";
    this.body = "Kenny South Park";
    this.img = "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/KennyMcCormick.png/250px-KennyMcCormick.png";
    this.link = "https://hax.psu.edu/";
    this.bgColor = "lightblue";
  }

  static get properties() {
    return {
      title: { type: String },
      body: { type: String },
      img: { type: String },
      link: { type: String },
      bgColor: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .card {
        background-color: var(--card-bg, lightblue);
        width: 90%;
        max-width: 500px;
        height: auto;
        border-radius: 5%;
        padding: 1rem;
        box-sizing: border-box;
        margin: 16px auto;
      }

      .card.fancy {
        background-color: orange;
      }

      .heading {
        padding: 16px;
        margin: 16px;
        font-size: 70px;
        text-align: center;
      }

      .image-box {
        width: 80%;
        max-width: 300px;
        border: 2px solid black;
        margin: 16px auto;
      }

      .image-box img {
        width: 100%;
        height: auto;
      }

      .body {
        font-size: 50px;
        text-align: center;
      }

      .btn {
        display: block;
        margin: 16px auto;
        background-color: black;
        color: white;
        font-size: 20px;
        border-radius: 10%;
        padding: 16px;
        cursor: pointer;
      }

      .btn:focus,
      .btn:hover {
        background-color: gray;
      }
    `;
  }

  render() {
    return html`
      <div class="card" style="background-color:${this.bgColor}">
        <div class="heading">${this.title}</div>
        <div class="image-box">
          <img src="${this.img}" alt="Card image">
        </div>
        <div class="body">${this.body}</div>
        <a href="${this.link}" target="_blank">
          <button class="btn">Details</button>
        </a>
      </div>
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
