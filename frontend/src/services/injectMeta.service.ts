export class MetaService {
  constructor() {}

  injectMetaTags(title, description, splash, page) {
    const metaIndex = document.createElement('meta');
    metaIndex.setAttribute('name', 'robots');
    metaIndex.setAttribute('content', 'index');
    document.head.appendChild(metaIndex);

    this.createOgTag('og:title', `${title} | Stockrain`);
    this.createOgTag('og:description', description);
    this.createOgTag('og:url', `https://www.stockrain.de${page}`);
    this.createOgTag('og:image', `${splash}`);

    this.createTwitterTag('twitter:card', `summary_large_image`);
    this.createTwitterTag('twitter:title', title);
    this.createTwitterTag('twitter:description', description);
    this.createTwitterTag('twitter:image', `${splash}`);
    this.createTwitterTag('twitter:creator', `@stockraininvest`);
  }

  createOgTag = (type: string, content: string) => {
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

  createTwitterTag = (type: string, content: string) => {
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
}

export const metaSvc = new MetaService();
