import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'navbar-comp',
  styleUrl: 'navbar-comp.scss',
  shadow: true,
})
export class NavbarComp {
  render() {
    return (
      <Host>
        <slot name="start"></slot>
        <div class="center">
          <slot name="logo"></slot>
        </div>
        <slot name="end"></slot>
      </Host>
    );
  }
}
