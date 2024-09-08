import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'calc-card-input',
  styleUrl: 'calc-card-input.scss',
  shadow: true,
})
export class CalcCardInput {
  @Prop({ reflect: true }) readonly label: string;

  render() {
    return (
      <Host>
        <slot></slot>
        <div class="input-group">
          <label>{this.label}</label>
          <div class="input-wrapper">
            <input type="text" class="waehrung" value="€" />
            <input type="text" id="sparrate" value="1.000,00" />
          </div>
        </div>
      </Host>
    );
  }
}
