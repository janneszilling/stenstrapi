import { Component, Host, h, Prop, State, Watch, Element } from '@stencil/core';
import { dataSvc } from '../../services/data.service';
import { metaSvc } from '../../services/injectMeta.service';

@Component({
  tag: 'blog-component',
  styleUrl: 'blog-component.scss',
  shadow: true,
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

  async componentWillLoad() {
    if (this.page) {
      const queryResult = await dataSvc.getIndividualPost(this.page.replace('/', ''));
      this.articleHead = await queryResult;
      const htmlString = await queryResult.content;
      this.htmlString = htmlString;

      const metaData = this.articleHead;
      metaSvc.injectMetaTags(metaData.title, metaData.description, metaData.splash.data !== null ? metaData.splash.data.attributes.url : '', this.page);
      document.title = `${metaData.title} | Stockrain`;
    }
  }

  componentDidRender() {
    this.scrollToTop();
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
