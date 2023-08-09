let reviewsArray =[
  {
    
  }
]
let cruisesArray = [
  {
    cruiseName: "7 day trip cruise from Brisbane to Sydney",
    cruiseDestinations: [
      ["Brisbane", "Australia"],
      ["Coffs Harbor", "Australia"],
      ["Port Macquarie", "Australia"],
      ["Sydney", "Australia"],
    ],
    duration: 7,
    price: 5500,
    description:
      "Embark on an unforgettable journey from the vibrant city of Brisbane to the iconic shores of Sydney aboard a luxurious cruise liner. As you sail southward along Australia's stunning coastline, you'll be treated to breathtaking views of the azure waters of the Pacific Ocean, passing by charming coastal towns and golden beaches. Immerse yourself in the comfort and elegance of the cruise experience, indulging in world-class amenities while witnessing the ever-changing panorama of the sea. ",
    images: "slide1-image.png",
    cart: false,
    roundTrip: false,
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
    images: "slide2-image.png",
    cart: false,
    roundTrip: false,
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
    images: "slide1-image.png",
    cart: false,
    roundTrip: false,
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
    images: "slide1-image.png",
    cart: false,
    roundTrip: false,
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
    images: "slide1-image.png",
    cart: false,
    roundTrip: true,
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
    images: "slide1-image.png",
    cart: false,
    roundTrip: true,
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
    images: "slide1-image.png",
    cart: false,
    roundTrip: false,
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
    images: "slide1-image.png",
    cart: false,
    roundTrip: false,
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
    images: "slide1-image.png",
    cart: false,
    roundTrip: false,
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
    images: "slide1-image.png",
    cart: false,
    roundTrip: false,
  },
];
let filterSort;
$(document).ready(function () {
  loadHoverLogo();
  loadTripCards();
  anchorCheck();
  $("#map-trip-name").text(cruisesArray[0].cruiseName);
  checkCart();
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
loadTripCards = () =>{
  for (let i = 0; i < cruisesArray.length; i++) {
    const tripCard = cruisesArray[i];
    $("#cruiseTripsList").append($("#tripsTemplate").html());

    let currentTrip = $("#cruiseTripsList").children().eq(i + 1);
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
anchorCheck = () =>{
  
  $(".filter-list").on( "click", ".anchor", function(){
    filterSort = $(this).attr("value");
    let getFilter = $(this).parent().index();
    for (let i = -1; i < 6; i++) {
      const element = $(".filter-options").children().eq(i);
      if (getFilter === i){
        element.find(".anchor").attr("src", "../assets/Anchor-on.png")
      }
      else{
        element.find(".anchor").attr("src", "../assets/Anchor-off.png");
      }
      
    }
    
  })
}

// toggles the plus or minus button on trip card and sets the cart to either true or false
checkCart = () => {
  let getIndex;
  $(".cart-plus-button").click(function(){
    if($(this).text() === "+"){
    $(this).text("-")
    getIndex = $(this).closest(".col-4").index(); 
    cruisesArray[getIndex].cart = true;
  } 
    else{
    $(this).text("+");
    getIndex = $(this).closest(".col-4").index();  
    cruisesArray[getIndex].cart = false;
    }
  })
}

