
let txt =document.querySelector("h3")

let btn = document.querySelector("button")
let flag=1

btn.addEventListener('click', () => {
  

    if(flag){
        txt.innerHTML="Friends!!"
        txt.style.color='green'
        btn.innerHTML="Remove"
        btn.style.backgroundColor="grey"
        flag=0
    }
    else{
        txt.innerHTML="Stranger"
        txt.style.color='red'
        btn.innerHTML="Add Friend"
        btn.style.backgroundColor="#5ea814"


        flag=1
    }

})
