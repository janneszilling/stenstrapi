import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'app-zinsen',
  styleUrl: 'app-zinsen.scss',
  shadow: true,
})
export class AppZinsen {
  @State() isOpenCard1: boolean = true;
  @State() isOpenCard2: boolean = false;
  @State() isOpenCard3: boolean = false;
  @State() isOpenCard4: boolean = false;

  toggleCard(cardNumber: number) {
    this[`isOpenCard${cardNumber}`] = !this[`isOpenCard${cardNumber}`];
  }

  render() {
    return (
      <Host>
        <div class="finance-header">
          <p class="subheading">Entdecke unsere</p>
          <h1>Finanzrechner</h1>
        </div>
        <div class="zinsen-wrapper">
          <div class="zinsen-rechner">
            <div class="card-wallet">
              {/* Anlagebetrag */}
              <div class={`card ${this.isOpenCard1 ? 'active' : ''}`} onClick={() => this.toggleCard(1)}>
                <h2>Anlagebetrag</h2>
                {this.isOpenCard1 && (
                  <div>
                    <div class="input-group">
                      <label>Anlagesumme</label>
                      <div class="input-wrapper">
                        <span class="euro-symbol">€</span>
                        <input type="text" placeholder="99.000,00" disabled />
                      </div>
                    </div>
                    <div class="input-group">
                      <label>Sparrate P. M.</label>
                      <div class="input-wrapper">
                        <span class="euro-symbol">€</span>
                        <input type="text" placeholder="1.000,00" disabled />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Anlagedauer */}
              <div class={`card ${this.isOpenCard2 ? 'active' : ''}`} onClick={() => this.toggleCard(2)}>
                <h2>Anlagedauer</h2>
                {this.isOpenCard2 && (
                  <div>
                    <div class="input-group">
                      <label>Jahre</label>
                      <div class="input-wrapper">
                        <input type="text" placeholder="10" disabled />
                      </div>
                    </div>
                    <div class="input-group">
                      <label>Monate</label>
                      <div class="input-wrapper">
                        <input type="text" placeholder="3" disabled />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Zinssatz & Zinsperiode */}
              <div class={`card ${this.isOpenCard3 ? 'active' : ''}`} onClick={() => this.toggleCard(3)}>
                <h2>Zinsen</h2>
                {this.isOpenCard3 && (
                  <div>
                    <div class="input-group">
                      <label>Zinssatz p.a.</label>
                      <div class="input-wrapper">
                        <span class="euro-symbol">%</span>
                        <input type="text" placeholder="7" disabled />
                      </div>
                    </div>
                    <div class="input-group">
                      <label>Intervall der Zahlungen</label>
                      <div class="input-wrapper">
                        <input type="text" placeholder="Jährlich" disabled />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Übersicht */}
              <div class={`card ${this.isOpenCard4 ? 'active' : ''}`} onClick={() => this.toggleCard(4)}>
                <h2>Ergebnis</h2>
                {this.isOpenCard4 && <input type="text" placeholder="..." disabled />}
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}