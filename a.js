const btn = document.querySelector(`#plus`)
const btn2 = document.querySelector(`#plus2`)
const btn3 = document.querySelector(`#plus3`)
const q1 = document.querySelector(`.q1`)
const q2 = document.querySelector(`.q2`)
const q3 = document.querySelector(`.q3`)

let clicked = true
btn.onclick = ()=>{
    if(clicked==true){
        q1.classList.add('q11')
        clicked = false
        btn.innerHTML = "-"
    }else{
        q1.classList.remove('q11')
        clicked = true
        btn.innerHTML = "+"
    }  
}
let clicked2 = true
btn2.onclick = ()=>{
    if(clicked2==true){
        q2.classList.add('q22')
        clicked2 = false
        btn2.innerHTML = "-"
    }else{
        q2.classList.remove('q22')
        clicked2 = true
        btn2.innerHTML = "+"
    }  
}
let clicked3 = true
btn3.onclick = ()=>{
    if(clicked3==true){
        q3.classList.add('q33')
        clicked3 = false
        btn3.innerHTML = "-"
    }else{
        q3.classList.remove('q33')
        clicked3 = true
        btn3.innerHTML = "+"
    }  
}