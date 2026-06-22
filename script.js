let modebtn=document.querySelector("#MOD");
let body= document.querySelector("body");
let curmode="light";//dark
let mouse=document.querySelector("#projects");




modebtn.addEventListener("click", ()=>{
    if(curmode==="light"){
        curmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else{
        curmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curmode);
});
mouse.addEventListener("mouseover", ()=>{
   mouse.style.color="red";
});

mouse.addEventListener("mouseout", ()=>{
   mouse.style.color="black";
});