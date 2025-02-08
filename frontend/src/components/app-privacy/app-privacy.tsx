import { Component, h } from '@stencil/core';
import { metaSvc } from '../../services/injectMeta.service';

@Component({
  tag: 'app-privacy',
  styleUrl: 'app-privacy.scss',
  shadow: true,
})
export class AppPrivacy {
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  async componentDidRender() {
    await metaSvc.injectMetaTags(
      'Datenschutzerklärung',
      'Datenschutzerklärung von Stockrain. Hier findest du alle rechtlichen Informationen zu Stockrain.',
      '../../assets/placeholder-b.png',
      'datenschutz',
    );

    this.scrollToTop();
  }

  render() {
    return (
      <div class="app-privacy">
        <header-comp>
          <h1>Datenschutzerklärung</h1>
        </header-comp>
        <div class="privacy-wrapper">
          <text-content-comp>
            <h2 class="small">Ausführliche Informationen zum Datenschutz</h2>

            <h3>1) Einleitung und Kontaktdaten des Verantwortlichen</h3>

            <p>
              <b>1.1</b>&nbsp;Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns f&uuml;r Ihr Interesse. Im Folgenden informieren wir Sie &uuml;ber den Umgang mit
              Ihren personenbezogenen Daten bei der Nutzung unserer Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden
              k&ouml;nnen.
            </p>

            <p>
              <b>1.2</b>&nbsp;Verantwortlicher f&uuml;r die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist Niklas Demuth, Seigerhüttenweg
              93, 38855 Wernigerode, Deutschland, E-Mail: info@stockrain.de. Der f&uuml;r die Verarbeitung von personenbezogenen Daten Verantwortliche ist diejenige nat&uuml;rliche
              oder juristische Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>

            <h3>2) Datenerfassung beim Besuch unserer Website</h3>

            <p>
              <b>2.1</b>&nbsp;Bei der blo&szlig; informatorischen Nutzung unserer Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen
              &uuml;bermitteln, erheben wir nur solche Daten, die Ihr Browser an den Seitenserver &uuml;bermittelt (sog. &bdquo;Server-Logfiles&#8220;). Wenn Sie unsere Website
              aufrufen, erheben wir die folgenden Daten, die f&uuml;r uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:
            </p>

            <ul>
              <li>Unsere besuchte Website</li>
              <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
              <li>Menge der gesendeten Daten in Byte</li>
              <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
              <li>Verwendeter Browser</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
            </ul>

            <p>
              Die Verarbeitung erfolgt gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilit&auml;t und
              Funktionalit&auml;t unserer Website. Eine Weitergabe oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles
              nachtr&auml;glich zu &uuml;berpr&uuml;fen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
            </p>

            <p>
              <b>2.2</b>&nbsp;Diese Website nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung personenbezogener Daten und anderer vertraulicher Inhalte (z.B.
              Bestellungen oder Anfragen an den Verantwortlichen) eine SSL-bzw. TLS-Verschl&uuml;sselung. Sie k&ouml;nnen eine verschl&uuml;sselte Verbindung an der Zeichenfolge
              &bdquo;https://&#8220; und dem Schloss-Symbol in Ihrer Browserzeile erkennen.
            </p>

            <h3>3) Hosting &amp; Content-Delivery-Network</h3>

            <p>
              <b>3.1</b>&nbsp;Vercel
            </p>

            <p>
              F&uuml;r das Hosting unserer Website und die Darstellung der Seiteninhalte nutzen wir das System des folgenden Anbieters: Vercel Inc., 340 S Lemon Ave #4133, Walnut,
              CA 91789, USA
            </p>

            <p>
              S&auml;mtliche auf unserer Website erhobenen Daten werden auf den Servern des Anbieters verarbeitet.
              <br />
              Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte
              Weitergabe an Dritte untersagt.
            </p>

            <p>
              F&uuml;r Daten&uuml;bermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines
              Angemessenheitsbeschlusses der Europ&auml;ischen Kommission die Einhaltung des europ&auml;ischen Datenschutzniveaus&nbsp;sicherstellt.
            </p>

            <p>
              <b>3.2</b>&nbsp;Cloudinary
            </p>

            <p>Wir nutzen ein Content Delivery Network des folgenden Anbieters: Cloudinary Ltd., 3400 Central Expressway, Suite 110, Santa Clara, CA 95051, USA</p>

            <p>
              Dieser Dienst erm&ouml;glicht uns, gro&szlig;e Mediendateien wie Grafiken, Seiteninhalte oder Skripte &uuml;ber ein Netz regional verteilter Server schneller
              auszuliefern. Die Verarbeitung erfolgt zur Wahrung unseres berechtigten Interesses an der Verbesserung der Stabilit&auml;t und Funktionalit&auml;t unserer Website
              gem. Art. 6 Abs. 1 lit. f DSGVO. Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer Seitenbesucher
              sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
            </p>

            <p>
              F&uuml;r die &Uuml;bermittlung von Daten in die USA beruft sich der Anbieter auf Standardvertragsklauseln der Europ&auml;ischen Kommission, welche die Einhaltung des
              europ&auml;ischen Datenschutzniveaus sicherstellen sollen.
            </p>

            <h3>4) Cookies</h3>

            <p>
              Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu erm&ouml;glichen, verwenden wir Cookies, also kleine Textdateien, die
              auf Ihrem Endger&auml;t abgelegt werden. Teilweise werden diese Cookies nach Schlie&szlig;en des Browsers automatisch wieder gel&ouml;scht (sog.
              &bdquo;Session-Cookies&#8220;), teilweise verbleiben diese Cookies l&auml;nger auf Ihrem Endger&auml;t und erm&ouml;glichen das Speichern von Seiteneinstellungen
              (sog. &bdquo;persistente Cookies&#8220;). Im letzteren Fall k&ouml;nnen Sie die Speicherdauer der &Uuml;bersicht zu den Cookie-Einstellungen Ihres Webbrowsers
              entnehmen.
            </p>

            <p>
              Sofern durch einzelne von uns eingesetzte Cookies auch personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO
              entweder zur Durchf&uuml;hrung des Vertrages, gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO im Falle einer erteilten Einwilligung oder gem&auml;&szlig; Art. 6 Abs. 1
              lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der bestm&ouml;glichen Funktionalit&auml;t der Website sowie einer kundenfreundlichen und effektiven
              Ausgestaltung des Seitenbesuchs.
            </p>

            <p>
              Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das Setzen von Cookies informiert werden und einzeln &uuml;ber deren Annahme entscheiden oder die
              Annahme von Cookies f&uuml;r bestimmte F&auml;lle oder generell ausschlie&szlig;en k&ouml;nnen.
            </p>

            <p>Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalit&auml;t unserer Website eingeschr&auml;nkt sein kann.</p>

            <h3>5) Kontaktaufnahme</h3>

            <p>
              Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden personenbezogene Daten erhoben. Welche Daten im Falle der Nutzung eines
              Kontaktformulars erhoben werden, ist aus dem jeweiligen Kontaktformular ersichtlich. Diese Daten werden ausschlie&szlig;lich zum Zweck der Beantwortung Ihres
              Anliegens bzw. f&uuml;r die Kontaktaufnahme und die damit verbundene technische Administration gespeichert und verwendet.
            </p>

            <p>
              Rechtsgrundlage f&uuml;r die Verarbeitung dieser Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gem&auml;&szlig; Art. 6 Abs. 1 lit. f
              DSGVO. Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab, so ist zus&auml;tzliche Rechtsgrundlage f&uuml;r die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO.
              Ihre Daten werden nach abschlie&szlig;ender Bearbeitung Ihrer Anfrage gel&ouml;scht. Dies ist der Fall, wenn sich aus den Umst&auml;nden entnehmen l&auml;sst, dass
              der betroffene Sachverhalt abschlie&szlig;end gekl&auml;rt ist und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>

            <h3>6) Webanalysedienste</h3>

            <p>
              <b>6.1</b>&nbsp;Google Analytics 4
            </p>

            <p>
              Diese Website benutzt Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland (&quot;Google&quot;),
              der eine Analyse Ihrer Benutzung unserer Website erm&ouml;glicht.
            </p>

            <p>
              Standardm&auml;&szlig;ig werden beim Besuch der Website durch Google Analytics 4 Cookies gesetzt, die als kleine Textbausteine auf Ihrem Endger&auml;t abgelegt werden
              und bestimmte Informationen erheben. Zum Umfang dieser Informationen geh&ouml;rt auch Ihre IP-Adresse, die allerdings von Google um die letzten Ziffern gek&uuml;rzt
              wird, um eine direkte Personenbeziehbarkeit auszuschlie&szlig;en.
            </p>

            <p>
              Die Informationen werden an Server von Google &uuml;bertragen und dort weiterverarbeitet. Dabei sind auch &Uuml;bermittlungen an Google LLC mit Sitz in den USA
              m&ouml;glich.
            </p>

            <p>
              Google nutzt die erhobenen Informationen in unserem Auftrag, um Ihre Nutzung der Website auszuwerten, Reports &uuml;ber die Websiteaktivit&auml;ten f&uuml;r uns
              zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Die im Rahmen von Google Analytics von Ihrem
              Browser &uuml;bermittelte und gek&uuml;rzte IP-Adresse wird nicht mit anderen Daten von Google zusammengef&uuml;hrt. Die im Rahmen der Nutzung von Google Analytics 4
              erhobenen Daten werden f&uuml;r die Dauer von zwei Monaten gespeichert und anschlie&szlig;end gel&ouml;scht.
            </p>

            <p>
              Alle vorstehend beschriebenen Verarbeitungen, insbesondere das Setzen von Cookies auf dem verwendeten Endger&auml;t, erfolgen nur, wenn Sie uns hierf&uuml;r Ihre
              ausdr&uuml;ckliche Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO erteilt haben.
              <br />
              Ohne Ihre Einwilligung unterbleibt der Einsatz von Google Analytics 4 w&auml;hrend Ihres Seitenbesuchs. Sie k&ouml;nnen Ihre erteilte Einwilligung mit Wirkung
              f&uuml;r die Zukunft jederzeit widerrufen. Um Ihr Widerrufsrecht auszu&uuml;ben, deaktivieren Sie bitte diesen Dienst &uuml;ber das auf der Website bereitgestellte
              &bdquo;Cookie-Consent-Tool&#8220;.
            </p>

            <p>
              Wir haben mit Google einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an
              Dritte untersagt.
            </p>

            <p>
              Weitere rechtliche Hinweise zu Google Analytics 4 finden Sie unter{' '}
              <a href="https://policies.google.com/privacy?hl=de&amp;gl=de" target="_blank">
                https://policies.google.com/privacy?hl=de&amp;gl=de
              </a>{' '}
              und unter{' '}
              <a href="https://policies.google.com/technologies/partner-sites" target="_blank">
                https://policies.google.com/technologies/partner-sites
              </a>
              <br />
              <br />
              Demografische Merkmale
              <br />
              Google Analytics 4 nutzt die spezielle Funktion &bdquo;demografische Merkmale&#8220; und kann dar&uuml;ber Statistiken erstellen, die Aussagen &uuml;ber das Alter,
              Geschlecht und Interessen von Seitenbesuchern treffen. Dies geschieht durch die Analyse von Werbung und Informationen von Drittanbietern. Dadurch k&ouml;nnen
              Zielgruppen f&uuml;r Marketingaktivit&auml;ten identifiziert werden. Die gesammelten Daten k&ouml;nnen jedoch keiner bestimmten Person zugeordnet werden und werden
              nach einer Speicherung f&uuml;r die Dauer von zwei Monaten gel&ouml;scht.
            </p>

            <p>
              Google Signals
              <br />
              Als Erweiterung zu Google Analytics 4 kann auf dieser Website Google Signals verwendet werden, um ger&auml;te&uuml;bergreifende Berichte erstellen zu lassen. Wenn Sie
              personalisierte Anzeigen aktiviert haben und Ihre Ger&auml;te mit Ihrem Google-Konto verkn&uuml;pft haben, kann Google vorbehaltlich Ihrer Einwilligung zur Nutzung
              von Google Analytics gem. Art. 6 Abs. 1 lit. a DSGVO Ihr Nutzungsverhalten ger&auml;te&uuml;bergreifend analysieren und Datenbankmodelle, unter anderem zu
              ger&auml;te&uuml;bergreifenden Conversions, erstellen. Wir erhalten keine personenbezogenen Daten von Google, sondern nur Statistiken. Wenn Sie die
              ger&auml;te&uuml;bergreifende Analyse stoppen m&ouml;chten, k&ouml;nnen Sie die Funktion &quot;Personalisierte Werbung&quot; in den Einstellungen Ihres Google-Kontos
              deaktivieren. Folgen Sie dazu den Anweisungen auf dieser Seite:{' '}
              <a href="https://support.google.com/ads/answer/2662922?hl=de" target="_blank">
                https://support.google.com/ads/answer/2662922?hl=de
              </a>{' '}
              Weitere Informationen zu Google Signals finden Sie unter folgendem Link:{' '}
              <a href="https://support.google.com/analytics/answer/7532985?hl=de" target="_blank">
                https://support.google.com/analytics/answer/7532985?hl=de
              </a>
            </p>

            <p>
              UserIDs
              <br />
              Als Erweiterung zu Google Analytics 4 kann auf dieser Website die Funktion &quot;UserIDs&quot; verwendet werden. Wenn Sie in die Nutzung von Google Analytics 4 gem.
              Art. 6 Abs. 1 lit. a DSGVO eingewilligt, ein Konto auf dieser Website eingerichtet haben und sich auf verschiedenen Ger&auml;ten mit diesem Konto anmelden,
              k&ouml;nnen Ihre Aktivit&auml;ten, darunter auch Conversions, ger&auml;te&uuml;bergreifend analysiert werden.
            </p>

            <p>
              F&uuml;r Daten&uuml;bermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines
              Angemessenheitsbeschlusses der Europ&auml;ischen Kommission die Einhaltung des europ&auml;ischen Datenschutzniveaus&nbsp;sicherstellt.
            </p>

            <p>
              <b>6.2</b>&nbsp;Google Tag Manager
            </p>

            <p>
              Diese Website nutzt den &bdquo;Google Tag Manager&#8220;, einen Dienst des folgenden Anbieters: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland
              (nachfolgend: &bdquo;Google&#8220;).
            </p>

            <p>
              Der Google Tag Manager bietet eine technische Grundlage daf&uuml;r, diverse Webanwendungen, darunter auch Tracking- und Analysedienste, zu b&uuml;ndeln und &uuml;ber
              eine einheitliche Benutzeroberfl&auml;che kalibrieren, steuern und an Bedingungen kn&uuml;pfen zu k&ouml;nnen. Der Google Tag Manager selbst speichert keine
              Informationen auf Nutzerendger&auml;ten oder liest diese aus. Auch nimmt der Dienst keine eigenst&auml;ndigen Datenanalysen vor. Allerdings wird durch den Google Tag
              Manager bei Seitenaufruf Ihre IP-Adresse an Google &uuml;bertragen und dort gegebenenfalls gespeichert. Auch eine &Uuml;bermittlung an Server von Google LLC. In den
              USA ist m&ouml;glich.
            </p>

            <p>
              Diese Verarbeitung wird nur dann vollzogen, wenn Sie uns gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO dazu Ihre ausdr&uuml;ckliche Einwilligung erteilt haben. Ohne
              diese Einwilligungserteilung unterbleibt der Einsatz von Google Tag Manager w&auml;hrend Ihres Seitenbesuchs. Sie k&ouml;nnen Ihre erteilte Einwilligung jederzeit mit
              Wirkung f&uuml;r die Zukunft widerrufen. Um Ihren Widerruf auszu&uuml;ben, deaktivieren Sie diesen Dienst bitte in dem auf der Webseite bereitgestellten
              &bdquo;Cookie-Consent-Tool&#8220;.
            </p>

            <p>
              Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte
              Weitergabe an Dritte untersagt.
            </p>

            <p>
              F&uuml;r Daten&uuml;bermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines
              Angemessenheitsbeschlusses der Europ&auml;ischen Kommission die Einhaltung des europ&auml;ischen Datenschutzniveaus&nbsp;sicherstellt.
            </p>

            <h3>7) Retargeting/ Remarketing und Conversion-Tracking</h3>

            <p>- Google Ads Conversion-Tracking</p>

            <p>
              Diese Website nutzt das Online-Werbeprogramm &quot;Google Ads&quot; und im Rahmen von Google Ads das Conversion-Tracking der Google Ireland Limited, Gordon House, 4
              Barrow St, Dublin, D04 E5W5, Irland (&bdquo;Google&#8220;). Wir nutzen das Angebot von Google Ads, um mit Hilfe von Werbemitteln (sogenannten Google Adwords) auf
              externen Webseiten auf unsere attraktiven Angebote aufmerksam zu machen. Wir k&ouml;nnen in Bezug zu den Daten der Werbekampagnen ermitteln, wie erfolgreich die
              einzelnen Werbema&szlig;nahmen sind. Wir verfolgen damit das Anliegen, Ihnen Werbung anzuzeigen, die f&uuml;r Sie von Interesse ist, unsere Website f&uuml;r Sie
              interessanter zu gestalten und eine faire Berechnung der anfallenden Werbekosten zu erreichen.
            </p>

            <p>
              Das Cookie f&uuml;r Conversion-Tracking wird gesetzt, wenn ein Nutzer auf eine von Google geschaltete Ads-Anzeige klickt. Bei Cookies handelt es sich um kleine
              Textdateien, die auf Ihrem Endger&auml;t abgelegt werden. Diese Cookies verlieren in der Regel nach 30 Tagen ihre G&uuml;ltigkeit und dienen nicht der
              pers&ouml;nlichen Identifizierung. Besucht der Nutzer bestimmte Seiten dieser Website und ist das Cookie noch nicht abgelaufen, k&ouml;nnen Google und wir erkennen,
              dass der Nutzer auf die Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde. Jeder Google Ads-Kunde erh&auml;lt ein anderes Cookie. Cookies k&ouml;nnen
              somit nicht &uuml;ber die Websites von Google Ads-Kunden nachverfolgt werden. Die mithilfe des Conversion-Cookies eingeholten Informationen dienen dazu,
              Conversion-Statistiken f&uuml;r Google Ads-Kunden zu erstellen, die sich f&uuml;r Conversion-Tracking entschieden haben. Die Kunden erfahren die Gesamtanzahl der
              Nutzer, die auf ihre Anzeige geklickt haben und zu einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Sie erhalten jedoch keine
              Informationen, mit denen sich Nutzer pers&ouml;nlich identifizieren lassen. Im Rahmen der Nutzung von Google Ads kann es auch zu einer &Uuml;bermittlung von
              personenbezogenen Daten an die Server der Google LLC. in den USA kommen.
            </p>

            <p>
              Details zu den durch Google Ads Conversion Tracking angesto&szlig;enen Verarbeitungen und zum Umgang Googles mit Daten von Websites finden Sie hier:{' '}
              <a href="https://policies.google.com/technologies/partner-sites" target="_blank">
                https://policies.google.com/technologies/partner-sites
              </a>
            </p>

            <p>
              Alle oben beschriebenen Verarbeitungen, insbesondere das Setzen von Cookies f&uuml;r das Auslesen von Informationen auf dem verwendeten Endger&auml;t, werden nur dann
              vollzogen, wenn Sie uns gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO dazu Ihre ausdr&uuml;ckliche Einwilligung erteilt haben. Sie k&ouml;nnen Ihre erteilte
              Einwilligung jederzeit mit Wirkung f&uuml;r die Zukunft widerrufen, indem Sie diesen Dienst in dem auf der Webseite bereitgestellten &bdquo;Cookie-Consent-Tool&#8220;
              deaktivieren.
            </p>

            <p>
              Sie k&ouml;nnen dem Setzen von Cookies durch Google Ads Conversion-Tracking dar&uuml;ber hinaus dauerhaft widersprechen, indem Sie das unter folgendem Link
              verf&uuml;gbare Browser-Plug-in von Google herunterladen und installieren:
              <br />
              <a href="https://www.google.com/settings/ads/plugin?hl=de" target="_blank">
                https://www.google.com/settings/ads/plugin?hl=de
              </a>
            </p>

            <p>
              Bitte beachten Sie, dass bestimmte Funktionen dieser Website m&ouml;glicherweise nicht oder nur eingeschr&auml;nkt genutzt werden k&ouml;nnen, wenn Sie die Verwendung
              von Cookies deaktiviert haben.
              <br />
              Googles Datenschutzbestimmungen sind hier einsehbar:{' '}
              <a href="https://www.google.de/policies/privacy/" target="_blank">
                https://www.google.de/policies/privacy/
              </a>
            </p>

            <p>
              F&uuml;r Daten&uuml;bermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines
              Angemessenheitsbeschlusses der Europ&auml;ischen Kommission die Einhaltung des europ&auml;ischen Datenschutzniveaus&nbsp;sicherstellt.
              <br />- Google Marketing Platform
            </p>

            <p>
              Diese Webseite nutzt das Online Marketing Tool Google Marketing Platform des Betreibers Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland
              (&quot;GMP&quot;).
            </p>

            <p>
              GMP setzt Cookies ein, um f&uuml;r die Nutzer relevante Anzeigen zu schalten, die Berichte zur Kampagnenleistung zu verbessern oder um zu vermeiden, dass ein Nutzer
              die gleichen Anzeigen mehrmals sieht. &Uuml;ber eine Cookie-ID erfasst Google, welche Anzeigen in welchem Browser geschaltet werden und kann so verhindern, dass diese
              mehrfach angezeigt werden. Dar&uuml;ber hinaus kann GMP mithilfe von Cookie-IDs sog. Conversions erfassen, die Bezug zu Anzeigenanfragen haben. Das ist etwa der Fall,
              wenn ein Nutzer eine GMP-Anzeige sieht und sp&auml;ter bei Nutzung des gleichen Browsers die Website des Werbetreibenden aufruft und &uuml;ber diese Website etwas
              kauft. Laut Google enthalten GMP-Cookies keine personenbezogenen Informationen.
              <br />
              Aufgrund der eingesetzten Marketing-Tools baut Ihr Browser automatisch eine direkte Verbindung mit dem Server von Google auf.
            </p>

            <p>
              Wir haben keinen Einfluss auf den Umfang und die weitere Verwendung der Daten, die durch den Einsatz dieses Tools durch Google erhoben werden und informieren Sie
              daher entsprechend unserem Kenntnisstand wie folgt: Durch die Einbindung von GMP erh&auml;lt Google die Information, dass Sie den entsprechenden Teil unseres
              Internetauftritts aufgerufen oder eine Anzeige von uns angeklickt haben. Sofern Sie bei einem Dienst von Google registriert sind, kann Google den Besuch Ihrem Account
              zuordnen. Selbst wenn Sie nicht bei Google registriert sind bzw. sich nicht eingeloggt haben, besteht die M&ouml;glichkeit, dass der Anbieter Ihre IP-Adresse in
              Erfahrung bringt und speichert. Im Rahmen der Nutzung von GMP kann es auch zu einer &Uuml;bermittlung von personenbezogenen Daten an die Server der Google LLC. in den
              USA kommen.
            </p>

            <p>
              Alle oben beschriebenen Verarbeitungen, insbesondere das Setzen von Cookies f&uuml;r das Auslesen von Informationen auf dem verwendeten Endger&auml;t, werden nur dann
              vollzogen, wenn Sie uns gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO dazu Ihre ausdr&uuml;ckliche Einwilligung erteilt haben. Sie k&ouml;nnen Ihre erteilte
              Einwilligung jederzeit mit Wirkung f&uuml;r die Zukunft widerrufen, indem Sie diesen Dienst in dem auf der Webseite bereitgestellten &bdquo;Cookie-Consent-Tool&#8220;
              deaktivieren.
            </p>

            <p>
              F&uuml;r Daten&uuml;bermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines
              Angemessenheitsbeschlusses der Europ&auml;ischen Kommission die Einhaltung des europ&auml;ischen Datenschutzniveaus&nbsp;sicherstellt.
            </p>

            <p>
              Die Datenschutzbestimmungen von GMP by Google finden Sie hier:{' '}
              <a href="https://www.google.de/policies/privacy/" target="_blank">
                https://www.google.de/policies/privacy/
              </a>
              <br />- Google Ads Conversion-Tracking ohne Cookies
            </p>

            <p>
              Diese Website nutzt das Online-Werbeprogramm &quot;Google Ads&quot; und im Rahmen von Google Ads das Conversion-Tracking der Google Ireland Limited, Gordon House, 4
              Barrow St, Dublin, D04 E5W5, Irland (&bdquo;Google&#8220;).
            </p>

            <p>
              Wir nutzen das Angebot von Google Ads, um mit Hilfe von Werbemitteln (sogenannten Google Adwords) auf externen Webseiten auf unsere attraktiven Angebote aufmerksam zu
              machen. Wir k&ouml;nnen in Bezug zu den Daten der Werbekampagnen ermitteln, wie erfolgreich die einzelnen Werbema&szlig;nahmen sind. Wir verfolgen damit das Anliegen,
              Ihnen Werbung anzuzeigen, die f&uuml;r Sie von Interesse ist, unsere Website f&uuml;r Sie interessanter zu gestalten und eine faire Berechnung der anfallenden
              Werbekosten zu erreichen.
            </p>

            <p>
              Diese Website verwendet das Google Ads Conversion Tracking ausschlie&szlig;lich ohne den Einsatz von Cookies, was bedeutet, dass der Dienst zu keinem Zeitpunkt
              Cookies auf Ihrem Endger&auml;t setzt.
            </p>

            <p>
              Stattdessen wird der lokale Speicher Ihres Browsers genutzt, um dort eine individuelle, von Google vergebene ID zu hinterlegen, welche eine Analyse Ihrer Nutzung der
              Website erm&ouml;glicht. Hierf&uuml;r werden &uuml;ber die ID bestimmte Nutzerinformationen verarbeitet.
            </p>

            <p>
              Die ID wird gesetzt, wenn ein Nutzer auf eine von Google geschaltete Ads-Anzeige klickt. Besucht der Nutzer bestimmte Seiten dieser Website, k&ouml;nnen Google und
              wir erkennen, dass der Nutzer auf die Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde. Jeder Google Ads-Kunde erh&auml;lt ein anderes Cookie. Cookies
              k&ouml;nnen somit nicht &uuml;ber die Websites von Google Ads-Kunden nachverfolgt werden. Die so eingeholten Informationen dienen dazu, Conversion-Statistiken
              f&uuml;r Google Ads-Kunden zu erstellen, die sich f&uuml;r Conversion-Tracking entschieden haben. Die Kunden erfahren die Gesamtanzahl der Nutzer, die auf ihre
              Anzeige geklickt haben und zu einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden.
            </p>

            <p>
              Sie erhalten jedoch keine Informationen, mit denen sich Nutzer pers&ouml;nlich identifizieren lassen. Im Rahmen der Nutzung von Google Ads kann es auch zu einer
              &Uuml;bermittlung von personenbezogenen Daten an die Server der Google LLC. in den USA kommen. Details zu den durch Google Ads Conversion Tracking angesto&szlig;enen
              Verarbeitungen und zum Umgang Googles mit Daten von Websites finden Sie hier:{' '}
              <a href="https://policies.google.com/technologies/partner-sites" target="_blank">
                https://policies.google.com/technologies/partner-sites
              </a>
            </p>

            <p>
              Sofern die erhobenen Informationen einen Personenbezug aufweisen, erfolgt die Verarbeitung gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten
              Interesses an der statistischen Auswertung des Erfolgs unserer Werbekampagnen.
              <br />
              Googles Datenschutzbestimmungen sind hier einsehbar:{' '}
              <a href="https://www.google.de/policies/privacy/" target="_blank">
                https://www.google.de/policies/privacy/
              </a>
            </p>

            <p>
              F&uuml;r Daten&uuml;bermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines
              Angemessenheitsbeschlusses der Europ&auml;ischen Kommission die Einhaltung des europ&auml;ischen Datenschutzniveaus&nbsp;sicherstellt.
            </p>

            <h3>8) Seitenfunktionalit&auml;ten</h3>

            <p>Youtube</p>

            <p>
              Diese Website nutzt Plugins zur Anzeige und Wiedergabe von Videos des folgenden Anbieters: Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland
            </p>

            <p>Daten k&ouml;nnen zudem &uuml;bermittelt werden an: Google LLC., USA</p>

            <p>
              Wenn Sie eine Seite unseres Internetauftritts aufrufen, die ein solches Plugin enth&auml;lt, stellt Ihr Browser eine direkte Verbindung zu den Servern des Anbieters
              her, um das Plugin zu laden. Hierbei werden bestimmte Informationen, einschlie&szlig;lich Ihrer IP-Adresse, an den Anbieter &uuml;bermittelt.
            </p>

            <p>
              Wird die Wiedergabe eingebetteter Videos &uuml;ber das Plugin gestartet, setzt der Anbieter zudem Cookies ein, um Informationen &uuml;ber das Nutzerverhalten zu
              sammeln, Wiedergabestatistiken zu erstellen und missbr&auml;uchliches Verhalten zu unterbinden.
            </p>

            <p>
              Sind Sie w&auml;hrend Ihres Seitenbesuchs in einem Nutzerkonto beim Anbieter eingeloggt, werden Ihre Daten beim Klick auf ein Video direkt Ihrem Konto zugeordnet.
              Wenn Sie die Zuordnung zu Ihrem Konto nicht w&uuml;nschen, m&uuml;ssen Sie sich vor Bet&auml;tigung der Wiedergabeschlaltfl&auml;che ausloggen.
            </p>

            <p>
              Alle vorgenannten Verarbeitungen, insbesondere das Setzen von Cookies f&uuml;r das Auslesen von Informationen auf dem verwendeten Endger&auml;t, erfolgen nur, wenn
              Sie uns hierzu Ihre ausdr&uuml;ckliche Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO erteilt haben. Die erteilte Einwilligung k&ouml;nnen Sie jederzeit mit Wirkung
              f&uuml;r die Zukunft widerrufen, indem Sie diesen Dienst &uuml;ber das auf der Webseite bereitgestellte &bdquo;Cookie-Consent-Tool&#8220; deaktivieren.
            </p>

            <p>
              F&uuml;r Daten&uuml;bermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines
              Angemessenheitsbeschlusses der Europ&auml;ischen Kommission die Einhaltung des europ&auml;ischen Datenschutzniveaus&nbsp;sicherstellt.
            </p>

            <h3>9) Rechte des Betroffenen</h3>

            <p>
              <b>9.1</b>&nbsp;Das geltende Datenschutzrecht gew&auml;hrt Ihnen gegen&uuml;ber dem Verantwortlichen hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten die
              nachstehenden Betroffenenrechte (Auskunfts- und Interventionsrechte), wobei f&uuml;r die jeweiligen Aus&uuml;bungsvoraussetzungen auf die angef&uuml;hrte
              Rechtsgrundlage verwiesen wird:
            </p>

            <ul>
              <li>Auskunftsrecht gem&auml;&szlig; Art. 15 DSGVO;</li>
              <li>Recht auf Berichtigung gem&auml;&szlig; Art. 16 DSGVO;</li>
              <li>Recht auf L&ouml;schung gem&auml;&szlig; Art. 17 DSGVO;</li>
              <li>Recht auf Einschr&auml;nkung der Verarbeitung gem&auml;&szlig; Art. 18 DSGVO;</li>
              <li>Recht auf Unterrichtung gem&auml;&szlig; Art. 19 DSGVO;</li>
              <li>Recht auf Daten&uuml;bertragbarkeit gem&auml;&szlig; Art. 20 DSGVO;</li>
              <li>Recht auf Widerruf erteilter Einwilligungen gem&auml;&szlig; Art. 7 Abs. 3 DSGVO;</li>
              <li>Recht auf Beschwerde gem&auml;&szlig; Art. 77 DSGVO.</li>
            </ul>

            <p>
              <b>9.2</b>&nbsp;WIDERSPRUCHSRECHT
            </p>

            <p>
              WENN WIR IM RAHMEN EINER INTERESSENABW&Auml;GUNG IHRE PERSONENBEZOGENEN DATEN AUFGRUND UNSERES &Uuml;BERWIEGENDEN BERECHTIGTEN INTERESSES VERARBEITEN, HABEN SIE DAS
              JEDERZEITIGE RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG WIDERSPRUCH MIT WIRKUNG F&Uuml;R DIE ZUKUNFT
              EINZULEGEN.
            </p>

            <p>
              MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN. EINE WEITERVERARBEITUNG BLEIBT ABER VORBEHALTEN, WENN WIR
              ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN K&Ouml;NNEN, DIE IHRE INTERESSEN, GRUNDRECHTE UND GRUNDFREIHEITEN &Uuml;BERWIEGEN, ODER
              WENN DIE VERARBEITUNG DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN DIENT.
            </p>

            <p>
              WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
              BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN. SIE K&Ouml;NNEN DEN WIDERSPRUCH WIE OBEN BESCHRIEBEN AUS&Uuml;BEN.
            </p>

            <p>MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN ZU DIREKTWERBEZWECKEN.</p>

            <h3>10) Dauer der Speicherung personenbezogener Daten</h3>

            <p>
              Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen Rechtsgrundlage, am Verarbeitungszweck und &ndash; sofern einschl&auml;gig
              &ndash; zus&auml;tzlich anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels- und steuerrechtliche Aufbewahrungsfristen).
            </p>

            <p>
              Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer ausdr&uuml;cklichen Einwilligung gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO werden die
              betroffenen Daten so lange gespeichert, bis Sie Ihre Einwilligung widerrufen.
            </p>

            <p>
              Existieren gesetzliche Aufbewahrungsfristen f&uuml;r Daten, die im Rahmen rechtsgesch&auml;ftlicher bzw. rechtsgesch&auml;fts&auml;hnlicher Verpflichtungen auf der
              Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden, werden diese Daten nach Ablauf der Aufbewahrungsfristen routinem&auml;&szlig;ig gel&ouml;scht, sofern sie
              nicht mehr zur Vertragserf&uuml;llung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein berechtigtes Interesse an der Weiterspeicherung fortbesteht.
            </p>

            <p>
              Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht
              nach Art. 21 Abs. 1 DSGVO aus&uuml;ben, es sei denn, wir k&ouml;nnen zwingende schutzw&uuml;rdige Gr&uuml;nde f&uuml;r die Verarbeitung nachweisen, die Ihre
              Interessen, Rechte und Freiheiten &uuml;berwiegen, oder die Verarbeitung dient der Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen.
            </p>

            <p>
              Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert,
              bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 2 DSGVO aus&uuml;ben.
            </p>

            <p>
              Sofern sich aus den sonstigen Informationen dieser Erkl&auml;rung &uuml;ber spezifische Verarbeitungssituationen nichts anderes ergibt, werden gespeicherte
              personenbezogene Daten im &Uuml;brigen dann gel&ouml;scht, wenn sie f&uuml;r die Zwecke, f&uuml;r die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht
              mehr notwendig sind.
            </p>
          </text-content-comp>
        </div>
      </div>
    );
  }
}
