fetch(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=%20machine%20gun%20kelly"
)
  .then(function (data) {
    console.log("try", data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selezionaId = [705273532, 1697110167, 1456807952];
    let filtraCanzoni = albums.filter((song) => selezionaId.includes(song.id));
    let card = document.getElementById("container");
    filtraCanzoni.forEach((song) => {
      card.innerHTML += `
      <div class="col"> 
      <div class="card mx-auto  mt-5" style="width: 20rem;background-color: #8b008bb3;">
        <img src="${song.album.cover_big}" class="card-img-top " alt="...">
        <div class="card-body">
          <h2 class="card-title box">${song.title}</h2>
          
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><b>${song.artist.name}</b></li>
          <li class="list-group-item">${song.album.title}</li>
          
        </ul>
       
      </div>
      </div>
      </div>
        `;
    });
  });
fetch(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=%20heal%20the%20world%20michael%20jackson"
)
  .then(function (data) {
    console.log("try", data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selezionaId = [15593565];
    let filtraCanzoni = albums.filter((song) => selezionaId.includes(song.id));
    let card = document.getElementById("containerdue");
    filtraCanzoni.forEach((song) => {
      card.innerHTML += `
      <div class="col"> 
      <div class="card mb-3 mx-auto" style="background-color: #d2ac81;
      
      max-width: 1400px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${song.album.cover_big}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title box"style="font-size: 100px;
        margin-top: 60px;">${song.title}</h5>
        <p class="card-text"style="font-size: 50px;">${song.artist.name}</p>
        <p class="card-text " style="font-size: 50px"><small class="text-muted">${song.album.title}</small></p>
      </div>
    </div>
  </div>
</div>
        `;
    });
  });
fetch(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=%20machine%20gun%20kelly"
)
  .then(function (data) {
    console.log("try", data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selezionaRank = [488333, 530443, 667240];
    function compareNumbers(a, b) {
      return a - b;
    }
    let filtraCanzoni = albums.filter((song) =>
      selezionaRank.sort(compareNumbers).includes(song.rank)
    );
    let card = document.querySelector(".alert");
    filtraCanzoni.forEach((song) => {
      card.innerHTML += `<ul>
      <li>${song.artist.name}:</strong>${song.title} </li></ul>
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>`;
    });
  });

const targetDiv = document.getElementById("third");
const btn = document.getElementById("toggle");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "grid";
  }
};

fetch(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=%20machine%20gun%20kelly"
)
  .then(function (data) {
    console.log("try", data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selezionaId = [705273532, 1697110167, 1456807952];
    let filtraCanzoni = albums.filter((song) => selezionaId.includes(song.id));
    let card = document.querySelector(".modal-body");
    filtraCanzoni.forEach((song) => {
      card.innerHTML += `<h2>${song.title}</h2>
              <p>${song.album.title}</p>`;
    });
  });
fetch(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=%20heal%20the%20world%20michael%20jackson"
)
  .then(function (data) {
    console.log("try", data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selezionaId = [15593565];
    let filtraCanzoni = albums.filter((song) => selezionaId.includes(song.id));
    let card = document.querySelector(".modal-body");
    filtraCanzoni.forEach((song) => {
      card.innerHTML += `<h2>${song.title}</h2>
                <p>${song.album.title}</p>`;
    });
  });

fetch(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=%20dream%20machine%20tokio%20hotel"
)
  .then(function (data) {
    console.log("try", data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selezionaId = [143200580];
    let filtraCanzoni = albums.filter((song) => selezionaId.includes(song.id));
    let card = document.querySelector(".modal-body");
    filtraCanzoni.forEach((song) => {
      card.innerHTML += `<h2>${song.album.title}</h2>
                  <p>${song.artist.name}</p>`;
    });
  });
fetch(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=%20him%20deep%20shadows%20and%20brilliant%20highlights"
)
  .then(function (data) {
    console.log("try", data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selezionaId = [15761386];
    let filtraCanzoni = albums.filter((song) => selezionaId.includes(song.id));
    let card = document.querySelector(".modal-body");
    filtraCanzoni.forEach((song) => {
      card.innerHTML += `<h2>${song.album.title}</h2>
                    <p>${song.artist.name}</p>`;
    });
  });
fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=%20yungblud")
  .then(function (data) {
    console.log("try", data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selezionaId = [1883566627];
    let filtraCanzoni = albums.filter((song) => selezionaId.includes(song.id));
    let card = document.querySelector(".modal-body");
    filtraCanzoni.forEach((song) => {
      card.innerHTML += `<h2>${song.album.title}</h2>
                      <p>${song.artist.name}</p>`;
    });
  });
