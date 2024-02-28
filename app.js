function myFunction() {
    var element = document.body;
    element.dataset.bsTheme =
      element.dataset.bsTheme == "light" ? "dark" : "light";
  }

var watches = {
  ROLEX: {
    Rainbow_Daytona: {
      name: "Rolex - Rainbow Daytona",
      price: "12,03,99,720 PKR",
      gender: "Men's",
      bezel: "Gem Set",
      dialColor: "Black",
      bandMaterial: "Yellow Gold",
      glass: "Curved Sapphire Chrystal",
      waterResistance: "100 Meters (330 Feet)",
      src: "/imgs/rolex_daytona_rainbow.jpg",
    },

    Platinum_Daytona: {
      name: "Rolex - Platinum Ice Blue Daytona",
      price: "4,61,99,729 PKR",
      gender: "Men's",
      bezel: "Ceramic",
      dialColor: "Ice Blue",
      bandMaterial: "Platinum",
      glass: "Curved Sapphire Chrystal",
      waterResistance: "100 Meters (330 Feet)",
      src: "/imgs/platinum_daytona.jpg",
    },

    GMT_Master_II: {
      name: "Rolex - GMT-Master II",
      price: "6,07,03,720 PKR",
      gender: "Men's",
      bezel: "Yellow Gold",
      dialColor: "Black",
      bandMaterial: "Yellow Gold",
      glass: "Curved Sapphire Chrystal",
      waterResistance: "100 Meters (330 Feet)",
      src: "/imgs/gmt-master_ii_yellow_gold.jpg",
    },

    Cosmograph_Daytona: {
      name: "Rolex - Cosmograph Daytona",
      price: "71,20,541 PKR",
      gender: "Men's",
      bezel: "Yellow Gold",
      dialColor: "Black",
      bandMaterial: "Yellow Gold",
      glass: "Curved Sapphire Chrystal",
      waterResistance: "100 Meters (330 Feet)",
      src: "/imgs/rolex_cosmograph_daytona.jpg",
    },

    Daytona_Stainless_Steel: {
      name: "Rolex - Stainless Steel Daytona",
      price: "67,19,720 PKR",
      gender: "Men's",
      bezel: "Stainless Steel",
      dialColor: "White",
      bandMaterial: "Stainless Steel",
      glass: "Curved Sapphire Chrystal",
      waterResistance: "100 Meters (330 Feet)",
      src: "/imgs/silver-daytona.jpg",
    },

    Submariner: {
      name: "Rolex- Submariner Date",
      price: "1,27,39,720 PKR",
      gender: "Men's",
      bezel: "Ceramic",
      dialColor: "Blue",
      bandMaterial: "White Gold",
      glass: "Curved Sapphire Chrystal",
      waterResistance: "300 Meters (1000 Feet)",
      src: "/imgs/rolex-submariner.jpg",
    },
  },

  OMEGA: {
    Speed_Master: {
      name: "Omega - Speedmaster",
      price: "27,99,720 PKR",
      gender: "Men's",
      bezel: "Ceramic",
      dialColor: "Black",
      bandMaterial: "Fabric",
      glass: "Curved Sapphire Chrystal",
      waterResistance: "50 Meters (165 Feet)",
      src: "/imgs/omega_speedmaster.jpg",
    },

    Seamaster_Planet_Ocean: {
      name: "Omega - Seamaster Planet Ocean",
      price: "11,19,720 PKR",
      gender: "Men's",
      bezel: "Ceramic",
      dialColor: "Black",
      bandMaterial: "Stainless Steel",
      glass: "Curved Sapphire Chrystal",
      waterResistance: "600 Meters (2000 Feet)",
      src: "/imgs/omega_seamaster.jpg",
    },

    Seamaster_Olympic: {
      name: "Omega - Seamaster Olympic",
      price: "92,95,720 PKR",
      gender: "Men's",
      bezel: "Platinum",
      dialColor: "Black",
      bandMaterial: "Leather",
      glass: "Curved Sapphire Chrystal",
      waterResistance: "60 Meters (180 Feet)",
      src: "/imgs/omega_seamaster_olympic.jpg",
    },

    Seamaster_Diver: {
      name: "Omega - Seamaster Stainless Steel",
      price: "8,95,720 PKR",
      gender: "Men's",
      bezel: "Stainless Steel Domed",
      dialColor: "Black",
      bandMaterial: "Stainless Steel",
      glass: "Curved Sapphire Chrystal",
      waterResistance: "30 Meters (90 Feet)",
      src: "/imgs/omega_seamaster_diver.jpg",
    },
  },

  PATEK_PHILIPPE: {
    Grand_Complications_Rose_Gold: {
      name: "Patek Philippe - Split Seconds",
      price: "5,73,99,720 PKR",
      gender: "Men's",
      bezel: "Rose Gold",
      dialColor: "Black",
      bandMaterial: "Rose Gold",
      glass: "Curved Sapphire Chrystal",
      waterResistance: "30 Meters (100 Feet)",
      src: "/imgs/patek_philippe_gold.png",
    },

    Grand_Complications_Diamond: {
      name: "Patek Philippe - Grandmaster Chime",
      price: "1,25,99,99,720 PKR",
      gender: "Men's",
      bezel: "Set with Diamonds",
      dialColor: "Black",
      bandMaterial: "White Gold",
      glass: "Curved Sapphire Chrystal",
      waterResistance: "None",
      src: "/imgs/patek_philippe_diamond.jpg",
    },
  },
};

var main = document.getElementById("main");
var brand = document.getElementById("brand");
var collection = document.getElementById("collection");
brand.innerHTML = `<option>Select Brand</option>`;
collection.innerHTML = `<option>Select Collection</option>`;

for (var key in watches) {
  brand.innerHTML += `<option value="${key.toUpperCase()}">${key
    .toUpperCase()
    .replace("_", " ")}</option>`;
}

function renderAllWatches() {
  for (var key in watches) {
    for (var key1 in watches[key]) {
      var obj = watches[key][key1];
      main.innerHTML += `
                       <div
                  class="col-12 col-sm-6 col-lg-4 card"
                  style="width: 18rem"
                >
                  <img
                    src="${obj.src}"
                    class="card-img-top pt-3 pb-3 border bottom-border-1"
                    alt=""
                  />
                  <div class="card-body">
                    <h5 class="card-title fs-4">
                      ${obj.name}
                    </h5>
                    <p
                      class="price p-2 fs-5 fw-semibold mb-3 mt-3 border border-1 rounded-2 w-75"
                      style="color: red"
                    >
                      ${obj.price}
                    </p>
                    <p class="card-text">
                      Gender:
                      <span class="fw-semibold">${obj.gender}</span>
                    </p>
                    <p class="card-text">
                      Dial Color: <span class="fw-semibold">${obj.dialColor}</span>
                    </p>
                    <p class="card-text">
                      Bazel: <span class="fw-semibold">${obj.bezel}</span>
                    </p>
                    <p class="card-text">
                      Band Material: <span class="fw-semibold">${obj.bandMaterial}</span>
                    </p>
                    <p class="card-text">
                      Glass: <span class="fw-semibold">${obj.glass}</span>
                    </p>
                    <p class="card-text">
                      Water Resistance: <span class="fw-semibold">${obj.waterResistance}</span>
                    </p>
                  </div>
                </div>
           `;
    }
  }
}

renderAllWatches();

collection.innerText = "";

collection.innerHTML = `<option>Select Collection</option>`;
function setCollection() {
  collection.innerHTML = `<option>Select Collection</option>`;
  for (var key in watches[brand.value]) {
    collection.innerHTML += `<option value="${key}">${key.replaceAll(
      "_",
      " "
    )}</option>`;
  }
}

var watchDetails = document.getElementById("watch-details");
watchDetails.style.display = "none";

function searchWatch() {
  if (
    brand.value !== "Select Brand" &&
    collection.value !== "Select Collection"
  ) {
    main.style.display = "none";
    watchDetails.style.display = "flex";

    var searchedWatch = watches[brand.value][collection.value];
    watchDetails.innerHTML = `
  <div class="card mb-3 p-3 border-0">
  <div class="row g-0 align-items-center justify-content-center">
    <div class="col-md-3 d-flex justify-content-center align-itmes-center">
      <img
        src="${searchedWatch.src}"
        class="search-img img-fluid rounded-start"
        alt="..."
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title fs-4">
      ${searchedWatch.name}
    </h5>
    <p
      class="price p-2 fs-5 fw-semibold mb-3 mt-3 border border-1 rounded-2 w-75"
      style="color: red"
    >
      ${searchedWatch.price}
    </p>
    <p class="card-text">
      Gender:
      <span class="fw-semibold">${searchedWatch.gender}</span>
    </p>
    <p class="card-text">
      Dial Color: <span class="fw-semibold">${searchedWatch.dialColor}</span>
    </p>
    <p class="card-text">
      Bazel: <span class="fw-semibold">${searchedWatch.bezel}</span>
    </p>
    <p class="card-text">
      Band Material: <span class="fw-semibold">${searchedWatch.bandMaterial}</span>
    </p>
    <p class="card-text">
      Glass: <span class="fw-semibold">${searchedWatch.glass}</span>
    </p>
    <p class="card-text">
      Water Resistance: <span class="fw-semibold">${searchedWatch.waterResistance}</span>
    </p>
       </div>
    </div>
    </div>
   </div>
  `;
  } else if (
    brand.value !== "Select Brand" &&
    collection.value === "Select Collection"
  ) {
    main.innerHTML = "";
    main.style.display = "flex";

    watchDetails.style.display = "none";

    for (var key1 in watches[brand.value]) {
      var obj = watches[brand.value][key1];
      main.innerHTML += `
        <div
   class="col-12 col-sm-6 col-lg-4 card"
   style="width: 18rem"
 >
   <img
     src="${obj.src}"
     class="card-img-top pt-3 pb-3 border bottom-border-1"
     alt=""
   />
   <div class="card-body">
     <h5 class="card-title fs-4">
       ${obj.name}
     </h5>
     <p
       class="price p-2 fs-5 fw-semibold mb-3 mt-3 border border-1 rounded-2 w-75"
       style="color: red"
     >
       ${obj.price}
     </p>
     <p class="card-text">
       Gender:
       <span class="fw-semibold">${obj.gender}</span>
     </p>
     <p class="card-text">
       Dial Color: <span class="fw-semibold">${obj.dialColor}</span>
     </p>
     <p class="card-text">
       Bazel: <span class="fw-semibold">${obj.bezel}</span>
     </p>
     <p class="card-text">
       Band Material: <span class="fw-semibold">${obj.bandMaterial}</span>
     </p>
     <p class="card-text">
       Glass: <span class="fw-semibold">${obj.glass}</span>
     </p>
     <p class="card-text">
       Water Resistance: <span class="fw-semibold">${obj.waterResistance}</span>
     </p>
   </div>
 </div>
`;
    }
  }
}

function clearSearch() {
  main.innerHTML = "";
  main.style.display = "flex";
  watchDetails.style.display = "none";
  brand.innerHTML = `<option>Select Brand</option>`;
  for (var key in watches) {
    brand.innerHTML += `<option value="${key.toUpperCase()}">${key
      .toUpperCase()
      .replace("_", " ")}</option>`;
  }
  collection.innerHTML = `<option>Select Collection</option>`;

  renderAllWatches();

}
