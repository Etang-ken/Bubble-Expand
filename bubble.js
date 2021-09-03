const bub1 = document.querySelector('.bub1');
const bub2 = document.querySelector('.bub2');
const bub3 = document.querySelector('.bub3');

const bubbles = [bub1,bub2,bub3];
bubbles.forEach((bubble) => {
    bubble.addEventListener('mouseover', () => {
        
        bubble.classList.add('hov');
        e.preventDefault();
    })
    bubble.addEventListener('mouseout', () => {
    
        bubble.classList.remove('hov');
        e.preventDefault();
    });

});