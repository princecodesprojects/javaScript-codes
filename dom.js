//alert("Hello");
let r=confirm("Hello");

if(r==true){
    let ele=document.getElementById("h2");
    ele.innerHTML="Ok pressed"
}else{
    document.getElementById("h2").innerHTML="Cancel pressed";
}

// console.log(r);


// function maths(){
//     let v=prompt("Solve 20-10");

//     if(v==10){
//         document.getElementById("h").innerHTML="Booked";
//     }else{
//         document.getElementById("h").innerHTML="Learn MAths";
//     }
// }


// const list=`
//     <li>One</li>
//     <li>Two</li>
//     <li>Three</li>
// `;

// const ul=document.querySelector("ul");
// ul.innerHTML=list;


//Create Element

// const title=document.createElement("h1");
// title.className="h";
// title.style.color="red";
// title.textContent="Creating html element";
// console.log(title);

// document.body.appendChild(title);

//Event Listener


// let ele=document.getElementById("hhh")

// ele.addEventListener("hover",color);

// function color(){
//     document.getElementById("hhh").style.color="yellow";
//     console.log("Clicked");
// }

//=>//how to add css class to elements

// document.getElementById("hhh").classList.add('css-class');

//=>//how to remove css class to elements

// document.getElementById("hhh").classList.remove('css-class');
