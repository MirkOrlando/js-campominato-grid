/* 
L'utente indica un livello di difficoltà in base al quale 
viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

/* create the grid */

createGrid(".row", 100, "div", "col");

/**
 * Grid generator
 * @param {string} selector a css selector to define the container of the grid
 * @param {number} limit a number value that indicates the total number of the cells of the grid
 * @param {string} tagName an HTML element tag to define the HTML element for each cell
 * @param {string} className a css selector to add some style to the new cells (optional)
 */
function createGrid(selector, limit, tagName, className) {
  const rowElement = document.querySelector(selector);

  for (let i = 0; i < limit; i++) {
    const colElement = document.createElement(tagName);
    colElement.classList.add(className);
    rowElement.append(colElement);
  }
}

/**
 *
 * Generate a random number value included
 * between the minimum and maximum
 * values indicated in the params.
 * This function includes the extremes.
 * @param {number} min A number value that indicates the minimum value
 * @param {number} max A number value that indicates the maximum value
 * @returns {number}
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
