
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
    ticketCode: 1,
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
    ticketCode: 2,
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
    ticketCode: 3,
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
    ticketCode: 4,
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
    ticketCode: 5,
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
    ticketCode: 6,
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
    ticketCode: 7,
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
    ticketCode: 8,
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
    ticketCode: 9,
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
    ticketCode: 10,
  },
];
let CruiseCart = [];
let checkLocal = JSON.parse(localStorage.getItem("cruises"));
let filter = "";
let sorter = "ascendPrice";
let sortWord = "Price: Low to High";
let onLoadCity = cruisesArray[0];
let city = onLoadCity.cruiseDestinations[0][0];
let getTodayDate = new Date();
let day = getTodayDate.getDate();
let month = getTodayDate.getMonth();
let year = getTodayDate.getFullYear();
let setDate = day + "/" + month + "/" + year;
let CartCruiseTable = [];
let filterSortArray = [];
// sets CruiseCart to "cruises" from Local storage
if (checkLocal !== null) {
  CruiseCart = CruiseCart.concat(checkLocal);
  for (let i = 0; i < CruiseCart.length; i++) {
    const storedCruises = CruiseCart[i];
    for (let i = 0; i < cruisesArray.length; i++) {
      const defaultCruise = cruisesArray[i];
      if (storedCruises.cruiseName === defaultCruise.cruiseName) {
        defaultCruise.ticket = storedCruises.ticket;
      }
    }
  }
}
$(document).ready(function () {
  checkInCart();
  loadHoverLogo();
  anchorCheck();
  loadTripCards(cruisesArray);
  checkCart();
  $(".changeHeading").text("Want an amazing cruise experience?")
  $("#map-trip-name").text(onLoadCity.cruiseName);
  getCity();

  $(window).on("load", function () {
    CartCruiseTable = JSON.parse(localStorage.getItem("cruises"));
    if (CartCruiseTable !== null) {
      loadCartTripCards(CartCruiseTable);
    }
   
  });
  removeAll();
  cardHover();
  ticketFunctions();
   checkCartNull();
});
$("#book-trip-button").click(function(){
  
  if(getCruiseCartName("7 day trip cruise from Brisbane to Sydney") === null){
    console.log("hello");
    cruisesArray[
      getCruiseArrayObject("7 day trip cruise from Brisbane to Sydney")
    ].ticket = 1;
    CruiseCart.push(cruisesArray[(getCruiseArrayObject("7 day trip cruise from Brisbane to Sydney"))]);
    anchorCheck();
    getCartInfo();
  };
});
// Changes card color and shows description on hover
cardHover = () => {
$(".trip-card").hover(
  function () {
    $(this).css("background-color", "#489FB5");
    $(this).find("#description").fadeTo("fast","1")
  },
  function () {
    $(this).css("background-color", "#82c0cc");
    $(this).find("#description").fadeTo("fast", "0");
  }
);
}
// When review carousel right button is clicked sets #card-review-text to new value
$(".review-next").click(function() {
    if ($("#reviewSlide .active").index("#reviewSlide .carousel-item") === 0) {
      $("#card-review-text").text("Best food I've ever had!");
    } else if (
      $("#reviewSlide .active").index("#reviewSlide .carousel-item") === 1
    ) {
      $("#card-review-text").text("Great service all around!");
    }else if (
      $("#reviewSlide .active").index("#reviewSlide .carousel-item") === 2
    ) {
      $("#card-review-text").text("Wonderful experience!!!!!!!");
    }
})
// When review carousel left button is clicked sets #card-review-text to new value
$(".review-previous").click(function () {
  if ($("#reviewSlide .active").index("#reviewSlide .carousel-item") === 0) {
    $("#card-review-text").text("Best food I've ever had!");
  } else if (
    $("#reviewSlide .active").index("#reviewSlide .carousel-item") === 1
  ) {
    $("#card-review-text").text("Wonderful experience!!!!!!!");
  } else if (
    $("#reviewSlide .active").index("#reviewSlide .carousel-item") === 2
  ) {
    $("#card-review-text").text("Great service all around!");
  }
});
// sets stored values for cruisesArray only if "cruises" exists in localStorage
checkInCart = () => {
  let currentStorage = JSON.parse(localStorage.getItem("cruises"));
  if (currentStorage !== null) {
    for (let i = 0; i < currentStorage.length; i++) {
      const setCartState = currentStorage[i];
      for (let j = 0; j < cruisesArray.length; j++) {
        const foundName = cruisesArray[j];
        if (setCartState.cruiseName === foundName.cruiseName) {
          foundName.cart = true;
        }
      }
    }
  } else {
    return;
  }
};
// API call when the document is ready
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
loadTripCards = (showTrips) => {
  
  $("#cruiseTripsList").empty();

  for (let i = 0; i < showTrips.length; i++) {
    const tripCard = showTrips[i];
    $("#cruiseTripsList").append($("#tripsTemplate").html());
    
    let currentTrip = $("#cruiseTripsList").children().eq(i);
    $(currentTrip)
      .find("#specific-cruise-image")
      .css("background-image", "url(" + "../assets/" + tripCard.images + ")");
    if (tripCard.cruiseName.length > 30) {
      $(currentTrip)
        .find("#trip-name")
        .text(tripCard.cruiseName.substring(0, 30) + "...");
    } else {
      $(currentTrip).find("#trip-name").text(tripCard.cruiseName);
    }
    if (tripCard.description.length > 50) {
      $(currentTrip)
        .find("#description")
        .text(tripCard.description.substring(0, 50) + "...");
        $(currentTrip)
          .find("#description").css("opacity", "0");
    } else {
      $(currentTrip).find("#description").text(tripCard.description);
      $(currentTrip).find("#description").css("opacity", "0");
      
    }
    $(currentTrip)
      .find("#card-price")
      .text("R " + tripCard.price);
    $(currentTrip)
      .find("#trip-duration")
      .text("Duration: " + tripCard.duration + " days");
    if (tripCard.cart === true) {
      $(currentTrip).find("#cart-add-button").text("-");
      $(currentTrip).find(".ticketTrip").show();
      $(currentTrip).find("#currentCruiseTickets").text(tripCard.ticket);
    } else {
      $(currentTrip).find("#cart-add-button").text("+");
      $(currentTrip).find(".ticketTrip").hide();
      $(currentTrip).find("#currentCruiseTickets").text(tripCard.ticket);
    }
    ticketFunctions()
  }
};

// Removes all values from CruiseCart, localStorage and CruiseCartTable
removeAll = () => {
  $("#remove").click(function () {
    localStorage.removeItem("cruises");
    CruiseCart = [];
    cruiseCartTable = [];
    loadCartTripCards(CruiseCart);
    checkCartNull();
  });
};
// Checks whether element with cards in Basket have anything inside of them
checkCartNull = () =>{
  if($("#cards-checkout").children().length === 0){
    $("#cards-checkout").append(
      '<div class="showNothing"><h1>No cruises in cart</h1> <img src="../assets/boat-no-orders.png"></div>'
    );
  }else{
    $(".showNothing").remove();
  }
}
// Loads trip cards and tables in checkout.html
loadCartTripCards = (showTrips) => {
 
  $("#tableBody").empty();
  let finalPrice = 0;
  for (let i = 0; i < showTrips.length; i++) {
    const tripCartCard = showTrips[i];
    $("#tableBody").append($("#tableRowTemp").html());

    let currentTrip = $("#tableBody").children().eq(i);
    $(currentTrip).find("#ticketCode").text(tripCartCard.ticketCode);
    if (tripCartCard.cruiseName.length > 30) {
      $(currentTrip)
        .find("#tableTicketName")
        .text(tripCartCard.cruiseName.substring(0, 30) + "...");
    } else {
      $(currentTrip).find("#tableTicketName").text(tripCartCard.cruiseName);
    }

    $(currentTrip).find("#tableTicketQuantity").text(tripCartCard.ticket);

    $(currentTrip)
      .find("#subTotal")
      .text("R " + tripCartCard.price*tripCartCard.ticket);
  }
  $("#cards-checkout").empty();

  for (let i = 0; i < showTrips.length; i++) {
    const tripCard = showTrips[i];
    $("#cards-checkout").append($("#horizontal-card-temp").html());

    let currentTrip = $("#cards-checkout").children().eq(i);
    $(currentTrip)
      .find("#horizontal-card-image")
      .css("background-image", "url(" + "../assets/" + tripCard.images + ")");
    if (tripCard.cruiseName.length > 30) {
      $(currentTrip)
        .find("#horizontal-cruise-name")
        .text(tripCard.cruiseName.substring(0, 30) + "...");
    } else {
      $(currentTrip).find("#horizontal-cruise-name").text(tripCard.cruiseName);
    }
    $(currentTrip)
      .find("#horizontal-card-price")
      .text("R " + tripCard.price);
    $(currentTrip).find("#ticket-counter").text(tripCard.ticket);
    finalPrice += (tripCard.price * tripCard.ticket);
  }
  $(".finalPrice").text("Total: R "+ finalPrice)
};
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
  anchorCheck();
});
// Changes filter and reloads cards to suit the filter
anchorCheck = () => {
  cardHover();
  

  if (filter) {
    if (filter === "Affordable") {
      filterSortArray = getCheapTrips();
    } else if (filter === "short") {
      filterSortArray = cruisesArray.filter((cruise) => cruise.duration <= 5);
    } else if (filter === "long") {
      filterSortArray = cruisesArray.filter((cruise) => cruise.duration > 5);
    } else if (filter === "single") {
      filterSortArray = cruisesArray.filter(
        (cruise) => cruise.cruiseDestinations.length === 2
      );
    } else if (filter === "multi") {
      filterSortArray = cruisesArray.filter(
        (cruise) => cruise.cruiseDestinations.length > 2
      );
    } else if (filter === "round") {
      filterSortArray = cruisesArray.filter(
        (cruise) => cruise.roundTrip === true
      );
    }
  } else {
    filterSortArray = cruisesArray;
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
  ticketFunctions();
};
// adds and subtracts tickets in trips page
ticketFunctions = () =>{
  // subtract tickets on trips page
  $(".trip-Minus").click(function () {
    let cardCheckIndex = $(this).closest(".col-4").index();
    console.log(cardCheckIndex)
    let getName = filterSortArray[cardCheckIndex].cruiseName;
    console.log(getName)
    let cruiseIndex = getCruiseArrayObject(getName);
    console.log(cruiseIndex)
    let toGetCruiseCartName = getCruiseCartName(
      filterSortArray[cardCheckIndex].cruiseName
    );
    if(CruiseCart[toGetCruiseCartName].ticket > 1){
    
    cruisesArray[cruiseIndex].ticket -= 1;
    CruiseCart[toGetCruiseCartName].ticket = cruisesArray[cruiseIndex].ticket;
    }
    

    getCartInfo();
    anchorCheck();
  });
   $(".tripPlus").click(function () {
     let cardCheckIndex = $(this).closest(".col-4").index();
     console.log($(this).closest("#cruiseTripsList").children());
     console.log(cardCheckIndex);
     let getName = filterSortArray[cardCheckIndex].cruiseName;
     console.log(getName);
     let cruiseIndex = getCruiseArrayObject(getName);
     console.log(cruiseIndex);
     let toGetCruiseCartName = getCruiseCartName(
       filterSortArray[cardCheckIndex].cruiseName
     );
     if (CruiseCart[toGetCruiseCartName].ticket < 10){
       
        cruisesArray[cruiseIndex].ticket += 1;
        CruiseCart[toGetCruiseCartName].ticket = cruisesArray[cruiseIndex].ticket;
     }

     getCartInfo();
     anchorCheck();
   });
}
// Function to find name in CruiseCart
getCruiseCartName = (getName) =>{
  for (let i = 0; i < CruiseCart.length; i++) {
    const element = CruiseCart[i];
    if(getName === element.cruiseName){
      return i
    }
  }
  return null;
}

// Card interactions on basket page
$("#cards-checkout").on("click","#deleteCard", function(){
  let cardCheckIndex = $(this).closest(".cartCard").index();
  CruiseCart.splice(cardCheckIndex,1);
  getCartInfo();
  loadCartTripCards(CruiseCart)
  checkCartNull()
})
$("#tableBody").on("click", "#deduct", function () {
  let tableCheckIndex = $(this).closest("tr").index();
  CruiseCart.splice(tableCheckIndex, 1);
  getCartInfo();
  loadCartTripCards(CruiseCart);
  checkCartNull();
});
$("#cards-checkout").on("click","#plus", function(){
  let cardCheckIndex = $(this).closest(".cartCard").index();
  if(CruiseCart[cardCheckIndex].ticket < 10){
  CruiseCart[cardCheckIndex].ticket += 1;
  }
  getCartInfo();
  loadCartTripCards(CruiseCart);
})
$("#cards-checkout").on("click", "#minus", function () {
  let cardCheckIndex = $(this).closest(".cartCard").index();
  if (CruiseCart[cardCheckIndex].ticket > 1){
    CruiseCart[cardCheckIndex].ticket -= 1;
  }
  
  getCartInfo();
  loadCartTripCards(CruiseCart);
});
// Gets the five cheapest trips
getCheapTrips = () => {
  let cheapTrips = [];
  cheapTrips = cruisesArray;
  cheapTrips = cheapTrips.sort((a, b) => {
    let CruiseASort = a.price;
    let CruiseBSort = b.price;
    return CruiseASort - CruiseBSort;
  });
  return cheapTrips.slice(0, 5);
};
// Gets new value and sets it to new heading in dropdown for cities
$(".sortDropDown").on("click", ".dropdown-item", function () {
  sorter = $(this).attr("value");
  sortWord = $(this).text();
  anchorCheck();
});

// toggles the plus or minus button on trip card and sets the cart to either true or false
checkCart = (checkedCartArray) => {
  cardHover();
  let cruiseArrayFind;
  if (!checkedCartArray) {
    checkedCartArray = cruisesArray;
  }
  let getIndex;
  $(".cart-plus-button").click(function () {
    if ($(this).text() === "+") {
      $(this).text("-");
      getIndex = $(this).closest(".col-4").index();
      cruiseArrayFind = getCruiseArrayObject(
        checkedCartArray[getIndex].cruiseName
      );
      cruisesArray[cruiseArrayFind].cart = true;
      cruisesArray[cruiseArrayFind].ticket += 1;
      CruiseCart.push(cruisesArray[cruiseArrayFind]);
      anchorCheck();
      console.log(CruiseCart);
      getCartInfo();
    } else {
      $(this).text("+");
      getIndex = $(this).closest(".col-4").index();
      cruiseArrayFind = getCruiseArrayObject(
        checkedCartArray[getIndex].cruiseName
      );
      cruisesArray[cruiseArrayFind].cart = false;
      cruisesArray[cruiseArrayFind].ticket = 0;
      for (let j = 0; j < CruiseCart.length; j++) {
        const checkForUnchecked = CruiseCart[j];
        if (
          cruisesArray[cruiseArrayFind].cruiseName ===
          checkForUnchecked.cruiseName
        ) {
          CruiseCart.splice(j, 1);
          console.log(CruiseCart);
          getCartInfo();
          anchorCheck();
          return;
        }
      }
    }
  });
};
// searches through cruisesArray to find matching name and returns index
getCruiseArrayObject = (cruiseGetName) => {
  for (let i = 0; i < cruisesArray.length; i++) {
    const cruiseTrip = cruisesArray[i];
    if (cruiseTrip.cruiseName === cruiseGetName) {
      return i;
    }
  }
};
// Gets the city selected by the dropdown and sets the temperature
getCity = () => {
  let cityVal;
  $(".city1").on("click", ".dropdown-item", function () {
    cityVal = $(this).parent().index();
    console.log(cityVal);
    city = onLoadCity.cruiseDestinations[cityVal][0];
    console.log(city);
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
  });
};
// set current weather to a certain image when a particular word is entered
checkCurrentWeatherInfo = (weatherWord) => {
  if (weatherWord === "Clear") {
    $(".tab-pane").css(
      "background-image",
      "url(" + "../assets/Clear.jpg" + ")"
    );
    $(".weather-icon").attr("src", "./assets/sunny-image.png");
    $(".tab-pane").css("color", "black");
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
};
// Sets the localStorage array for "cruises"
getCartInfo = () => {
  if (CruiseCart.length > 0) {
    let cruiseInfo = JSON.stringify(CruiseCart);
    localStorage.setItem("cruises", cruiseInfo);
  } else {
    localStorage.removeItem("cruises");
  }
};