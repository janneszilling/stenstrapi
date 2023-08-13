import { Component, h, getAssetPath } from '@stencil/core';
import { cookieSvc } from '../../services/cookie.service';
// import { dataSvc } from '../../services/data.service';
@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {
  data?: any;
  private nav?: HTMLDivElement;
  private menu?: HTMLDivElement;
  private links?: HTMLDivElement;

  setCookies() {
    const cookieBanner = document.querySelector('.cookie-banner');
    cookieBanner.classList.add('hide');
    localStorage.setItem('cookieBanner', 'true');
    cookieSvc.setGoogleAnalyticsCookie();
  }

  showMenu() {
    if (this.menu.style.height === 'auto') {
      this.nav.style.alignItems = 'center';
      this.menu.style.height = '80px';
      this.links.style.display = 'none';
      return;
    } else {
      this.nav.style.alignItems = 'flex-start';
      this.menu.style.height = 'auto';
      this.links.style.display = 'flex';
      return;
    }
  }

  render() {
    return (
      <div>
        <header>
          <div class="nav" ref={el => (this.nav = el as HTMLDivElement)}>
            <stencil-route-link url="/">
              <img src={getAssetPath('../../assets/st-logo-dark.svg')} alt="Stockrain" />
            </stencil-route-link>

            <div class="menu" ref={el => (this.menu = el as HTMLDivElement)}>
              <div class="menu-btn" onClick={this.showMenu.bind(this)}>
                <span></span>
                <span></span>
              </div>
              <div class="links" ref={el => (this.links = el as HTMLDivElement)}>
                <stencil-route-link url="/blog">Blog</stencil-route-link>
                <span class="disabled">
                  <stencil-route-link url="/#">
                    Handbuch<span class="soon-lable">Soon</span>
                  </stencil-route-link>
                </span>
                <span class="disabled">
                  <stencil-route-link url="/#">
                    Finanzrechner<span class="soon-lable">Soon</span>
                  </stencil-route-link>
                </span>
                <stencil-route-link url="/about">Über uns</stencil-route-link>
              </div>
            </div>
          </div>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/about" component="app-about-us" />
              <stencil-route url="/impressum" component="app-imprint" />
              <stencil-route url="/datenschutz" component="app-privacy" />
              <stencil-route url="/blog" component="blog-list" />
              <stencil-route url="/:pageName" routeRender={({ match }) => <blog-component page={match!.url}></blog-component>} />
            </stencil-route-switch>
          </stencil-router>
        </main>
        <c-banner></c-banner>

        <footer>
          <div class="footer-wrapper">
            <div class="footer-content">
              <div>
                <img src={getAssetPath('../../assets/stockrain-logo-long.svg')} alt="Stockrain" />
                <span class="copyright">© {new Date().getFullYear()} Stockrain.de | All rights reserved.</span>
                <p>@stockraininvest</p>
                <a href="mailto:info@stockrain.de">info@stockrain.de</a>
              </div>

              <div>
                <span class="small">LINKS</span>
                <stencil-route-link url="/blog">Blog</stencil-route-link>
                <span class="disabled">
                  <stencil-route-link url="/#">
                    Handbuch<span class="soon-lable">Soon</span>
                  </stencil-route-link>
                </span>
                <span class="disabled">
                  <stencil-route-link url="/#">
                    Finanzrechner<span class="soon-lable">Soon</span>
                  </stencil-route-link>
                </span>
                <stencil-route-link url="/about">Über uns</stencil-route-link>
              </div>
              <div>
                <span class="small">LEGAL</span>
                <stencil-route-link url="/impressum">Impressum</stencil-route-link>
                <stencil-route-link url="/datenschutz">Datzenschutz</stencil-route-link>
                <stencil-route-link url="/datenschutz#cookies">Cookies</stencil-route-link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
