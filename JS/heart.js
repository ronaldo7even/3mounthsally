function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw'; // Define a posição horizontal aleatória
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Dura entre 3 a 5 segundos
  
    document.querySelector('.falling-hearts').appendChild(heart);
  
    // Remove o coração do DOM após a animação
    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  }
  
  setInterval(createHeart, 300); // Cria um novo coração a cada 300ms
  
