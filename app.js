let btn = document.querySelector("#button");

btn.addEventListener("click",()=>{
    let num = "0123456789ABCDEF";
    let has = "#";
    
    for(let i=0; i<6; i++) {
        has = has + num[Math.floor(Math.random()*16)];
        // console.log(has);
    }
    return document.querySelector("#canvas").style.backgroundColor = has;
});
