import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'header-comp',
  styleUrl: 'header-comp.scss',
  shadow: true,
})
export class HeaderComp {
  @Prop({ reflect: true }) readonly theme?: string = 'dark';

  render() {
    return (
      <Host class={{ [`${this.theme}`]: true }}>
        <slot></slot>
      </Host>
    );
  }
}
