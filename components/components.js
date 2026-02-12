class SiteHeader extends HTMLElement {
  connectedCallback() {
    fetch('https://raw.githubusercontent.com/johnmoney/aiready/refs/heads/master/components/header.html')
      .then(r => r.text())
      .then(html => this.innerHTML = html);
  }
}
customElements.define('site-header', SiteHeader);

class SiteFooter extends HTMLElement {
  connectedCallback() {
    fetch('https://raw.githubusercontent.com/johnmoney/aiready/refs/heads/master/components/footer.html')
      .then(r => r.text())
      .then(html => this.innerHTML = html);
  }
}
customElements.define('site-footer', SiteFooter);