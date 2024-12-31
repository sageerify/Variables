function addButton() {
    let container = document.querySelector('.container');
    let newButton = document.createElement('button');
    newButton.textContent = 'New Button';
    newButton.onclick = addButton;
    container.appendChild(newButton);
}