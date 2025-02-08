import { Component, h, getAssetPath } from '@stencil/core';
import { cookieSvc } from '../../services/cookie.service';
//import { dataSvc } from '../../services/data.service';
@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {
  data?: any;
  private menu?: HTMLDivElement;

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  componentDidRender() {
    this.scrollToTop();
  }

  setCookies() {
    const cookieBanner = document.querySelector('.cookie-banner');
    cookieBanner.classList.add('hide');
    localStorage.setItem('cookieBanner', 'true');
    cookieSvc.setGoogleAnalyticsCookie();
  }

  toggleMenu() {
    if (window.innerWidth < 1200 && this.menu.style.display === 'flex') {
      this.menu.style.display = 'none';
      console.log('window.innerWidth1', window.innerWidth);
    } else {
      this.menu.style.display = 'flex';
      console.log('window.innerWidth2', window.innerWidth);
    }
  }

  render() {
    return (
      <div>
        <header>
          <div class="nav">
            <div class="nav-wrapper">
              <div class="logo">
                <stencil-route-link url="/">
                  <img src={getAssetPath('../../assets/st-logo-dark.svg')} alt="Stockrain" />
                </stencil-route-link>
              </div>
              <div class="menu-btn" onClick={this.toggleMenu.bind(this)}>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="menu" ref={el => (this.menu = el as HTMLDivElement)}>
              <stencil-route-link url="/blog" onClick={this.toggleMenu.bind(this)}>
                Blog
              </stencil-route-link>
              <span class="disabled">
                <stencil-route-link url="/#" onClick={this.toggleMenu.bind(this)}>
                  Handbuch<span class="soon-lable">Soon</span>
                </stencil-route-link>
              </span>
              <span>
                <stencil-route-link url="/finanzrechner" onClick={this.toggleMenu.bind(this)}>
                  Finanzrechner<span class="soon-lable">Soon</span>
                </stencil-route-link>
              </span>
              <stencil-route-link url="/about" onClick={this.toggleMenu.bind(this)}>
                Über uns
              </stencil-route-link>
            </div>
          </div>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/about" component="app-about-us" />
              <stencil-route url="/finanzrechner" component="app-finance-site" />
              <stencil-route url="/impressum" component="app-imprint" />
              <stencil-route url="/datenschutz" component="app-privacy" />
              <stencil-route url="/page-comp" component="page-comp" />
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
                <stencil-route-link url="/datenschutz">Datenschutz</stencil-route-link>
                <stencil-route-link url="/datenschutz#cookies">Cookies</stencil-route-link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
