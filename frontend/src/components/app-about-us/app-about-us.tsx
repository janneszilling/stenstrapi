import { Component, h } from '@stencil/core';
import { metaSvc } from '../../services/injectMeta.service';

@Component({
  tag: 'app-about-us',
  styleUrl: 'app-about-us.scss',
  shadow: true,
})
export class AppAboutUs {
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  async componentDidRender() {
    await metaSvc.injectMetaTags('Über uns', 'Wer steckt hinter Stockrain? Hier erfährst du mehr über uns.', '../../assets/placeholder-a.png', 'about');
    this.scrollToTop();
  }

  render() {
    return (
      <div class="about-wrapper">
        <header-comp theme="dark">
          <p>Wer steckt hinter stockrain</p>
          <h1>Unser Team</h1>
        </header-comp>
        <div class="about-text-wrapper">
          <text-content-comp>
            <h2>Willkommen bei Stockrain - dem Blog für Finanzen und Wirtschaft!</h2>
            <p>
              Wir sind eine leidenschaftliche Gruppe von Finanzexperten, Wirtschaftsinteressierten und Investoren, die es sich zur Aufgabe gemacht haben, komplexe finanzielle
              Konzepte auf eine leicht verständliche und ansprechende Weise zu vermitteln. Bei Stockrain geht es nicht nur darum, Informationen zu teilen, sondern auch darum, eine
              Community aufzubauen, die sich für Finanzen und die Welt der Wirtschaft begeistert.
            </p>
            <p>
              Unser Ziel ist es, Menschen wie dich zu befähigen, fundierte Finanzentscheidungen zu treffen und ein tieferes Verständnis für die globalen wirtschaftlichen
              Zusammenhänge zu entwickeln. Wir glauben daran, dass Wissen die Grundlage für finanzielle Stabilität und Wachstum ist.
            </p>
            <p>
              In unseren Beiträgen erkunden wir eine breite Palette von Themen, von Aktienmarktanalysen und Anlagestrategien bis hin zu makroökonomischen Entwicklungen und Trends.
              Wir nehmen komplexe wirtschaftliche Konzepte und machen sie für jedermann zugänglich, ohne dabei Kompromisse bei der Tiefe und Genauigkeit einzugehen.
            </p>
            <p>
              Bei Stockrain geht es nicht nur um trockene Zahlen und Fakten. Wir lieben es, Geschichten zu erzählen und Fallstudien zu teilen, die den Praxisbezug unserer Inhalte
              unterstreichen. Wir glauben daran, dass jeder, unabhängig von seinem Hintergrund oder seiner Erfahrung, von unserem Blog profitieren kann.
            </p>
            <p>
              Egal, ob du ein Anfänger bist, der seine ersten Schritte in der Welt der Finanzen wagt, oder ein erfahrener Investor, der nach neuen Erkenntnissen sucht - bei
              Stockrain findest du wertvolle Informationen und Einsichten, die dir dabei helfen, deine finanziellen Ziele zu erreichen.
            </p>
            <p>
              Wir laden dich ein, Teil unserer wachsenden Stockrain-Community zu werden. Begleite uns auf dieser faszinierenden Reise durch die Finanzmärkte und die
              Wirtschaftswelt. Gemeinsam werden wir uns weiterentwickeln, lernen und erfolgreich sein.
            </p>
            <p>Stockrain - Der Treffpunkt für Finanzen und Wirtschaft. Wir freuen uns darauf, dich an Bord zu haben!</p>
          </text-content-comp>
        </div>
      </div>
    );
  }
}
