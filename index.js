let lis = document.querySelectorAll("main .container section .contain nav ul li")

let prev = document.querySelector("main .container section.preview")

let thank = document.querySelector("main .container section.thank")

let num = document.getElementById("num")

let btn = document.getElementById("btn-sub")

btn.addEventListener("click",function(){
    lis.forEach(li=>{
        if(li.classList.contains("active")){
            num.innerHTML = li.textContent
        }
    })
    if(num.innerHTML == ''){
        return;
    }
    prev.classList.toggle("hide")
    thank.classList.toggle("hide")
})

lis.forEach(li=>{
    li.addEventListener("click",function(){
        lis.forEach(l=>{
            l.classList.remove('active')
        })
        li.classList.add("active")
    })
})