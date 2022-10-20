const url = "https://xkcd.now.sh/?comic=latest";

let mainEl = document.getElementById("main");

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
    let imgEl = `<img id="img" src="${data.img}"/>`;
    mainEl.innerHTML = `${imgEl}`;
  })
  .catch((error) => {
    console.log(error);
  });
