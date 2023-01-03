import { Component, Host, h, Prop, Build } from '@stencil/core';
import { fileNotFound } from '../../global/site-structure-utils';
import { dataSvc } from '../../services/data.service';

@Component({
  tag: 'blog-component',
  styleUrl: 'blog-component.scss',
  shadow: true,
})
export class BlogComponent {
  @Prop() page?: string;
  data?;
  content?: string;

  async componentWillLoad() {
    this.data = await dataSvc.getData();
  }

  async componentWillRender() {
    if (this.page) {
      const post = this.data.find(blog => blog.attributes.urlSlug === this.page);
      console.log('post', post);

      if (!Build.isBrowser && !post) {
        fileNotFound();
        return;
      }

      if (post) {
        document.title = post.attributes.title;
        this.content = post.attributes.description;
      }
    }
  }

  render() {
    if (!this.data || !this.content) return <div>Error</div>;
    const post = this.data;
    const content = this.content;

    return (
      <Host>
        <h1>{post.title}</h1>
        <p>{content}</p>
        <slot></slot>
      </Host>
    );
  }
}
