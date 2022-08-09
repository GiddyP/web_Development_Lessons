const allLinks = document.querySelectorAll('a');

// This changes all elements in this case anchor tag
// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}
// getAttribute
const firstLink = document.querySelector('a');
// firstLink.getAttribute('href')

// setAttribute
firstLink.setAttribute('href', 'http://www.google.com')

// const container = document.querySelector('#container');
// const image = document.querySelector('img');

//     container.style.textAlign = 'center';
    
//     image.style.width = '150px';
//     image.style.borderRadius = '50%';

// h2.setAttribute('class', 'purple'); 
// h2.setAttribute('class', `${currentClasses} purple'); 
// The best way to select classes

const newh3 = document.createElement('h3');

newh3.innerText = 'I am new!'

document.body.appendChild(newh3)

// another way to appen is
const p = document.querySelector('p')

p.append('I am new text yaaaaaaayyy!!!!')

const h2 = document.createElement('h2');
h2.append("are adorable chickens");

const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', h2)

// To remove an element
const img = document.querySelector('img');
img.remove();
//Or
img.parentElement.removeChild();