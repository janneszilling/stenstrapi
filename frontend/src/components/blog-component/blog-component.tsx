import { Component, Host, h, Prop } from '@stencil/core';
import { dataSvc } from '../../services/data.service';

@Component({
  tag: 'blog-component',
  styleUrl: 'blog-component.scss',
  shadow: true,
})
export class BlogComponent {
  @Prop() page?: string;
  content?: string;
  postContent?: any;

  async componentWillRender() {
    if (this.page) {
      this.postContent = await dataSvc.getIndividualPost(this.page.replace('/', ''));
      console.log('post', this.postContent);
    }
  }

  render() {
    // if (!this.data || !this.content) return;
    // const post = this.data;
    // const content = this.content;

    return (
      <Host>
        <h1>It works! Look into the console</h1>
        <p>{this.postContent.title}</p>
        <p>{this.postContent.description}</p>
        <slot></slot>
      </Host>
    );
  }
}
