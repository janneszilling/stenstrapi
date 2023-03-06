import { Component, h } from '@stencil/core';
// import { dataSvc } from '../../services/data.service';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  data?: any;
  //post?: any;

  // async componentWillLoad() {
  //   this.data = await dataSvc.getAllPosts();
  //   console.log('list', this.data);
  // }

  render() {
    return (
      <div>
        <header>
          <stencil-route-link url="/">
            <h1>StenStrapi</h1>
          </stencil-route-link>
          <stencil-route-link url="/blog">Blog</stencil-route-link>
        </header>
        {/* {this.data.map((post, i) => (
          <stencil-route-link url={post.attributes.urlSlug} class="post-title">
            <div key={i}>
              <h3>{post.attributes.title}</h3>

              <p>{post.attributes.description}</p>
              <p>{post.attributes.urlSlug}</p>
            </div>
          </stencil-route-link>
        ))} */}

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/blog" component="blog-list" />
              <stencil-route url="/:pageName" routeRender={({ match }) => <blog-component page={match!.url}></blog-component>} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
