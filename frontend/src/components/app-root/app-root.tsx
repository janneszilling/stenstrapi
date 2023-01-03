import { Component, h } from '@stencil/core';
import { dataSvc } from '../../services/data.service';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  data?: any;

  async componentWillLoad() {
    this.data = await dataSvc.getData();
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>
        {this.data.map((post, i) => (
          <div key={i}>
            <stencil-route-link url={post.attributes.urlSlug} class="post-title">
              <h3>{post.attributes.title}</h3>
            </stencil-route-link>
            <p>{post.attributes.description}</p>
            <p>{post.attributes.urlSlug}</p>
          </div>
        ))}
        <div class="brown" style={{ width: '100px', height: '100px' }}></div>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/blog/:pageName" routeRender={({ match }) => <blog-component page={match!.url}></blog-component>} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
