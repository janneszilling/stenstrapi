import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'icon-button',
  styleUrl: 'icon-button.scss',
  shadow: true,
})
export class IconButton {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
