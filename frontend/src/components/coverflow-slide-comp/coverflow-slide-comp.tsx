import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'coverflow-slide-comp',
  styleUrl: 'coverflow-slide-comp.scss',
  shadow: true,
})
export class CoverflowSlideComp {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
