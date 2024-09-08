import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-zinsen-neu',
  styleUrl: 'app-zinsen-neu.scss',
  shadow: true,
})
export class AppZinsenNeu {
  render() {
    return (
      <div class="card">
        <h2>Anlagebetrag</h2>

        <div class="input-group">
          <label htmlfor="anlagebetrag">Anlagesumme</label>
          <input type="text" id="anlagebetrag" value="€ 99.000,00" />
        </div>

        <div class="input-group">
          <label htmlfor="sparrate">Sparrate P. M.</label>
          <input type="text" id="sparrate" value="€ 1.000,00" />
        </div>
      </div>
    );
  }
}