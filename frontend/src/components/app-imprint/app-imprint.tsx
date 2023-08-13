import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-imprint',
  styleUrl: 'app-imprint.scss',
  shadow: true,
})
export class AppImprint {
  render() {
    return (
      <div class="privacy-wrapper">
        <div class="privacy-content">
          <div class="splash-img">
            <img src={'../../assets/imprint-hero.png'} />
          </div>
          <h1>Impressum</h1>

          <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
          <p>
            Niklas Demuth
            <br />
            Stockrain
            <br />
            Seigerh&uuml;ttenweg 93
            <br />
            38855 Wernigerode
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49-151 26870554
            <br />
            E-Mail: info@stockrain.de
          </p>

          <h2>Redaktionell verantwortlich</h2>
          <p>Niklas Demuth</p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

          <p>
            Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a>
          </p>
        </div>
      </div>
    );
  }
}
