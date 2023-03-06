import { Component, Host, h } from '@stencil/core';
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
    console.log('list', this.data);
  }

  render() {
    return (
      <Host>
        {this.data.map((post, i) => (
          <stencil-route-link url={post.attributes.urlSlug} class="post-title">
            <div key={i}>
              <h3>{post.attributes.title}</h3>

              <p>{post.attributes.description}</p>
              <p>{post.attributes.urlSlug}</p>
            </div>
          </stencil-route-link>
        ))}
      </Host>
    );
  }
}
