/*

    Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
    In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
    La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
    Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.

*/

const startButton = document.getElementById('start-button');
console.log('startButton', startButton, typeof startButton);

startButton.addEventListener('click', function() {
    //console.log('bottone click');

    const bombs = [];
    while (bombs.length < 16) {
        const randomNumber = getRandomNumber(1, 100);
        console.log('randomNumber', randomNumber, typeof randomNumber);

        if (bombs.includes(randomNumber) == false) {
            bombs.push(randomNumber);
        };
        
    }
    console.log('bombs', bombs, typeof bombs);

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

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}