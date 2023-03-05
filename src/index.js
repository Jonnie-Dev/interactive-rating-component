const rating = document.querySelectorAll(".rating");
const button = document.querySelector("#submit");
const domDiv = document.querySelector("#dom-div");

let id;

rating.forEach((score) => {
  score.addEventListener("click", clicked);
});

function clicked(e) {
  id = +e.target.textContent;

  rating.forEach(function (s) {
    s.classList.remove("bg-color-accent");
    s.classList.add("bg-bg-light/20");
  });

  for (let i = 0; i < id; i++) {
    rating[i].classList.add("bg-color-accent");
    rating[i].classList.remove("bg-bg-light/20");
  }

  button.addEventListener("click", submit);
}

function submit() {
  domDiv.style.opacity = "0";
  let thankYouText = `
        <div id="thank-you" class="text-center">
            <img class="mx-auto mb-4"
            src="./images/illustration-thank-you.svg"
            alt="thank you illustration"
            />
            <p class="mx-auto my-8 text-color-accent/60 bg-bg-light/10 w-fit py-2 px-4 font -bold rounded-2xl text-sm">You selected ${id} out of 5</p>
            <h2 class="text-2xl font-bold mb-4">Thank you!</h2>
            <p class="text-bg-light2 text-sm text-fluid-p">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
            </p>
        </div>
    `;
  domDiv.innerHTML = thankYouText;
  domDiv.style.opacity = "1";

  domDiv.classList.add("transition", "ease-in", "delay-[150ms]");
}
