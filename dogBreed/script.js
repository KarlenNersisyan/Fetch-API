const select = document.querySelector("#breeds");
const imgContainer = document.querySelector(".img-container");

const dogsNames = () => {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => dogsBreedsSelect(data));
};
// Dogs Breeds Name Select
const dogsBreedsSelect = (data) => {
  const dogsBreedsName = Object.keys(data.message);

  dogsBreedsName.forEach((item) => {
    const option = document.createElement("option");
    option.setAttribute("value", item);
    option.textContent = item[0].toUpperCase() + item.slice(1);

    select.append(option);
  });
};
// Dogs Breeds Images
const dogsImages = (data) => {
  imgContainer.innerHTML = "";
  data.message.forEach((item) => {
    const img = document.createElement("img");
    img.src = item;
    imgContainer.style.display = "flex";
    imgContainer.append(img);
  });
};

const dogsBreedsData = (dogName) => {
  fetch(`https://dog.ceo/api/breed/${dogName}/images`)
    .then((response) => response.json())
    .then((data) => dogsImages(data));
};

// Load
window.addEventListener("load", dogsNames);

select.addEventListener("change", () => {
  if (select.value) {
    dogsBreedsData(select.value);
  }
});
