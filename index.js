
console.log('js connected');

let theCatDiv = document.getElementById('cat');

console.log(theCatDiv);
theCatDiv.innerHTML = "I'm a cat";


theCatDiv.style.backgroundColor = 'red';
theCatDiv.style.border = '2px green solid';
theCatDiv.style.fontSize = '50px';
theCatDiv.style.marginTop = '30px';
theCatDiv.style.paddingBottom = '30px';

let mice = document.getElementsByClassName('mouse')

console.log(mice)

let miceArray = [...mice];
 
console.log(miceArray)

let divs = document.getElementsByTagName('div');
console.log(divs);

let firstMouse = document.querySelector('.mouse');
let firstDiv = document.querySelector('div');

console.log(firstMouse); // <== <div class="mouse"></div>
console.log(firstDiv);