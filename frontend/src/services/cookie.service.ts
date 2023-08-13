export class CookieService {
  constructor() {}

  setGoogleAnalyticsCookie() {
    const gaScript2 = document.createElement('script');
    gaScript2.setAttribute('async', '');
    gaScript2.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-Q278DGQLEP');

    document.head.appendChild(gaScript2);
    const gaScript = document.createElement('script');
    gaScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-Q278DGQLEP');`;
    document.head.appendChild(gaScript);
  }
}

export const cookieSvc = new CookieService();
