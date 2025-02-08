import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-comp',
  styleUrl: 'page-comp.scss',
  shadow: true,
})
export class PageComp {
  render() {
    return (
      <Host>
        <navbar-comp>
          <div slot="start">
            <navbar-menu-comp>
              <navbar-menu-item-comp>
                <stencil-route-link url="/blog">Beiträge</stencil-route-link>
              </navbar-menu-item-comp>
              <navbar-menu-item-comp>
                <stencil-route-link url="/books">Handbücher</stencil-route-link>
              </navbar-menu-item-comp>
              <navbar-menu-item-comp>
                <stencil-route-link url="/finanzrechner">Finanzrechner</stencil-route-link>
              </navbar-menu-item-comp>
              <navbar-menu-item-comp>
                <stencil-route-link url="/about-us">Unser Team</stencil-route-link>
              </navbar-menu-item-comp>
              <div class="other" slot="group">
                <stencil-route-link url="/imprint">Impressum</stencil-route-link>
                <stencil-route-link url="/imprint">Datenschutz</stencil-route-link>
                <stencil-route-link url="/imprint">Cookies</stencil-route-link>
                <button>@stockraininvest</button>
              </div>
            </navbar-menu-comp>
          </div>

          <div slot="logo">
            <stencil-route-link url="/">
              <img src="../../assets/st-logo-dark.svg" alt="Stockrain" width={50} height={54} />
            </stencil-route-link>
          </div>
          <div slot="end"></div>
        </navbar-comp>
        <header-comp>
          <h1>Page Component</h1>
        </header-comp>
        <main>
          <p>This is a page component.</p>
        </main>
        <footer-comp>
          <div slot="start">
            <button>@stockraininvest</button>
          </div>
          <div slot="center">
            <div id="link-stack-1">
              <stencil-route-link url="/imprint">Beiträge</stencil-route-link>
              <stencil-route-link url="/imprint">Handbuch</stencil-route-link>
              <stencil-route-link url="/imprint">Finanzrechner</stencil-route-link>
              <stencil-route-link url="/imprint">Unser Team</stencil-route-link>
            </div>
            <div id="link-stack-2">
              <stencil-route-link url="/imprint">Impressum</stencil-route-link>
              <stencil-route-link url="/datenschutz">Datenschutz</stencil-route-link>
              <stencil-route-link url="/cookies">Cookies</stencil-route-link>
            </div>
          </div>
        </footer-comp>
      </Host>
    );
  }
}
