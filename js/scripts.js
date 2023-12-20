/*

    L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
    Ogni cella ha un numero progressivo, da 1 a 100.
    Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/

const startButton = document.getElementById('start-button');
console.log('startButton', startButton, typeof startButton);

startButton.addEventListener('click', function() {
    //console.log('bottone click');

    const grid = document.querySelector('.grid');
    console.log('grid', grid, typeof grid);

    for (let i = 1; i<=100; i++) {
        const cell = document.createElement('div');
        cell.innerHTML = i; 
        cell.classList.add('cell');
        cell.addEventListener('click', function() {
            //console.log('Click cella');
            cell.classList.add('click');
            console.log(cell.innerHTML);
        })
        grid.append(cell);
    }

});