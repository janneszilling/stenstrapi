import { Component, Host, h, Prop, State, Watch, Element } from '@stencil/core';
import { dataSvc } from '../../services/data.service';
//import { metaSvc } from '../../services/injectMeta.service';

@Component({
  tag: 'blog-component',
  styleUrl: 'blog-component.scss',
})
export class BlogComponent {
  @Element() el: HTMLElement;

  @Prop() page?: string;
  @State() htmlString: string = '';
  @State() tableOfContents: Element[] = [];
  @State() articleHead: any;
  @State() htmlElements: any;

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  async componentWillRender() {
    if (this.page) {
      const queryResult = await dataSvc.getIndividualPost(this.page.replace('/', ''));
      this.articleHead = await queryResult;
      const htmlString = await queryResult.content;
      this.htmlString = htmlString;

      // const metaData = this.articleHead;
      // injectMetaTags(metaData.title, metaData.description, metaData.splash.data !== null ? metaData.splash.data.attributes.url : '', this.page);
      // document.title = `${metaData.title} | Stockrain`;
      // document.querySelector('meta[name="description"]').setAttribute('content', `${this.articleHead.description}}`);
    }
  }

  componentDidRender() {
    this.scrollToTop();
  }

  componentDidLoad() {
    const twitterCard = document.createElement('meta');
    twitterCard.name = 'twitter:card';
    twitterCard.content = 'summary';

    const titleTag = document.createElement('meta');
    titleTag.name = 'twitter:title';
    titleTag.content = this.articleHead.title;

    const descriptionTag = document.createElement('meta');
    descriptionTag.name = 'twitter:description';
    descriptionTag.content = 'This is a dynamic meta tags example with Stencil.js';

    document.head.appendChild(titleTag);
    document.head.appendChild(descriptionTag);
    document.head.appendChild(twitterCard);
  }

  @Watch('htmlString')
  generateTableOfContents(htmlString: string) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;

    const h2Elements = tempElement.querySelectorAll('h2');

    this.tableOfContents = Array.from(h2Elements).map((h2Element, i) => {
      const id = `${h2Element.innerText.replace(/\s+/g, '-').toLowerCase()}`;
      h2Element.id = id;
      return (
        <li>
          <a href={`#${id}`}>{`${i + 1}. ${h2Element.innerText}`}</a>
        </li>
      );
    });
  }

  @Watch('htmlString')
  addIdsToH2Elements(htmlString: string) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;

    const h2Elements = tempElement.querySelectorAll('h2');
    h2Elements.forEach(h2 => {
      const id = `${h2.innerText.replace(/\s+/g, '-').toLowerCase()}`;
      h2.setAttribute('id', id);
    });

    this.htmlElements = tempElement.innerHTML;
  }

  render() {
    return (
      <Host>
        {this.articleHead === null ? (
          <h1>Beitrag nicht vorhanden</h1>
        ) : (
          <div class="post-wrapper">
            {/* <div class="contents-wrapper">
            <div class="contents">
              <h3>Inhaltsverzeichnis</h3>
              {this.tableOfContents}
            </div>
          </div> */}
            <div class="post-content">
              <div class="splash-img">
                <img src={this.articleHead.splash.data !== null ? this.articleHead.splash.data.attributes.url : '../../assets/placeholder-a.png'} />
              </div>
              <h1>{this.articleHead.title}</h1>
              <h3>{this.articleHead.description}</h3>
              <div class="article" innerHTML={this.htmlElements}></div>
            </div>
          </div>
        )}
      </Host>
    );
  }
}

// const injectMetaTags = (title, description, splash, page) => {
//   createOgTag('og:title', `${title} | Stockrain`);
//   createOgTag('og:description', description);
//   createOgTag('og:url', `https://www.stockrain.de${page}`);
//   createOgTag('og:image', `${splash}`);
//   createTwitterTag('twitter:card', `summary`);
//   createTwitterTag('twitter:title', title);
//   createTwitterTag('twitter:description', description);
//   createTwitterTag('twitter:image', `${splash}`);
//   createTwitterTag('twitter:creator', `@stockraininvest`);
// };

// const createOgTag = (type: string, content: string) => {
//   let el = document.head.querySelector(`meta[property="${type}"]`);
//   if (!el) {
//     el = document.createElement('meta');
//     el.setAttribute('property', type);
//     el.setAttribute('content', content);
//     document.head.appendChild(el);
//   } else {
//     el.setAttribute('property', type);
//     el.setAttribute('content', content);
//   }
// };

// const createTwitterTag = (type: string, content: string) => {
//   let el = document.head.querySelector(`meta[name="${type}"]`);
//   if (!el) {
//     el = document.createElement('meta');
//     el.setAttribute('name', type);
//     el.setAttribute('content', content);
//     document.head.appendChild(el);
//   } else {
//     el.setAttribute('name', type);
//     el.setAttribute('content', content);
//   }
// };
