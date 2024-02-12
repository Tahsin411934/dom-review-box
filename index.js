const textarea=document.querySelector("textarea");
const btn=document.querySelector("#btn");
const cmt=document.querySelector("#cmt");
const input1=document.querySelector("#input1");

btn.addEventListener("click", function(){
    let email = document.createElement("li");
    email.innerHTML = `Id ${input1.value} `;
    cmt.appendChild(email);

    let p=document.createElement("p");
    p.innerHTML= `       ${textarea.value} `;
    p.style.marginLeft= '3rem';
    p.style.marginBottom='2rem'
    cmt.appendChild(p);
    
    input1.value = '';

    
})
