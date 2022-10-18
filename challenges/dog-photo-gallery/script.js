const url = "https://dog.ceo/api/breeds/image/random";
let headerContainer = document.getElementById("header");
let headerEl = document.createElement("h1");
headerEl.style.color = "green";
headerEl.style.textAlign = "center";
headerEl.innerText = "Dog Photo Gallery";
headerContainer.appendChild(headerEl);
let mainEl = document.getElementById("main");
mainEl.style.backgroundColor = "#000";
mainEl.style.width = "90%";
// mainEl.style.height = "100vh";
mainEl.style.margin = "auto";
let addBtn = document.getElementById("btn1");
addBtn.innerText = "view".toUpperCase();
addBtn.style.color = "black";
addBtn.style.backgroundColor = "green";
addBtn.style.margin = '1rem 0 1rem 1rem';
addBtn.style.padding = '1rem';

let unorderedlist = document.getElementById("unordered-list");

addBtn.addEventListener("click", () => {
  fetch(url)
    .then((response) => {
      if (response.status > 199 && response.status < 300) {
        return response.json();
      } else {
        throw new Error(
          `Encountered something unexpected: ${response.status} ${response.statusText}`
        );
      }
    })
    .then((data) => {
      let imgEl = `<img src= "${data.message}" width= 1200/>`;
      unorderedlist.innerHTML = `<li> ${imgEl} </li>`;
    })
    .catch((error) => {
      console.log(error);
    });
});

saveBtn.addEventListener("click", () => {});
