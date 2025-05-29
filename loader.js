(function() {
  // Verifica se está dentro de um iframe
  if (window.self !== window.top) {
    // Cria o botão dentro do iframe (como fallback)
    var btn = document.createElement('div');
    btn.innerHTML = '↑';
    btn.title = 'Voltar ao topo';
    btn.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      background: #4285f4;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      z-index: 9999;
      transition: all 0.3s;
    `;
    
    document.body.appendChild(btn);
    
    btn.onclick = function() {
      // Tenta rolar a janela principal
      try {
        window.parent.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } catch (e) {
        // Se não conseguir, rola o iframe
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };
  } else {
    // Se não estiver em iframe, cria normalmente
    var btn = document.createElement('div');
    btn.innerHTML = '↑';
    btn.title = 'Voltar ao topo';
    btn.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      background: #4285f4;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      z-index: 9999;
      transition: all 0.3s;
    `;
    
    document.body.appendChild(btn);
    
    btn.onclick = function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  }
})();
