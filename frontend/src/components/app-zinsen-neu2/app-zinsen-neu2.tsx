import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-zinsen-neu2',
  styleUrl: 'app-zinsen-neu2.scss',
  shadow: true,
})
export class AppZinsenNeu2 {
  render() {
    return (
      <Host>
        <calc-card>
          <div slot="header">
            <h2>Laufzeit</h2>
            <icon-button></icon-button>
          </div>
          <div slot="body">
            <div class="input-group">
              <label htmlfor="laufzeit">Jahre</label>
              <input type="text" id="laufzeit" value="10" />
            </div>
          </div>
        </calc-card>
        <calc-card>
          <div slot="header">
            <h2>Zinsen</h2>
            <icon-button></icon-button>
          </div>
          <div slot="body">
            <div class="input-group">
              <label htmlfor="sparrate">Sparrate p. M.</label>
              <div class="input-wrapper">
                <input type="text" class="waehrung" value="€" />
                <input type="text" id="sparrate" value="1.000,00" />
              </div>
            </div>
            <calc-card-input label="Hallo"></calc-card-input>
          </div>
        </calc-card>
      </Host>
    );
  }
}
