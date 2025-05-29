(function() {
  // Cria o iframe
  const iframe = document.createElement('iframe');
  iframe.src = 'https://SEU-USUARIO.github.io/SEU-REPO/embed/';
  iframe.style.cssText = `
    border: none;
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    overflow: hidden;
  `;
  
  // Cria o container
  const container = document.createElement('div');
  container.id = 'back-to-top-widget';
  container.appendChild(iframe);
  
  // Adiciona ao corpo do documento
  document.body.appendChild(container);
})();
