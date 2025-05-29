class BackToTop {
  constructor() {
    this.button = document.createElement('button');
    this.button.className = 'btw-button';
    this.button.innerHTML = '↑';
    this.button.title = 'Voltar ao topo';
    this.button.setAttribute('aria-label', 'Voltar ao topo da página');

    this.container = document.createElement('div');
    this.container.className = 'btw-container';
    this.container.style.display = 'none';
    this.container.appendChild(this.button);

    document.body.appendChild(this.container);

    this.setupEvents();
  }

  setupEvents() {
    window.addEventListener('scroll', () => this.toggleVisibility());
    this.button.addEventListener('click', () => this.scrollToTop());
  }

  toggleVisibility() {
    if (window.scrollY > 300) {
      this.container.style.display = 'block';
    } else {
      this.container.style.display = 'none';
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  new BackToTop();
});
