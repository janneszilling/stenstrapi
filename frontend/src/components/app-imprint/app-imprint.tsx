import { Component, h } from '@stencil/core';
import { metaSvc } from '../../services/injectMeta.service';

@Component({
  tag: 'app-imprint',
  styleUrl: 'app-imprint.scss',
  shadow: true,
})
export class AppImprint {
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  async componentDidRender() {
    await metaSvc.injectMetaTags('Impressum', 'Impressum von Stockrain. Hier findest du alle rechtlichen Informationen zu Stockrain.', '../../assets/placeholder-b.png', 'imprint');
    this.scrollToTop();
  }

  render() {
    return (
      <div class="app-imprint">
        <header-comp>
          <h1>Impressum</h1>
        </header-comp>
        <div class="privacy-wrapper">
          <div class="privacy-content">
            <text-content-comp>
              <h2>Angaben</h2>
              <p class="legal">
                <b>Name:</b> Stockrain
                <br />
                <b>Rechtlicher Name:</b> Niklas Demuth
                <br />
                <b>Red. verantwortlich:</b> Niklas Demuth
                <br />
                <b>Adresse:</b> Seigerh&uuml;ttenweg 93, 38855 Wernigerode, Deutschland
                <br />
                <b>E-Mail:</b> info@stockrain.de
              </p>

              <h3>EU-Streitschlichtung</h3>
              <p>
                Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a>
                .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>

              <h3>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h3>
              <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </text-content-comp>
          </div>
        </div>
      </div>
    );
  }
}
