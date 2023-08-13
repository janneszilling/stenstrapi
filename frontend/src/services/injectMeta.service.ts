export class MetaService {
  constructor() {}

  async injectMetaTags(title, description, splash, page) {
    const metaIndex = document.createElement('meta');
    metaIndex.setAttribute('name', 'robots');
    metaIndex.setAttribute('content', 'index');
    document.head.appendChild(metaIndex);

    const metaTitle = document.createElement('meta');
    metaTitle.setAttribute('property', 'og:title');
    metaTitle.setAttribute('content', title);
    document.title = `${title} | stockrain`;
    document.head.appendChild(metaTitle);

    const metaDescription = document.createElement('meta');
    const siteDescription = document.createElement('meta');
    metaDescription.setAttribute('property', 'og:description');
    metaDescription.setAttribute('content', description);
    document.head.appendChild(metaDescription);
    siteDescription.setAttribute('name', 'Description');
    siteDescription.setAttribute('content', description);
    document.head.appendChild(siteDescription);

    const metaUrl = document.createElement('meta');
    metaUrl.setAttribute('property', 'og:url');
    metaUrl.setAttribute('content', `https://www.stockrain.de${page}`);
    document.head.appendChild(metaUrl);

    const metaImage = document.createElement('meta');
    metaImage.setAttribute('property', 'og:image');
    metaImage.setAttribute('content', `${splash}`);
    document.head.appendChild(metaImage);

    const metaImageAlt = document.createElement('meta');
    metaImageAlt.setAttribute('property', 'og:image:alt');
    metaImageAlt.setAttribute('content', title);
    document.head.appendChild(metaImageAlt);

    const metaType = document.createElement('meta');
    metaType.setAttribute('property', 'og:type');
    metaType.setAttribute('content', 'article');
    document.head.appendChild(metaType);

    const metaLocale = document.createElement('meta');
    metaLocale.setAttribute('property', 'og:locale');
    metaLocale.setAttribute('content', 'de_DE');
    document.head.appendChild(metaLocale);

    const metaSiteName = document.createElement('meta');
    metaSiteName.setAttribute('property', 'og:site_name');
    metaSiteName.setAttribute('content', `${title} | stockrain`);
    document.head.appendChild(metaSiteName);
  }
}

export const metaSvc = new MetaService();