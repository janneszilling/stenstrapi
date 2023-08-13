import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <div class="home-header">
          <p class="subheading">Der Wirtschafts Blog</p>
          <h1>Let’s do investing</h1>
          <div class="horizontal">
            <stencil-route-link url="/blog">
              <button class="primary-btn">Zum Blog</button>
            </stencil-route-link>
            {/* <stencil-route-link url="#newsletter">
              <button class="secondary-btn">Newsletter</button>
            </stencil-route-link> */}
          </div>
        </div>
        <div class="lastest-posts">
          <latest-blog-list></latest-blog-list>
        </div>
        {/* <div class="newsletter-section" id="newsletter">
          <div class="newsletter-wrapper">
            <h2>
              Abonniere den
              <br /> Newsletter.
            </h2>
            <div class="submit-wrapper">
              <div>
                <label htmlFor="email" id="newsletter-label">
                  Deine E-Mail
                </label>
                <input id="newsletter-mail" type="email" name="email" placeholder="jane.doe@email.com" />
              </div>
              <button class="tertiary-btn">Abonnieren</button>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
