//Câu 1
let pElement = document.createElement('p');
pElement.id = 'text';
pElement.innerHTML = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.';
pElement.style.color = '#777';
let navElement = document.querySelector('nav');
navElement.insertAdjacentElement('afterend', pElement);

// Câu 2
let liElements = document.querySelectorAll('#myList li');

for (let i = 0; i < liElements.length; i++) {
    liElements[i].style.color = 'blue';
}

//Câu 3
let list = document.getElementById('list');
for (let i = 8; i <= 10; i++) {
    let liElement = document.createElement('li');
    liElement.textContent = 'Item ' + i;
    list.appendChild(liElement);
}
list.children[0].style.color = 'red';
list.children[2].style.backgroundColor = 'blue';
list.children[3].remove();
let newLiElement = document.createElement('li');
newLiElement.textContent = 'Thẻ mới';
list.insertBefore(newLiElement, list.children[3]);
