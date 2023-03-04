const rating = document.querySelectorAll(".rating")
const button = document.querySelector("#submit")
const main = document.querySelector("#main")
const divContainer = document.querySelector("#container")
let id = 0;

rating.forEach(score => {  
    score.addEventListener("click", clicked)
})

button.addEventListener("click", submit)

function clicked(e){
    id = +e.target.textContent;

    rating.forEach(function(s) {
        s.classList.remove('bg-color-accent');
        s.classList.add('bg-bg-light/20');
    });

    for (let i = 0; i < id; i++) {
        rating[i].classList.add('bg-color-accent');
        rating[i].classList.remove('bg-bg-light/20')
    }
}

function submit() {
    let thankYou = `

    `
    divContainer.innerHTML = thankYou
}
// submit()







// console.log(id)