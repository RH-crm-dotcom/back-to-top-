(function () {
  function createBackToTopButton() {
    const btn = document.createElement('div');
    btn.innerHTML = '↑';

    Object.assign(btn.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      background: '#4285f4',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      cursor: 'pointer',
      boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
      zIndex: '9999',
    });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.body.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createBackToTopButton);
  } else {
    createBackToTopButton();
  }
})();
