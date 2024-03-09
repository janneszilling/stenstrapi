import { Component, Host, h, getAssetPath } from '@stencil/core';
import { dataSvc } from '../../services/data.service';

@Component({
  tag: 'blog-list',
  styleUrl: 'blog-list.scss',
  shadow: true,
})
export class BlogList {
  data?: any;

  async componentWillLoad() {
    this.data = await dataSvc.getAllPosts();
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  componentDidRender() {
    this.scrollToTop();
  }

  render() {
    return (
      <Host>
        <div class="blog-header">
          <p class="subheading">Spannende</p>
          <h1>Artikel</h1>
        </div>
        <div class="blog-list-wrapper">
          {this.data === null ? (
            <h1>Keine Beiträge vorhanden</h1>
          ) : (
            this.data.map((post, i) => (
              <stencil-route-link url={post.attributes.urlSlug}>
                <div class="post-preview" key={i}>
                  <div class="splash-img">
                    <img src={post.attributes.splash.data !== null ? post.attributes.splash.data.attributes.url : getAssetPath('../../assets/placeholder-a.png')} />
                  </div>
                  <div class="content-wrapper">
                    <div class="categories">
                      {post.attributes.tags.data.map((tag, i) => (
                        <span key={i} id="category">
                          {tag.attributes.title}
                        </span>
                      ))}
                    </div>
                    <h3>{post.attributes.title}</h3>

                    <p>{post.attributes.description}</p>
                    <div class="facts-wrapper">
                      <div class="article-facts">
                        <span id="date">{String(post.attributes.date).split('-').reverse().join('.')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </stencil-route-link>
            ))
          )}
        </div>
      </Host>
    );
  }
}
