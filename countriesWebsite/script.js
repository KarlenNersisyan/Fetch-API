// Search
const searchBtn = document.querySelector("#search-btn");
const search = document.querySelector("#query");
const searchForm = document.querySelector("#search-form");

// countries List
const countriesContainer = document.querySelector(".countries");
const countriesList = document.querySelector("#countries-list");

// Loading Spinner
const loadingSpinner = document.querySelector(".loadingSpinner");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

const displayStateData = (data) => {
  data.forEach((item) => {
    const countriesContainerItem = `
          <section class="country">
            <img class="country-img" src="${item.flag}" alt="Flag of ${
      item.name
    }" />
              <div class="country-data">
                <h2 class="country-name">${item.name}</h3>
                <h3 class="country-capital">${item.capital}</h3>
                <h4 class="country-region">${item.region}</h4>
                <p class="country-row"><span><i class="fas fa-users"></i></span>${Number(
                  item.population
                )}
              </p>
                <p class="country-row"><span><i class="fad fa-map"></i></span>${Number(
                  item.area
                )} km<sup>2</sup></p>
                <p class="country-row"><span><i class="fas fa-language"></i></span>${
                  item.languages[0].name
                }</p>
                <p class="country-row"><span><i class="fas fa-phone-plus"></i></i></span>${
                  item.callingCodes
                }</p>
                <p class="country-row"><span><i class="fas fa-check-double"></i></span>${
                  item.nativeName
                }</p>
                <p class="country-row"><span><i class="far fa-sack-dollar"></i></span>${
                  item.currencies[0].name
                }</p>
              </div>
          </section>
        `;

    countriesContainer.insertAdjacentHTML("beforeend", countriesContainerItem);
  });
};

const errorMessage = (message) => {
  const span = document.createElement("span");
  span.textContent = message;
  span.setAttribute("class", "error-message");
  countriesContainer.append(span);
};

const giveListCountries = () => {
  clearContainer();
  loadingSpinner.style.display = "inline-block";
  fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => response.json())
    .then((data) => displayStateData(data))
    .finally(() => {
      countriesContainer.style.opacity = "1";
      loadingSpinner.style.display = "none";
    });
};

const countryError = (countryName) => {
  loadingSpinner.style.display = "inline-block";

  fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        errorMessage("Such a state does not exist yet!");
      }
    })
    .then((data) => {
      displayStateData(data);
    })
    .finally(() => {
      countriesContainer.style.opacity = "1";
      loadingSpinner.style.display = "none";
    });
};

const clearContainer = () => {
  const allChildren = Array.from(countriesContainer.children);
  allChildren.forEach((elem) => elem.remove());
};

const getCountry = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const countryParam = urlSearchParams.get("country");

  if (countryParam) {
    countryError(countryParam);
  }
};

searchBtn.addEventListener("click", () => {
  clearContainer();
  countryError(search.value);
});

window.addEventListener("load", giveListCountries);
countriesList.addEventListener("click", giveListCountries);
