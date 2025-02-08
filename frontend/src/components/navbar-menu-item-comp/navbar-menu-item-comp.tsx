import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'navbar-menu-item-comp',
  styleUrl: 'navbar-menu-item-comp.scss',
  shadow: true,
})
export class NavbarMenuItemComp {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
