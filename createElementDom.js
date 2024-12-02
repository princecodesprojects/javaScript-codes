// const h=document.getElementById('h');
// h.innerHTML="Dom Manupulation";
// console.log(h.innerText);
// console.log(h.textContent);

// const parent=document.querySelector('.parent');
// console.log(parent.children)
// //parent.Children returns HTML COllection

// parent.children[0].style.color="orange";


//Returns first child element of the parent
// console.log(parent.firstElementChild);
// console.log(parent.firstChild);

// const dayOne=document.querySelector('.day');
// // console.log(dayOne.parentElement)
// console.log(dayOne.parentElement.childNodes);

const div=document.createElement('div');
div.className="div";
div.id="div1";
div.style.color="white";
const text=document.createTextNode("Dom Malupulation");
div.appendChild(text);
document.body.appendChild(div);
// console.log(div)