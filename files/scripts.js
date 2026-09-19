
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

async function init() {
  const node = document.querySelector("#typetext")

  await sleep(1000)
  node.innerText = ""
  await node.type('')

  while (true) {
    await node.type('Bienvenidos!')
    await sleep(2000)
    await node.delete('Bienvenidos!')
    await sleep(500)
    await node.type('Bienvenue!')
    await sleep(2000)
    await node.delete('Bienvenue!')
    await sleep(500)
    await node.type('Welcome!')
    await sleep(2000)
    await node.delete('Welcome!')
    await sleep(500)
    await node.type('Witajcie!')
    await sleep(2000)
    await node.delete('Witajcie!')
    await sleep(500)
  }
}

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
  get typeInterval() {
    const randomMs = 100 * Math.random()
    return randomMs < 50 ? 10 : randomMs
  }

  async type(text) {
    for (let character of text) {
      this.innerText += character
      await sleep(this.typeInterval)
    }
  }

  async delete(text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length - 1)
      await sleep(this.typeInterval)
    }
  }
}

customElements.define('type-async', TypeAsync, { extends: 'span' });
init();

const container = document.querySelector(".program");
const tabFriday = document.querySelector(".linkFriday");
const tabSaturday = document.querySelector(".linkSaturday");
const tabSunday = document.querySelector(".linkSunday");
const boxFriday = document.querySelector(".boxFriday");
const boxSaturday = document.querySelector(".boxSaturday");
const boxSunday = document.querySelector(".boxSunday");

// tabFriday.classList.add("is-active");
// boxFriday.classList.remove("is-hidden");
// container.style.backgroundColor = "rgb(139,211,230)";

tabFriday.addEventListener("click", () => {
  // container.style.backgroundColor = "rgb(139,211,230)";
  tabFriday.classList.add("is-active");
  tabSunday.classList.remove("is-active");
  tabSaturday.classList.remove("is-active");
  boxFriday.classList.remove("is-hidden");
  boxSaturday.classList.add("is-hidden");
  boxSunday.classList.add("is-hidden");

});

tabSaturday.addEventListener("click", () => {
  // container.style.backgroundColor = "rgb(177,162,202)";
  tabSaturday.classList.add("is-active");
  tabSunday.classList.remove("is-active");
  tabFriday.classList.remove("is-active");
  boxFriday.classList.add("is-hidden");
  boxSaturday.classList.remove("is-hidden");
  boxSunday.classList.add("is-hidden");

});

tabSunday.addEventListener("click", () => {
  // container.style.backgroundColor = "rgb(233,236,107)";
  tabSunday.classList.add("is-active");
  tabFriday.classList.remove("is-active");
  tabSaturday.classList.remove("is-active");
  boxFriday.classList.add("is-hidden");
  boxSaturday.classList.add("is-hidden");
  boxSunday.classList.remove("is-hidden");
});

window.onload = function () {
  document.getElementById('request-form').addEventListener('submit', function (event) {
    event.preventDefault();
    button = document.querySelector(".songrequest");
    if (this.song.value === "" || this.artist.value === "" || this.requested.value === "") {
      alert(`You forgot to fill all the fields!`);
    } else {
      emailjs.sendForm('service_3eco3c4', 'template_drx3g3g', this)
        .then(function () {
          button.disabled = true;
          button.value = 'Gracias!';
        }, function (error) {
          button.disabled = true;
          button.value = 'Gracias!';
        });
    }
  });
}