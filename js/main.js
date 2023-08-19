
let cruisesArray = [
  {
    cruiseName: "7 day trip cruise from Brisbane to Sydney",
    cruiseDestinations: [
      ["Brisbane", "Australia"],
      ["Coffs Harbour", "Australia"],
      ["Port Macquarie", "Australia"],
      ["Sydney", "Australia"],
    ],
    duration: 7,
    price: 5500,
    description:
      "Embark on an unforgettable journey from the vibrant city of Brisbane to the iconic shores of Sydney aboard a luxurious cruise liner. As you sail southward along Australia's stunning coastline, you'll be treated to breathtaking views of the azure waters of the Pacific Ocean, passing by charming coastal towns and golden beaches. Immerse yourself in the comfort and elegance of the cruise experience, indulging in world-class amenities while witnessing the ever-changing panorama of the sea. ",
    images: "Sydney.jpg",
    cart: false,
    roundTrip: false,
    ticket: 0,
    departure: "2024-01-20",
  },
  {
    cruiseName: "2 Week trip on the Indian ocean",
    cruiseDestinations: [
      ["Luderitz", "Namibia"],
      ["Cape Town", "South Africa"],
      ["Port Elizabeth", "South Africa"],
      ["Pomene", "Mozambique"],
      ["Port Louis", "Mauritius"],
    ],
    duration: 14,
    price: 25500,
    description:
      "Embark on an extraordinary cruise adventure from Cape Town to the idyllic shores of Mozambique, Mauritius, and Madagascar. Set sail across the Indian Ocean, witnessing the enchanting beauty of diverse landscapes, from Mozambique's pristine beaches to Mauritius' lush tropical gardens, and Madagascar's unique wildlife. Immerse yourself in the rich cultures, savor exquisite cuisines, and create lasting memories as you explore these captivating destinations. ",
    images: "Mauritius-Port-Louis.jpg",
    cart: false,
    roundTrip: false,
    ticket: 0,
    departure: "2024-02-10",
  },
  {
    cruiseName: "Trip from New Zealand to Australia",
    cruiseDestinations: [
      ["Port Taranaki", "New Zealand"],
      ["Melbourne", "Australia"],
    ],
    duration: 10,
    price: 4000,
    description:
      "Experience an unforgettable maritime journey from Port Taranaki in New Zealand to the vibrant city of Melbourne, Australia. As you cruise across the Tasman Sea, relish in the breathtaking expanse of the ocean and soak in the anticipation of discovering two distinct cultures. Revel in the comfort of the ship's amenities while capturing the essence of both countries on this remarkable trans-Tasman voyage.",
    images: "Melbourne-Aerial.jpg",
    cart: false,
    roundTrip: false,
    ticket: 0,
    departure: "2024-01-15",
  },
  {
    cruiseName: "Trip from Cape Town to Mauritius and back",
    cruiseDestinations: [
      ["Port Louis", "Mauritius"],
      ["Cape Town", "South Africa"],
    ],
    duration: 5,
    price: 2500,
    description:
      "Start an enchanting cruise voyage from Cape Town to the picturesque port of Port Louis in Mauritius. As you sail across the azure waters of the Indian Ocean, you'll be captivated by stunning sunsets, diverse marine life, and the allure of island paradises. Immerse yourself in the luxury of onboard amenities, and anticipate the cultural delights, pristine beaches, and vibrant markets that await you in the charming city of Port Louis.",
    images: "Cape-Town.jpg",
    cart: false,
    roundTrip: false,
    ticket: 0,
    departure: "2023-10-10",
  },
  {
    cruiseName: "Trip around Australia",
    cruiseDestinations: [
      ["Sydney", "Australia"],
      ["Adelaide", "Australia"],
      ["Eucla", "Australia"],
      ["Esperance", "Australia"],
      ["Perth", "Australia"],
      ["Port Hedland", "Australia"],
      ["Darwin", "Australia"],
      ["Cairns", "Australia"],
      ["Great Barrier Reef", "Australia"],
      ["Brisbane", "Australia"],
      ["Gold Coast", "Australia"],
    ],
    duration: 28,
    price: 50000,
    description:
      "Begin your extraordinary cruise odyssey that circumnavigates the vast and captivating continent of Australia. Your journey begins in Sydney's bustling harbor, and as you sail along the rugged southern coast, you'll encounter the breathtaking landscapes of Melbourne and Adelaide. From there, venture to the sun-soaked shores of the Whitsunday Islands and the Great Barrier Reef, immersing yourself in the vibrant marine life and coral wonders. Continue your voyage to the tropical paradises of Cairns and Darwin, before tracing the western coast to experience the unique charm of Perth and the awe-inspiring Kimberley region. Along the way, savor the diverse cultures, stunning vistas, and unparalleled adventures that make this cruise an unforgettable exploration of Australia's coastal treasures.",
    images: "Great-Barrier-Reef.jpg",
    cart: false,
    roundTrip: true,
    ticket: 0,
    departure: "2024-05-03",
  },
  {
    cruiseName: "Trip around South Africa",
    cruiseDestinations: [
      ["Cape Town", "South Africa"],
      ["Mossel bay", "South Africa"],
      ["Port Elizabeth", "South Africa"],
      ["Durban", "South Africa"],
      ["Richard's bay", "South Africa"],
      ["Maputo", "Mozambique"],
      ["Port Louis", "Mauritius"],
      ["Reunion island", "Reunion"],
    ],
    duration: 21,
    price: 15000,
    description:
      "Embark on a captivating cruise voyage that encircles the diverse and dramatic landscapes of South Africa. Depart from the iconic city of Cape Town, where the majestic Table Mountain stands sentinel over the harbor. Cruise along the breathtaking coastline, pausing in ports such as Mossel Bay and Durban, each offering a unique blend of history, culture, and stunning natural beauty. Explore the vibrant city of Port Elizabeth, and then venture further north to discover Richards Bay, a gateway to South Africa's Zululand region. Experience the allure of exotic destinations like Maputo in Mozambique and the tropical paradise of Reunion Island, immersing yourself in the rich tapestry of Southern Africa's cultures and landscapes before returning to Cape Town.",
    images: "Reunion-Island.jpg",
    cart: false,
    roundTrip: true,
    ticket: 0,
    departure: "2024-03-10",
  },
  {
    cruiseName: "Durban to Mauritius",
    cruiseDestinations: [
      ["Durban", "South Africa"],
      ["Port Louis", "Mauritius"],
      ["Reunion island", "Reunion"],
    ],
    duration: 5,
    price: 5000,
    description:
      "Start your holiday with an unforgettable cruise journey from the bustling port city of Durban, South Africa, to the enchanting island destination of Port Louis in Mauritius. As you sail across the Indian Ocean, immerse yourself in the ever-changing hues of the sea and savor the tranquility of open waters. Explore the vibrant cultures and breathtaking landscapes of both South Africa and Mauritius, from Durban's lively markets and golden beaches to the lush beauty of Mauritius' tropical gardens and historic sites. Experience the thrill of ocean travel while anticipating the moment you arrive in the picturesque harbor of Port Louis, where you'll be greeted by the warmth and charm of this Indian Ocean oasis.",
    images: "Durban.jpg",
    cart: false,
    roundTrip: false,
    ticket: 0,
    departure: "2024-02-21",
  },
  {
    cruiseName: "Namibia to Mozambique",
    cruiseDestinations: [
      ["Walvis Bay, Namibia "],
      ["Lüderitz, Namibia"],
      ["Port Nolloth, South Africa"],
      ["Cape Town, South Africa"],
      ["Port Elizabeth, South Africa"],
      ["Durban, South Africa"],
      ["Maputo, Mozambique"],
      ["Inhaca Island, Mozambique"],
      ["Beira, Mozambique"],
    ],
    duration: 20,
    price: 45000,
    description:
      "Embark on an extraordinary cruise odyssey that takes you from the rugged shores of Namibia to the exotic paradise of Mozambique. Departing from Namibia's vibrant port of Walvis Bay, you'll sail along the captivating Southern African coastline, experiencing the stark beauty of Lüderitz and the dynamic charm of Cape Town. Explore the diverse landscapes and cultures of South Africa's coastal gems, from the bustling city of Durban to the historic allure of Maputo. As you cross the Indian Ocean, revel in the anticipation of discovering Mozambique's hidden treasures, from pristine island retreats to the vibrant streets of Pemba, making this journey an unforgettable exploration of Southern Africa's maritime wonders.",
    images: "Mozambique.jpg",
    cart: false,
    roundTrip: false,
    ticket: 0,
    departure: "2024-01-25",
  },
  {
    cruiseName: "Cape Town to Port Elizabeth",
    cruiseDestinations: [
      ["Cape Town", "South Africa"],
      ["Port Elizabeth", "South Africa"],
    ],
    duration: 5,
    price: 4000,
    description:
      "Embark on a delightful cruise voyage from Cape Town's iconic harbor to the charming coastal city of Port Elizabeth. As you sail along South Africa's captivating coastline, you'll be treated to breathtaking ocean views and the chance to explore vibrant ports along the way. Immerse yourself in the comfort and luxury of the cruise ship, relishing the onboard amenities while experiencing the unique blend of cultures and landscapes that define this memorable journey.",
    images: "Port-Elizabeth.jpg",
    cart: false,
    roundTrip: false,
    ticket: 0,
    departure: "-2023-11-21",
  },
  {
    cruiseName: "Melbourne to Perth",
    cruiseDestinations: [
      ["Melbourne", "Australia"],
      ["Perth", "Australia"],
    ],
    duration: 6,
    price: 8000,
    description:
      "Embark on an awe-inspiring cruise expedition from the vibrant city of Melbourne to the enchanting shores of Perth. Sail across the stunning waters of the Great Australian Bight, immersing yourself in the beauty of coastal landscapes and the tranquility of the open ocean. Indulge in the luxury of the cruise ship while witnessing the transition from the urban elegance of Melbourne to the laid-back charm of Perth, making this maritime journey a truly unforgettable experience.",
    images: "Perth.jpg",
    cart: false,
    roundTrip: false,
    ticket: 0,
    departure: "2023-10-20",
  },
];
let filter = "";
let sorter = "ascendPrice";
let sortWord = "Price: Low to High"
let onLoadCity = cruisesArray[0];
let city = onLoadCity.cruiseDestinations[0][0];
let getTodayDate = new Date();
let day = getTodayDate.getDate();
let month = getTodayDate.getMonth();
let year = getTodayDate.getFullYear();
let setDate = day + "/" + month + "/" + year;
$(document).ready(function () {
  loadHoverLogo();
  anchorCheck();
  loadTripCards(cruisesArray);
  checkCart();
  $("#map-trip-name").text(onLoadCity.cruiseName);
  getCity();
});
 $.ajax({
   type: "GET",
   url:
     "https://api.openweathermap.org/data/2.5/weather?q=" +
     city +
     "&appid=7dad567f32f0c50139fd842d1d92fba0",
   success: function (data) {
     temp = data;
     console.log(temp.weather[0].main);
   },
 }).done(function () {
   $("#Monday-tab")
     .find(".temperature")
     .text(Math.round(temp.main.temp - 273) + "°C");
   $("#Monday-tab").find(".date").text(setDate);
   $("#Monday-tab").find(".city").text(city);
   $("#Monday-tab")
     .find(".high")
     .text("High: " + Math.round(temp.main.temp_max - 273) + " °C");
   $("#Monday-tab")
     .find(".low")
     .text("Low: " + Math.round(temp.main.temp_min - 273) + " °C");
   $("#Monday-tab")
     .find(".wind-speed")
     .text("Wind speed: " + Math.round(temp.wind.speed * 1.943844) + " knots");
   $("#Monday-tab").find(".weather-word").text(temp.weather[0].main);
   checkCurrentWeatherInfo(temp.weather[0].main);
 });
// Change Logo image to hover logo image
loadHoverLogo = () => {
  if (document.location.href.match("./index.html")) {
    $(".navbar-brand").hover(
      function () {
        $(this).find("img").attr("src", "../assets/Logo-hover.png");
        
      },
      function () {
         $(this).find("img").attr("src", "../assets/Logo-normal.png");
        
      }
    );
  } else {
    $(".navbar-brand").hover(
      function () {
        $(this).find("img").attr("src", "../assets/Logo-hover.png");
      },
      function () {
        $(this).find("img").attr("src", "../assets/Logo-normal.png");
      }
    );
  }
};
// Loads trip cards using the object array cruiseArray
loadTripCards = (showTrips) =>{
  $("#cruiseTripsList").empty();

  for (let i = 0; i < showTrips.length; i++) {
    const tripCard = showTrips[i];
    $("#cruiseTripsList").append($("#tripsTemplate").html());

    let currentTrip = $("#cruiseTripsList").children().eq(i);
    $(currentTrip).find("#specific-cruise-image").css("background-image", 'url('+"../assets/" +tripCard.images +')');
    if (tripCard.cruiseName.length > 30) {
      $(currentTrip).find("#trip-name").text(tripCard.cruiseName.substring(0,30) + "...");
    } else{
         $(currentTrip).find("#trip-name").text(tripCard.cruiseName);
    }
    if (tripCard.description.length > 50) {
      $(currentTrip).find("#description").text(tripCard.description.substring(0,50) + "...");
    } else {
      $(currentTrip).find("#description").text(tripCard.description);
    }
    $(currentTrip).find("#card-price").text("R " + tripCard.price);
    $(currentTrip).find("#trip-duration").text("Duration: "+tripCard.duration+ " days");
    
  }
}
// Determines which anchor in trip-filter-div is active and gets the value
$(".filter-list").on("click", ".anchor", function () {
  filter = $(this).attr("value");
  console.log(filter);
  let getIndex = $(this).parent().index();
  for (let i = 0; i < 7; i++) {
    const element = $(".filter-options").children().eq(i);
    if (getIndex === i) {
      element.find(".anchor").attr("src", "../assets/Anchor-on.png");
    } else {
      element.find(".anchor").attr("src", "../assets/Anchor-off.png");
    }
  }
  anchorCheck()
});
anchorCheck = () =>{
  let filterSortArray =[];
  
  
    if(filter){
      if(filter === "Affordable"){
        filterSortArray = getCheapTrips();
        
      }
      else if(filter === "short"){
        filterSortArray = cruisesArray.filter(cruise => cruise.duration <= 5);
      }
      else if(filter === "long"){
        filterSortArray = cruisesArray.filter(cruise => cruise.duration > 5);
      }
      else if(filter === "single"){
        filterSortArray =  cruisesArray.filter(cruise => cruise.cruiseDestinations.length === 2);
      }
      else if(filter === "multi"){
        filterSortArray = cruisesArray.filter(cruise => cruise.cruiseDestinations.length > 2);
      }
      else if(filter === "round"){
        filterSortArray = cruisesArray.filter(cruise => cruise.roundTrip === true)
      }
    }
    else{
      filterSortArray = cruisesArray
    }
    if (sorter === "ascendPrice") {
      filterSortArray = filterSortArray.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (sorter === "descendPrice") {
      filterSortArray = filterSortArray.sort((a, b) => {
        return b.price - a.price;
      });
    } else if (sorter === "ascendDuration") {
      filterSortArray = filterSortArray.sort((a, b) => {
        return a.duration - b.duration;
      });
    } else if (sorter === "descendDuration") {
      filterSortArray = filterSortArray.sort((a, b) => {
        return b.duration - a.duration;
      });
    } else if (sorter === "ascendDate") {
      filterSortArray = filterSortArray.sort((a, b) => {
        let departureSortA = new Date(a.departure);
        let departureSortB = new Date(b.departure);
        return departureSortA - departureSortB;
      });
    } else if (sorter === "descendDate") {
      filterSortArray = filterSortArray.sort((a, b) => {
        let departureSortA = new Date(a.departure);
        let departureSortB = new Date(b.departure);
        return departureSortB - departureSortA;
      });
    }
    loadTripCards(filterSortArray);
    checkCart(filterSortArray);
    $(".sortButton").text(sortWord);
  
}
getCheapTrips = () =>{
let cheapTrips = [];
cheapTrips = cruisesArray
cheapTrips = cheapTrips.sort((a,b) =>{
  let CruiseASort = a.price;
  let CruiseBSort = b.price;
  return CruiseASort - CruiseBSort;
})
return cheapTrips.slice(0,5);
  
}

  $(".sortDropDown").on('click','.dropdown-item',function(){
    sorter =$(this).attr("value");
    sortWord = $(this).text();
    anchorCheck();
    
  });
 
// toggles the plus or minus button on trip card and sets the cart to either true or false
checkCart = (checkedCartArray) => {
  if (!checkedCartArray){
    checkedCartArray = cruisesArray
  }
  let getIndex;
  $(".cart-plus-button").click(function () {
    if ($(this).text() === "+") {
      $(this).text("-");
      getIndex = $(this).closest(".col-4").index();
      checkedCartArray[getIndex].cart = true;
    } else {
      $(this).text("+");
      getIndex = $(this).closest(".col-4").index();
      checkedCartArray[getIndex].cart = false;
    }
    console.log(checkedCartArray[getIndex].cruiseName);
    console.log(checkedCartArray[getIndex].cart);
  });
}
getCity = () =>{
  let cityVal;
  $(".city1").on("click",".dropdown-item", function(){
    cityVal = $(this).parent().index();
    console.log(cityVal);
    city = onLoadCity.cruiseDestinations[cityVal][0];
    console.log(city)
    $.ajax({
      type: "GET",
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=7dad567f32f0c50139fd842d1d92fba0",
      success: function (data) {
        temp = data;
        console.log(temp.weather[0].main);
      },
    }).done(function () {
      $("#Monday-tab")
        .find(".temperature")
        .text(Math.round(temp.main.temp - 273) + "°C");
      $("#Monday-tab").find(".date").text(setDate);
      $("#Monday-tab").find(".city").text(city);
      $("#Monday-tab")
        .find(".high")
        .text("High: " + Math.round(temp.main.temp_max - 273) + " °C");
      $("#Monday-tab")
        .find(".low")
        .text("Low: " + Math.round(temp.main.temp_min - 273) + " °C");
      $("#Monday-tab")
        .find(".wind-speed")
        .text(
          "Wind speed: " + Math.round(temp.wind.speed * 1.943844) + " knots"
        );
      $("#Monday-tab").find(".weather-word").text(temp.weather[0].main);
      checkCurrentWeatherInfo(temp.weather[0].main);
    });
    $(".city-button").text(city);
  })
}
checkCurrentWeatherInfo = (weatherWord) =>{
  if (weatherWord === "Clear") {
        $(".tab-pane").css(
          "background-image",
          "url(" + "../assets/Clear.jpg" + ")"
        );
        $(".weather-icon").attr("src","./assets/sunny-image.png")
      } else if (weatherWord === "Clouds") {
        $(".tab-pane").css(
          "background-image",
          "url(" + "../assets/Cloudy.jpg" + ")"
        );
        $(".weather-icon").attr("src", "./assets/cloud.png");
        $(".tab-pane").css("color", "white");
      } else if (weatherWord === "Rain") {
        $(".tab-pane").css(
          "background-image",
          "url(" + "../assets/Raining.jpg" + ")"
        );
         $(".weather-icon").attr("src", "./assets/raining.png");
        $(".tab-pane ").css("color", "white");
      }
}
