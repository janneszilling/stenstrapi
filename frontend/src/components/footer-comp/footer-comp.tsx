import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'footer-comp',
  styleUrl: 'footer-comp.scss',
  shadow: true,
})
export class FooterComp {
  render() {
    return (
      <Host>
        <slot name="start"></slot>
        <slot name="center"></slot>
        <div class="copyright">© {new Date().getFullYear()} Stockrain.de | All rights reserved.</div>
      </Host>
    );
  }
}
