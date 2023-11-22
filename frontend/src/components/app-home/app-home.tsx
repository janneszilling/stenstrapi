import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  async componentWillRender() {
    injectMetaTags(
      'Der Wirtschafts Blog',
      'Der Wirtschafts Blog von Stockrain. Hier findest du Artikel zu den Themen Wirtschaft, Finanzen, Politik und mehr.',
      'https://www.stockrain.de/assets/meta-img.png',
      '/home',
    );

    document.title = 'Der Wirtschafts Blog | Stockrain';

    this.scrollToTop();
  }

  render() {
    return (
      <div class="app-home">
        <div class="home-header">
          <p class="subheading">Der Wirtschafts Blog</p>
          <h1>Educate Economy</h1>
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

const injectMetaTags = (title, description, splash, page) => {
  createOgTag('og:title', `${title} | Stockrain`);
  createOgTag('og:description', description);
  createOgTag('og:url', `https://www.stockrain.de${page}`);
  createOgTag('og:image', `${splash}`);
  createTwitterTag('twitter:card', `summary`);
  createTwitterTag('twitter:title', title);
  createTwitterTag('twitter:description', description);
  createTwitterTag('twitter:image', `${splash}`);
  createTwitterTag('twitter:creator', `@stockraininvest`);
};

const createOgTag = (type: string, content: string) => {
  let el = document.head.querySelector(`meta[property="${type}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', type);
    el.setAttribute('content', content);
    document.head.appendChild(el);
  } else {
    el.setAttribute('property', type);
    el.setAttribute('content', content);
  }
};

const createTwitterTag = (type: string, content: string) => {
  let el = document.head.querySelector(`meta[name="${type}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', type);
    el.setAttribute('content', content);
    document.head.appendChild(el);
  } else {
    el.setAttribute('name', type);
    el.setAttribute('content', content);
  }
};
