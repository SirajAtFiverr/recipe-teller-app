
import { ingredients, steps } from '/data.js';

const ingredientsListEl = document.getElementById('ingredients-list');
const stepsListEl = document.getElementById('steps-list');

function renderListItems(listEl, items) {

    for(let i = 0; i < items.length; i++) {
        renderListItem(i+1, listEl, items[i]);
    }
}

function renderListItem(num, listEl, item) {
    const listItemHtml = `
                            <li id=${num}>
                                <span class="number">${num}</span>
                                <span class="text">${item}</span>
                            </li>
                        `
    listEl.innerHTML += listItemHtml;
}

document.addEventListener('click', function(event) {
    const target = event.target;
    console.log(target);
    if(target.classList.contains('number')) {
        target.classList.toggle('completed');

        if(target.textContent === '✓')
            target.textContent = target.parentElement.id;
        else
            target.textContent = '✓';
    } 

    if(target.classList.contains('generate-button')) {
        renderListItems(ingredientsListEl, ingredients);
        renderListItems(stepsListEl, steps);
    }

    if(target.classList.contains('save-button')) {
        ingredientsListEl.innerHTML = '';
        stepsListEl.innerHTML = '';
    }

    if(target.classList.contains('share-button')) {
        alert('Share this recipe!');
    }
});



