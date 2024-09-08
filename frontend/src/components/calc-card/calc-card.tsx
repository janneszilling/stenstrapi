import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'calc-card',
  styleUrl: 'calc-card.scss',
  shadow: true,
})
export class CalcCard {
  render() {
    return (
      <Host>
        <div class="card-header">
          <slot name="header"></slot>
        </div>
        <div class="card-body">
          <slot name="body"></slot>
        </div>
      </Host>
    );
  }
}
