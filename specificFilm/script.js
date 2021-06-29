fetch("https://ghibliapi.herokuapp.com/films/")
  .then(function (data) {
    return data.json();
  })
  .then(function (data) {
    const containerGeneral = document.querySelector(".container-general");
    data.forEach((film) => {
      const filmsItem = `
        <div class="container-films">
          <div class="containerFilmsItem">
            <label class="nameColor" for="title">Title :</label>
            <span name="title" class="title">${film.title}</span>
          </div>
          <div class="containerFilmsItem">
            <label class="nameColor" for="description">Description</label>
            <div name="description" class="description">${film.description}</div>
          </div>
          <div class="containerFilmsItem">
            <label class="nameColor" for="director">Director :</label>
            <span name="director" class="director">${film.director}</span>
          </div>
          <div class="containerFilmsItem">
          <label class="nameColor" for="producer">Producer :</label>
            <span name="producer" class="producer">${film.producer}</span>
          </div>
          <div class="containerFilmsItem">
            <label class="nameColor" for="release-date">Release Date :</label>
            <span name="release-date" class="release-date">${film.release_date}</span>
          </div>
        </div>
      `;
      containerGeneral.insertAdjacentHTML("beforeend", filmsItem);
    });
  });
