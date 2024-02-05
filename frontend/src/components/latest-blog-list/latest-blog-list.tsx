import { Component, Host, h, getAssetPath } from '@stencil/core';
import { dataSvc } from '../../services/data.service';

@Component({
  tag: 'latest-blog-list',
  styleUrl: 'latest-blog-list.scss',
  shadow: true,
})
export class LatestBlogList {
  data?: any;

  async componentWillLoad() {
    this.data = await dataSvc.getTheLatestPosts();
  }

  render() {
    return (
      <Host>
        <div class="blog-list-wrapper">
          {this.data === null ? (
            <h1>Keine Beiträge vorhanden</h1>
          ) : (
            this.data?.map((post, i) => (
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
