import { Component, Host, h, Prop } from '@stencil/core';
import { cookieSvc } from '../../services/cookie.service';

@Component({
  tag: 'c-banner',
  styleUrl: 'cookie-banner.scss',
  shadow: true,
})
export class CookieBanner {
  @Prop({ reflect: true, mutable: true }) hidden: boolean = false;

  componentWillLoad() {
    if (localStorage.getItem('cookieBanner') === 'true') {
      cookieSvc.setGoogleAnalyticsCookie();
      this.hidden = true;
    }
  }

  setCookies() {
    localStorage.setItem('cookieBanner', 'true');
    cookieSvc.setGoogleAnalyticsCookie();
    this.hidden = true;
  }

  render() {
    return (
      <Host hidden={this.hidden}>
        <div class="c-banner">
          <div class="c-banner-wrapper">
            <p>
              Wir verwenden Cookies und Tools für das beste Nutzererlebnis. Ihre Zustimmung sichert eine uneingeschränkte Nutzung der Seite. Ohne explizierte Zustimmung werden
              keine Cookies/Tools verwendet. Infos in der Datenschutzerklärung.
            </p>
            <div class="horizontal">
              <button
                class="primary-btn"
                onClick={() => {
                  this.setCookies();
                }}
              >
                Akzeptieren
              </button>
              <stencil-route-link url="/datenschutz">
                <button class="tertiary-btn">Mehr erfahren</button>
              </stencil-route-link>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
