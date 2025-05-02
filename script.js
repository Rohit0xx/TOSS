function tossCoin() {
    const coin = document.getElementById('coin');
    const result = document.getElementById('result');
  
    coin.classList.remove('flip');
    void coin.offsetWidth; // reset animation
    coin.classList.add('flip');
  
    setTimeout(() => {
      const isHeads = Math.random() < 0.5;
  
      if (isHeads) {
        coin.style.backgroundImage = "url('coin/2409-200.jpg')";
        result.textContent = "It's HEADS!";
      } else {
        coin.style.backgroundImage = "url('coin/3180-200.jpg')";
        result.textContent = "It's TAILS!";
      }
    }, 1000);
  }
  
