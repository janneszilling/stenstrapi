import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'text-content-comp',
  styleUrl: 'text-content-comp.scss',
  shadow: true,
})
export class TextContentComp {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
