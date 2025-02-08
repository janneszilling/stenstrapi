import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'header-comp',
  styleUrl: 'header-comp.scss',
  shadow: true,
})
export class HeaderComp {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
