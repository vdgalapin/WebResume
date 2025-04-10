function MakeAmericanFlag() {
    const canton = document.getElementById('canton');
    let rows = 9;
  
    for (let row = 0; row < rows; row++) {
        let starsInRow = row % 2 === 0 ? 6 : 5;
        for (let i = 0; i < 6; i++) {
        if (i < starsInRow) {
            const star = document.createElement('div');
            star.className = 'star';
            star.textContent = '★';
            if (row % 2 == 1) {
                star.style.paddingLeft = '50px';    
            }
            star.style.animationDelay = `${(row * 6 + i) * 0.01}s`;
            canton.appendChild(star);
        } else {  
            canton.appendChild(document.createElement('div'));  
        }
    }
  }
}