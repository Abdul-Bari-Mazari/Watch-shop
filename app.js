var watches = {
  rolex: {
    rainbow_daytona: {
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

    platinum_daytona: {
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

    gmt_master: {
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

    cosmograph_daytona: {
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

    daytona_stainless_steel: {
      name: "Rolex- Daytona Stainless Steel",
      price: "67,19,720 PKR",
      gender: "Men's",
      bezel: "Stainless Steel",
      dialColor: "White",
      bandMaterial: "Stainless Steel",
      glass: "Curved Sapphire Chrystal",
      waterResistance: "100 Meters (330 Feet)",
      src: "/imgs/silver-daytona.jpg",
    },

    submariner: {
        name: "Rolex- Submaruner Date White Gold",
        price: "1,27,39,720 PKR",
        gender: "Men's",
        bezel: "Ceramic",
        dialColor: "Blue",
        bandMaterial: "White Gold",
        glass: "Curved Sapphire Chrystal",
        waterResistance: "300 Meters (1000 Feet)",
        src: "/imgs/rolex-submariner.jpg",
    }
  },

  omega: {
    speed_master: {
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

    seaMaster_planet: {
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

      seaMaster_olympic: {
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

      seaMaster_diver: {
        name: "Omega - Seamaster Olympic",
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
};

var main = document.getElementById("main");

for (var key in watches) {
  for (var key1 in watches[key]) {
    var obj = watches[key][key1];
    console.log(obj);
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

// CROWN Screw Down
// BEZELYellow Gold
// MOVEMENTAutomatic
// CASE BACKSolid
// MATERIALYellow Gold
// CASE SIZE40 mm
// CASE SHAPERound
