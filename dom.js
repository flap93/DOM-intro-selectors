let paragraph = document.getElementById('paragraph');
paragraph.setAttribute('id', 'info-paragraph');

let h2Tag = document.createElement('h2');
console.log(h2Tag);

h2Tag.innerHTML = 'Elephant';

let parent = document.getElementsByTagName('body')[0];
parent.appendChild(h2Tag);

let text = document.createTextNode('This text is created dynamically  ');
 
parent.appendChild(text);