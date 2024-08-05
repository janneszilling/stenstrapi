import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-finance-site',
  styleUrl: 'app-finance-site.scss',
  shadow: true,
})
export class AppFinanceSite {
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  componentDidRender() {
    this.scrollToTop();
  }

  render() {
    return (
      <Host>
        <div class="finance-header">
          <p class="subheading">Entdecke unsere</p>
          <h1>Finanzrechner</h1>
        </div>
        <div class="grid-wrapper">
          <stencil-route-link url="/finanzrechner/zinsen">
            <div class="grid-item" id="zinsen">
              <p class="subheading">Berechne deine</p>
              <h1>Zinsen</h1>
            </div>
          </stencil-route-link>
          <stencil-route-link url="/finanzrechner/kredite">
            <div class="grid-item" id="kredite">
              <p class="subheading">Berechne deine</p>
              <h1>Kredite</h1>
            </div>
          </stencil-route-link>
          <stencil-route-link url="/finanzrechner/Anlagen">
            <div class="grid-item" id="anlagen">
              <p class="subheading">Berechne deine</p>
              <h1>Anlagen</h1>
            </div>
          </stencil-route-link>
        </div>
      </Host>
    );
  }
}
